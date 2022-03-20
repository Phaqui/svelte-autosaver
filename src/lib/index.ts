import { writable } from "svelte/store";
import { onDestroy } from "svelte";

type AutosaveOpts = {
    save_fn: (dirty_fields?: Set<string>) => Promise<boolean>;
    save_after?: number;
    save_every?: number;
};

type ActionOpts = {
    name?: string;
};

type Pojo = {
    [index: string]: any;
};

/*
    Sveltekit will of course run autosaver() during SSR, as I don't
    require it guarded behind a 'browser'-check or in an 'onMount'.
    Therefore, we must at least return an object, so that deconstruction
    works, as in the code

    const { autosaver, ... } = autosaver(...);

    that is, if autosaver() returns undefined, SSR will fail on this
    destructuring.

    As for the individual fields of the object that we return during SSR,
    however:

    autosaver()
        exists just to make typescript happy. It doesn't otherwise need to
        exist, because any destructures will just assign undefined to it,
        and sveltekit doesn't run any actions during SSR.

    save_manually() - and set_dirty()
        some could call these during component initialization
        (though I don't know for what reason, but it could happen, so we'll
        make it a noop funciton).

    dirty and last_saved (stores)
        just making them stores with a nice default value for use during SSR
*/
const SSRMock = {
    autosave: (_node: HTMLElement, _params: ActionOpts) => ({ destroy: () => undefined}),
    save_manually: () => undefined,
    dirty: writable(false),
    last_saved: writable(new Date()),
    set_dirty: (_field?: string) => undefined,
};

export default function autosaver(
    { save_fn, save_after, save_every }: AutosaveOpts
) {
    if (!is_browser()) return SSRMock;

    let timer_frequently = null;
    let timer_inactivity = null;
    let internal_store_dirty = writable(false);
    let internal_store_lastsaved = writable(new Date());
    let elements_watched = new Map();
    let dirty_fields = new Set<string>();
    let names_watched = new Set<string>();

    // defaults: save after 6s of inactivity,
    // save regardless every 30s (but only if dirty at that time)
    if (!save_after) save_after =  6 * 1000;
    if (!save_every) save_every = 30 * 1000;

    function destructor() {
        for (let [_elem, destructor] of elements_watched.entries()) {
            destructor();
        }

        window.clearTimeout(timer_frequently);
        window.clearTimeout(timer_inactivity);
    }
    onDestroy(destructor);

    function action(dom_el: HTMLElement, params?: ActionOpts) {
        let name, input_handler;

        name = dom_el.getAttribute("name");

        if (elements_watched.has(dom_el)) {
            throw new Error("autosave: action applied to already watched dom element");
        }

        if (typeof params === "undefined") {
        } else if (is_pojo(params)) {
            if ("name" in params) {
                if (typeof params.name === "string" && params.name.length > 0) {
                    name = params.name;
                } else {
                    throw new TypeError("params.name must be non-empty string");
                }
            }
        } else {
            throw new TypeError("params must be an object");
        }

        if (name) {
            if (names_watched.has(name)) {
                throw new Error(`autosaver: duplicate name ("${name}")`);
            } else {
                names_watched.add(name);
                input_handler = () => on_change(name);
            }
        } else {
            input_handler = () => on_change();
        }

        elements_watched.set(dom_el, this_destructor);

        function this_destructor() {
            elements_watched.delete(dom_el);
            if (dirty_fields.has(name)) {
                console.warn(`autosaver: field with name "${name}" was removed from the DOM while dirty`);
            }
            names_watched.delete(name);
            dom_el.removeEventListener("input", input_handler);
        }

        if (dom_el instanceof HTMLInputElement || dom_el instanceof HTMLTextAreaElement) {
            dom_el.addEventListener("input", input_handler);
        } else {
            throw new Error("autosave: can only be used on input or textarea elements");
        }

        return { destroy: this_destructor };
    }

    async function _save() {
        console.debug("internal:_save()", dirty_fields);
        let res: boolean;
        if (names_watched.size > 0) {
            console.assert(dirty_fields.size > 0, "_save() called with empty dirty_fields");
            res = await save_fn(dirty_fields);
        } else {
            res = await save_fn();
        }
        if (res === true) {
            dirty_fields.clear();
            internal_store_lastsaved.set(new Date());
            internal_store_dirty.set(false);
        }
    }

    async function on_inactivity() {
        await _save();

        window.clearTimeout(timer_inactivity);
        window.clearTimeout(timer_frequently);
        timer_inactivity = null;
        timer_frequently = null;
    }

    async function on_period() {
        // set the periodic timer to null to make sure it gets started
        // again when another key is pressed (no need to clearTimeout,
        // because this is the handler function for that timer, so we
        // know it has already fired)
        timer_frequently = null;

        await _save();
    }

    async function save_manually() {
        // when saving manually, we stop the timers
        if (timer_inactivity) {
            window.clearTimeout(timer_inactivity);
            timer_inactivity = null;
        }
        if (timer_frequently) {
            window.clearTimeout(timer_frequently);
            timer_frequently = null;
        }
        await _save();
    }

    function on_change(field?: string) {
        if (field) {
            console.assert(typeof field === "string", "dirty_fields set added something that was not a string");
            dirty_fields.add(field);
        }
        internal_store_dirty.set(true);

        // clear current inactivty timer if it's still going
        if (timer_inactivity) {
            window.clearTimeout(timer_inactivity);
        }

        // start inactivity timer
        timer_inactivity = window.setTimeout(on_inactivity, save_after);

        // start frequency timer if it's not already going
        if (!timer_frequently) {
            timer_frequently = window.setTimeout(on_period, save_every);
        }
    }

    const dirty = { subscribe: internal_store_dirty.subscribe };
    const last_saved = { subscribe: internal_store_lastsaved.subscribe };

    return {
        autosave: action,
        save_manually,
        dirty,
        last_saved,
        set_dirty: on_change,
    };
}


function is_pojo(o: unknown): o is Pojo {
    return !!o && Object.getPrototypeOf(o) === Object.prototype;
}

// importing from "$app/env" to get `browser` didn't really work
// when the package was added to a test project with
// npm i -D @phaqui/autosaver
// so.. rolling my own. It's better that it doesn't rely on sveltekit
// when it doesn't have to, anyway!
function is_browser() {
    // should be good. I don't know in which situations we could have a window,
    // but not a document.. but it's fine to just be 100%, I guess
    return typeof window !== "undefined" && typeof window.document !== "undefined";
}

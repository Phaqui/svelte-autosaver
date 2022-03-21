# svelte-autosaver

Watch your text inputs and textareas, and trigger a function on inactivity,
or after a period of longer, continous activity.

## Installing

```bash
npm i -D @phaqui/autosaver
```

> Note: pnpm, yarn etc is untested, but I would assume it would work too.

## Documentation and demo

See the (github pages site)[https://phaqui.github.io/svelte-autosaver] for documentation and demonstration of use.

## Basic use

Instantiate the autosaver, specifying the function to call as the 'save_fn'.

```html
<script>
    import autosaver from "@phaqui/autosaver";

    let text = "";

    const { autosave, dirty, last_saved } = autosaver({ save_fn: save });

    async function save() {
        // autosaver triggered a save due to inactivty or periodically
        console.log("save now");
        // save to local/sessionstorage, use indexeddb, call some api, or whatever
    }
</script>

<p>Dirty? {$dirty}</p>
<p>Last saved: {$last_saved}</p>
<input type="text" bind:value={text} use:autosave>
```

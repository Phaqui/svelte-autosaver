# svelte-autosaver

Watch your text inputs and textareas, and trigger a function on inactivity,
or after a period of longer, continous activity.

## Installing

If you're seeing this, you've probably already done this step. Congrats!

```bash
npm i -D @phaqui/autosaver
```

> Note: pnpm, yarn etc is untested, but I would assume it would work too.

## Documentation and demo

See WEBSITE for documentation and demonstration about usage.

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

<input type="text" bind:value={text} use:autosave>
```

<script lang="ts">
    import autosaver from "$lib/index";
    import Console from "./_console.svelte";

    let firstname = "", lastname = "";
    let firstname3 = "", lastname3 = "";
    let firstname4 = "", lastname4 = "";
    let text1 = "";
    let text4 = "";
    let console1, console2, console3, console4;

    const autosaver_opts1 = {
        save_fn: save1,
        save_after: 1*1000,
        save_every: 3*1000,
    };
    const {
        autosave: autosave1,
        dirty: dirty1,
        last_saved: last_saved1
    } = autosaver(autosaver_opts1);

    const autosaver_opts2 = {
        save_fn: save2,
        save_after: 1*1000,
        save_every: 3*1000,
    };
    const {
        autosave: autosave2,
        dirty: dirty2,
    } = autosaver(autosaver_opts2);

    const autosaver_opts3 = {
        save_fn: save3,
        save_after: 1*1000,
        save_every: 3*1000,
    };
    const {
        autosave: autosave3,
        dirty: dirty3,
    } = autosaver(autosaver_opts3);

    const autosaver_opts4 = { save_fn: save4 };
    const {
        autosave: autosave4,
        dirty: dirty4,
        save_manually: save_manually4,
    } = autosaver(autosaver_opts4);

    save_manually4();

    async function save1() {
        console1.log("saving now");
        return true;
    }

    async function save2() {
        console2.log("saving now");
        return true;
    }

    async function save3(dirty_fields: Set<string>) {
        console3.log("saving now, dirty fields:", dirty_fields);
        return true;
    }

    async function save4(dirty_fields: Set<string>) {
        console4.log("saving now, dirty fields:", dirty_fields);
        return true;
    }
</script>

<h1>Welcome to @phaqui/autosaver</h1>

<p>
    Watch your text inputs and textareas, and trigger a function on inactivty,
    or after a period of longer, continous activity.
</p>

<h2>Installing</h2>
<div class="terminal">npm i -D @phaqui/autosaver</div>

<h2>Basic use</h2>

<p>
    Instantiate the autosaver, specifying the function to call as the 'save_fn'.
    Also demonstrated here are setting custom times in milliseconds for when to
    consider inactivity (save_after) and non-stop-activity (save_every). These
    default to six 6 and 30 seconds, respectively.
</p>

<div class="example">
    <div class="code">
        <pre>&lt;script lang="ts"&gt;
    import autosaver from "@phaqui/autosaver";

    let text = "";

    <span class="green">const autosaver_opts = &#123;
        save_fn: </span><span class="orange">save</span><span class="green">,
        save_after: 1*1000,
        save_every: 3*1000,
    &#125;</span>
    <span class="green">const &#123; autosave, dirty, last_saved &#125; = autosaver(autosaver_opts);</span>

    <span class="orange">async function save() &#123;
        console.log("saving now");

        // Notice: return true to indicate that the save was successful,
        // so the $dirty and $last_saved stores reflects that
        return true;
    &#125;</span>
&lt;/script&gt;

&lt;p&gt;dirty? <span class="green">&#123;$dirty&#125;</span>&lt;/p&gt;
&lt;p&gt;last saved: <span class="green">&#123;$last_saved&#125;</span>&lt;/p&gt;
&lt;input bind:value=&#123;text&#125; <span class="green">use:autosave</span>&gt;
        </pre>
    </div>

    <div class="output">
        <div>
            <p>Dirty? {$dirty1}</p>
            <p>Last saved: {$last_saved1}</p>
            <input bind:value={text1} use:autosave1>
        </div>

        <div class="console">
            <Console bind:this={console1} />
        </div>
    </div>
</div>

<h2>Watch multiple elements at the same time</h2>

<p>
    The action can be applied to multiple elements, and will track them all,
    calling the save method when any of them are changed.
</p>

<div class="example">
    <div class="code">
        <pre>&lt;script lang="ts"&gt;
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    const autosaver_opts = &#123;
        save_fn: save,
        save_after: 1*1000,
        save_every: 3*1000,
    &#125;
    const &#123; autosave, dirty &#125; = autosaver(autosaver);

    async function save() &#123;
        console.log("saving now");
        return true;
    &#125;
&lt;/script&gt;

&lt;p&gt;dirty? &#123;$dirty&#125;&lt;/p&gt;
&lt;p&gt;last saved: &#123;$last_saved&#125;&lt;/p&gt;
&lt;input bind:value=&#123;firstname&#125; use:autosave&gt;
<span class="green">&lt;input bind:value=&#123;lastname&#125; use:autosave&gt;</span>
        </pre>
    </div>

    <div class="output">
        <div>
            <p>Dirty? {$dirty2}</p>
            <input bind:value={firstname} use:autosave2>
            <input bind:value={lastname} use:autosave2>
        </div>

        <div class="console">
            <Console bind:this={console2} />
        </div>
    </div>
</div>

<h2>Which fields changed?</h2>

<p>
    If the element has no 'name' attribute, and no custom name is set in the
    action params, the autosaver will not track which elements are dirty, and
    just call the save_fn without any arguments.
    <br>
    <br>
    However, if the element has a name attribute (or a "name" is given in the
    params to the action, then save_fn will be called with a set containing
    the names of the elements that was changed.
    <br>Note: Passing the name in the action param will take presence over the
    name set as an attribute, if both are found.
</p>

<!-- EXAMPLE 3 -->

<div class="example">
    <div class="code">
        <pre>&lt;script lang="ts"&gt;
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    const autosaver_opts = &#123;
        save_fn: save,
        save_after: 1*1000,
        save_every: 3*1000,
    &#125;
    const &#123; autosave, dirty &#125; = autosaver(autosaver);

    async function save(<span class="green">dirty_fields: Set&lt;string&gt;</span>) &#123;
        console.log("saving now, <span class="green">dirty fields:", dirty_fields</span>);
        return true;
    &#125;
&lt;/script&gt;

&lt;p&gt;dirty? &#123;$dirty&#125;&lt;/p&gt;
&lt;input <span class="green">name="firstname"</span> bind:value=&#123;firstname&#125; use:autosave&gt;
&lt;input <span class="green">name="lastname"</span> bind:value=&#123;lastname&#125; use:autosave<span class="green">=&#123;&#123; name: "overridden-name" &#125;&#125;</span>&gt;
        </pre>
    </div>

    <div class="output">
        <div>
            <p>Dirty? {$dirty3}</p>
            <input name="firstname" bind:value={firstname3} use:autosave3>
            <input name="lastname" bind:value={lastname3} use:autosave3={{ name: "overridden-name" }}>
        </div>

        <div class="console">
            <Console bind:this={console3} />
        </div>
    </div>
</div>

<!-- EXAMPLE 4 -->
<h2>Save manually</h2>

<p>
    Whenever you need to issue a save manually, use the provided save_manually
    function instead of calling your save_fn directly, so that the dirty- and
    last_saved stores are updated.
</p>

<div class="example">
    <div class="code">
        <pre>
&lt;script lang="ts"&gt;
    import autosaver from "@phaqui/autosaver";

    let firstname = "", lastname = "";

    <span class="light-red">// Notice: For this example, using default times
    // (saves after 6s of inactivity, save every 30s of activity)</span>
    const autosaver_opts = &#123; save_fn: save &#125;;
    const &#123; autosave, dirty, <span class="orange">save_manually</span> &#125; = autosaver(autosaver);

    async function save(dirty_fields: Set&lt;string&gt;) &#123;
        console.log("saving now, dirty fields:", dirty_fields);
        return true;
    &#125;
&lt;/script&gt;

&lt;p&gt;dirty? &#123;$dirty&#125;&lt;/p&gt;
&lt;input name="firstname" bind:value=&#123;firstname&#125; use:autosave&gt;
&lt;input name="lastname" bind:value=&#123;lastname&#125; use:autosave=&#123;&#123; name: "overridden-name" &#125;&#125;&gt;
<span class="green">&lt;button on:click=&#123;</span><span class="orange">save_manually</span><span class="green">&#125;&gt;save now&lt;/button&gt;</span>
        </pre>
    </div>

    <div class="output">
        <div>
            <p>Dirty? {$dirty4}</p>
            <input name="firstname" bind:value={firstname4} use:autosave4>
            <input name="lastname" bind:value={lastname4} use:autosave4={{ name: "overriden-name" }}>
            <button on:click={save_manually4}>Save now</button>
        </div>

        <div class="console">
            <Console bind:this={console4} />
        </div>
    </div>
</div>

<style>
    .example {
        display: grid;
        grid-gap: 20px;
        grid-template-areas: 'code output';
        grid-template-columns: 1fr 1fr;
    }

    .example > .code {
        grid-area: code;
        background-color: #373740;
        padding: 4px;
        color: white;
        border: 1px solid black;
    }

    .example > .output {
        display: grid;
        grid-area: output;
        border: 1px solid black;
    }

    .terminal {
        font-family: monospace;
        font-size: 18px;
        color: white;
        display: inline;
        background-color: #333;
        padding: 6px;
    }

    .console {
        height: 100%;
    }

    span.green {
        color: #11ec11;
    }
    span.orange {
        color: orange;
    }
    span.light-red {
        color: #f9998f;
    }
</style>

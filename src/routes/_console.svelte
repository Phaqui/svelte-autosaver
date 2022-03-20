<script lang="ts">

    let entries = [];

    export function log(...s: Array<string | Set<any>>) {
        const last = entries[entries.length - 1];
        const value = s.map(str).join(" ");
        if (!last) {
            entries.push({ type: "string", value, num: 1 });
        } else if (last.type === "string" && last.value === value) {
            last.num++;
        } else {
            entries.push({ type: "string", value, num: 1 });
        }
        entries = entries;
    }

    function str(val: undefined | string | Set<any>) {
        if (typeof val === "undefined") return "<undefined>";
        if (typeof val === "string") return val;
        if (val.constructor === Set) {
            return set_str(val);
        }
    }

    function set_str(set: undefined | Set<string>) {
        if (typeof set === "undefined") return "<undefined>";
        if (set.size === 0) return "<empty Set>";
        return `<Set [ ${[...set.keys()].map(s => `'${s}'`).join(", ")} ]>`;
    }
</script>

<main>
    {#each entries as { value, num }}
        <article>
            <span class="value">{value}</span>
            {#if num > 1}
                <span class="num">{num}</span>
            {/if}
        </article>
    {/each}
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        background-color: #333;
        color: white;
        font-family: monospace;
    }

    article {
        display: grid;
        grid-template-areas:
           'icon value num';
        grid-template-columns: 24px 1fr 24px;
        align-items: center;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
    }

    article > span.value {
        grid-area: value;
        padding: 4px;
    }

    article > .num {
        grid-area: num;
        text-align: center;
        background-color: #5f5ff7;
        color: white;
        padding: 4px;
        border-radius: 50%;
    }
</style>

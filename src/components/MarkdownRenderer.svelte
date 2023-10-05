<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';

    export let source: string;
</script>

<div class="md-container text-alabaster">
    <SvelteMarkdown {source} />
</div>

<style lang="css">
    :global(.md-container h1) {
        line-height: 1.75rem;
        margin: 0.75em 0 0.75em 0;
        font-size: 1.25em;
        text-transform: lowercase;
        font-weight: 300;
        font-family: Montserrat Variable;
        /* color: #66999B; */
    }

    :global(.md-container h2) {
        margin: 0.5em;
        font-size: 1em;
        text-transform: lowercase;
        font-weight: 400;
        font-family: Montserrat Variable;
        /* color: #66999B; */
    }
    :global(.md-container p) {
        margin: 0.75em 0 0.75em 0;
    }

    :global(.md-container a) {
        color: #66999B;
    }
</style>
<script lang="ts">
    import type PostInterface from "../interfaces/PostInterface";
    import MarkdownRenderer from "./MarkdownRenderer.svelte";

    export let post: PostInterface;

</script>

{#if project?.writeup && project.writeup !== ""}
    <h2 class="text-alabaster text-xl">about</h2>
    <div class="font-literata font-light pb-8">
        <MarkdownRenderer source={project.writeup} />
    </div>
{/if}
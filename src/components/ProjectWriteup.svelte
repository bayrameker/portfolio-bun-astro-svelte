<script lang="ts">
    import type ProjectInterface from "../interfaces/ProjectInterface";
    import MarkdownRenderer from "./MarkdownRenderer.svelte";

    export let project: ProjectInterface;

</script>

{#if project?.writeup && project.writeup !== ""}
    <h2 class="text-alabaster text-xl">about</h2>
    <div class="font-literata font-light pb-8">
        <MarkdownRenderer source={project.writeup} />
    </div>
{/if}
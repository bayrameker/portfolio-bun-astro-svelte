<script lang="ts">
    import PROJECTS from "../data/projects";
    import ProjectCard from "./ProjectCard.svelte";

</script>

<ul class="flex flex-col justify-center align-center w-full gap-4 pb-8">
    
    <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap">
    {#each PROJECTS as project}
        <ProjectCard {project} />
    {/each}
        </div>
        </div>
        </section>
</ul>

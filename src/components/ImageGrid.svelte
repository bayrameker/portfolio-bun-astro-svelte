<script lang="ts">
    import type ProjectInterface from "../interfaces/ProjectInterface";

    export let project: ProjectInterface;

    let images = project.images ?? [];
    let scrollY = 0;

    const swapImages = (idxA: number, idxB: number) => {
        images = images.map((img, idx) => {
            if (idx === idxA) return images[idxB];
            if (idx === idxB) return images[idxA];
            return img;
        });
    }
    // sveltified the js+css version from https://www.cssscript.com/image-zoom-hover-effect/
    let imgToZoom: HTMLImageElement | null = null;

    function onZoom(event: MouseEvent) {
        if (imgToZoom === null) return;

        const x = event.clientX - imgToZoom.offsetLeft;
        const y = event.clientY - imgToZoom.offsetTop + scrollY;
        
        imgToZoom.style.transformOrigin = `${x}px ${y}px`;
        imgToZoom.style.transform = "scale(2.5)";
    }

    function offZoom() {
        if (imgToZoom === null) return;
        imgToZoom.style.transformOrigin = `center center`;
        imgToZoom.style.transform = "scale(1)";
    }

</script>

<svelte:window bind:scrollY />

{#if images.length != 0}
    <div class="grid gap-4 mb-4">
        <div class="h-full w-full overflow-hidden shadow">
            <img
                bind:this={imgToZoom}
                on:mousemove={onZoom}
                on:mouseleave={offZoom}
                on:focus={() => {}}
                class="h-full w-full rounded-sm origin-center-center object-cover"
                src="/images/{project.id}/{images[0]}.png"
                alt=""
            >
        </div>
        <div class="grid gap-4" style="grid-template-columns: repeat({images.length - 1}, minmax(0, 1fr));">
            {#each images.slice(1) as image, idx}
                <button class="shadow" on:click={() => swapImages(0, idx + 1)}>
                    <img
                        class="h-auto max-w-full rounded-sm"
                        src="/images/{project.id}/{image}.png"
                        alt={project.id}
                    >
                </button>
            {/each}
        </div>
    </div>
{/if}

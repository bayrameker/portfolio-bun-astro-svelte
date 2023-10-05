<script lang="ts">
    import Icon from "@iconify/svelte";
    import type PostInterface from "../interfaces/PostInterface";

    export let post: PostInterface | undefined;

    const linkInfo = [
        {
            link: post?.website, 
            icon: 'mdi:web',
            title: 'Website'
        }, 
        {
            link: post?.repo, 
            icon: 'mdi:github',
            title: 'Source code'
        },
        {
            link: post?.android,
            icon: 'mingcute:android-fill',
            title: 'Android app'
        }
    ]

</script>

<div class="flex flex-row flex-wrap gap-2">
    {#each linkInfo as {link, icon, title}}
        {#if link && link != ''}
            <div class="flex flex-row gap-2 items-center shadow bg-oxford-800 py-1 px-2">
                <Icon icon={icon} class="text-alabaster" />
                <a href={link} class="hover:text-timberwolf active:text-oxford-300">{title}</a>
            </div>
        {/if}
    {/each}
</div>
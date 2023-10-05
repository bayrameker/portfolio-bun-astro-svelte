<script lang="ts">
    import POSTS from "../data/posts";
    import PostCard from "./PostCard.svelte";
  

</script>

<ul class="flex flex-col justify-center align-center w-full gap-4 pb-8">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
            <h2 class="text-2xl font-extrabold text-gray-900">BLOG</h2>
            <section class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
    {#each POSTS as post}
        <PostCard {post} />
    {/each}
</section>
</article>
</section>

</ul>

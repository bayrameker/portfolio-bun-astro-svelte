<script lang="ts">

    export let title: string;
    export let url = '/' + title.toLowerCase();
    export let path: string;

</script>

<!-- 
TODO: we will make some ui design for navber 
--> 

<a href={url} class=" active:text-oxford-300 
    transition-colors {path === url ? 'text-oxford-300 font-medium' : ''}"
>
    {title}
</a>

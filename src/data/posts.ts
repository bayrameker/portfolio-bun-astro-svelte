import type PostInterface from "../interfaces/PostInterface";

const POSTS: PostInterface[] = [
   
    {
        id: 'testblog',
        title: 'desc',
        content: 'test content',
        summary: 'summary',
        author: `test control`,
        tags: ['svelte', 'tailwind', 'capacitor'],
        images: ['ambient', 'settings', 'overview']
    },
    {
        id: 'post1',
        title: 'description for post',
        content: 'i want to use bun, stelve and astro ',
        summary: 'this is my basic project',
        author: `sdev`,
        tags: ['svelte', 'tailwind', 'capacitor'],
        images: ['ambient', 'settings', 'overview']
    }
    
];

export default POSTS;
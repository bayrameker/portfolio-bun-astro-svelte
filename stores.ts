import { writable, type Writable } from 'svelte/store';

export const currentNav: Writable<string> = writable('about');

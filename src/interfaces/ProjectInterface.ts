export default interface ProjectInterface {
    id: string;
    title: string;
    description: string;
    writeup: string;
    from?: string;
    to?: string;
    repo?: string;
    website?: string;
    android?: string;
    tags: string[];
    images: string[];
}
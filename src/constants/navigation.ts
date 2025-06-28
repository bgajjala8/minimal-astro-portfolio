import type { Navigation } from "../types/navigation";
const BASE_URL = import.meta.env.BASE_URL;

export const NAVIGATION: Navigation = [
    {
        name: "Home",
        // Concatenate BASE_URL. Vite's BASE_URL usually includes a trailing slash,
        // so careful concatenation is needed to avoid double slashes //
        path: BASE_URL + (BASE_URL === '/' ? '' : '/') + "", // Ensures '/' for home, or '/base/' for subpath home
        // A more robust way might be: path: new URL('/', BASE_URL).pathname,
        // For root, it simplifies to "/". For /base/, it results in "/base/"
    },
    {
        name: "Blog",
        path: BASE_URL + "blog", // Results in /base/blog or /blog
    },
    {
        name: "Notes",
        path: BASE_URL + "notes", // Results in /base/notes or /notes
    },
    {
        name: "Bookmarks",
        path: BASE_URL + "bookmarks", // Results in /base/bookmarks or /bookmarks
    },
];

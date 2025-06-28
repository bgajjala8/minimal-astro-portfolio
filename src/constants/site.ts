export type NavigationItem = {
    name: string;
    path: string;
};

// Access the base URL directly from import.meta.env
// This value comes from the 'base' property in your astro.config.mjs
const BASE_URL = import.meta.env.BASE_URL;

// Helper function to safely prepend the base URL
// This handles cases where BASE_URL might be '/' or '/subpath/'
// and ensures paths are correctly formed without double slashes.
function prependBase(path: string): string {
    if (BASE_URL === '/') {
        return path; // No base path needed if it's root
    }
    // new URL(path, BASE_URL) correctly handles leading/trailing slashes.
    // .pathname extracts just the path part.
    return new URL(path, BASE_URL).pathname;
}


export const SITE = {
    name: "Bharath Gajjala",
    title: "Software Engineer",
    description: "Personal portfolio and blog",
    // SITE.url is typically your canonical absolute URL, independent of 'base'
    // It should remain absolute for SEO and canonical linking.
    url: "https://bgajjala.dev",
    // defaultImage needs the base path if your site is deployed to a subpath
    // and the image is served from a relative path within your project.
    defaultImage: prependBase("/default-og-image.jpg"),
} as const;

export const NAVIGATION: {
    main: NavigationItem[];
} = {
    main: [
        { name: "Home", path: prependBase("/") },
        { name: "Blog", path: prependBase("/blog") },
        { name: "Note", path: prependBase("/notes") },
        { name: "Bookmarks", path: prependBase("/bookmarks") }
    ],
} as const;

export const CONTENT = {
    postsPerPage: 10,
    recentPostsLimit: 3,
    featuredProjectsLimit: 3,
} as const;

export const META = {
    openGraph: {
        type: "website",
        locale: "en_US",
    },
    twitter: {
        cardType: "summary_large_image",
    }
} as const;

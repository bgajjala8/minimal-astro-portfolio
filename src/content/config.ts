// src/content/config.ts
import { defineCollection, z } from "astro:content";
// No need to import 'glob' or 'file' from "astro/loaders" for standard collections

const blog = defineCollection({
    // Astro automatically looks for content in src/content/blog/
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        draft: z.boolean().optional().default(false),
    })
});

const experience = defineCollection({
    // Astro automatically looks for content in src/content/experience/
    schema: z.object({
        title: z.string(),
        logo: z.string(), // Assuming this is a path to an image for content/experience/*.md
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().optional().default(false),
    })
});

const projects = defineCollection({
    // Astro automatically looks for content in src/content/projects/
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        featured: z.boolean().optional().default(false),
        techs: z.array(z.string()).optional(),
    })
});

const site = defineCollection({
    // This 'site' collection uses a 'data' loader, which is fine for JSON/YAML files not Markdown/MDX
    // It's technically a 'data' collection (type: 'data')
    // If you're using a single JSON file for config, this is the correct pattern.
    // If you intend for it to be Markdown, you'd remove loader and use type: 'content'
    type: 'data', // Explicitly define type as 'data' for file loader
    loader: 'src/content/site/config.json', // The correct way to specify a single data file
    schema: z.object({
        name: z.string(),
        title: z.string(),
        introduction: z.string(),
        sections: z.object({
            blog: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            projects: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            experience: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
        }),
        socialLinks: z.array(z.object({
            platform: z.string(),
            url: z.string().url(),
        })).optional(),
    })
});

const notes = defineCollection({
    // Astro automatically looks for content in src/content/notes/
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        category: z.string(),
        draft: z.boolean().optional().default(false),
    })
});

const bookmarks = defineCollection({
    // Astro automatically looks for content in src/content/bookmarks/
    schema: z.object({
        title: z.string(),
        type: z.enum(["article", "book", "video"]),
        author: z.string(),
        url: z.string().url(),
        publishedAt: z.coerce.date(),
        createdAt: z.coerce.date(),
        description: z.string().optional(),
    })
});

export const collections = {
    blog,
    experience,
    projects,
    site,
    notes,
    bookmarks,
};

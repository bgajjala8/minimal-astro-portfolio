import { defineCollection, z } from "astro:content";
// No need to import 'glob' or 'file' from "astro/loaders" for standard content collections

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        draft: z.boolean().optional().default(false),
    })
});

const experience = defineCollection({
    // Assuming your experience entries are Markdown/MDX files
    schema: z.object({
        title: z.string(),
        logo: z.string(), // e.g., a path like "/logos/company-x.svg"
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().optional().default(false),
    })
});

const projects = defineCollection({
    // Assuming your project entries are Markdown/MDX files
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(), // This URL will be in your content file (e.g., "/my-project")
        featured: z.boolean().optional().default(false),
        techs: z.array(z.string()).optional(),
    })
});

const site = defineCollection({
    // This is a 'data' collection for your JSON configuration file
    type: 'data',
    loader: './src/content/site/config.json', // Path to your config.json file
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
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        category: z.string(),
        draft: z.boolean().optional().default(false),
    })
});

const bookmarks = defineCollection({
    schema: z.object({
        title: z.string(),
        type: z.enum(["article", "book", "video"]),
        author: z.string(),
        url: z.string().url(), // This URL will be in your content file
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

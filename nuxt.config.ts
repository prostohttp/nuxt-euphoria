// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    routeRules: {
        "/admin/**": {
            // TODO: Unexpected error? nitroPack -> NitroRouteConfig don't have ssr props, but is working
            // @ts-ignore
            ssr: false,
        }
    },
    site: {
        url: process.env.NUXT_SITE_URL,
        name: process.env.NUXT_SITE_NAME,
        description: "Euphoria - marketplace",
        defaultLocale: "en",
    },
    css: ["~/assets/css/tailwind.css"],
    shadcn: {
        prefix: "",
        componentDir: "./app/components/ui",
    },
    devtools: { enabled: true },
    vite: {
        plugins: [tailwindcss()],
    },
    nitro: {
        experimental: {
            tasks: true,
        },
    },
    runtimeConfig: {
        authSecret: process.env.NUXT_BETTER_AUTH_SECRET,
        authToken: process.env.NUXT_TURSO_AUTH_TOKEN,
        authUrl: process.env.NUXT_BETTER_AUTH_URL,
        dbFilename: process.env.NUXT_DB_FILE_NAME,
        public: {
            siteName: process.env.NUXT_SITE_NAME,
            siteUrl: process.env.NUXT_SITE_URL,
            nodeEnv: process.env.NUXT_NODE_ENV,
        },
    },
    modules: [
        "@nuxt/test-utils",
        "@nuxt/image",
        "@nuxt/fonts",
        "@pinia/nuxt",
        "shadcn-nuxt",
        "nuxt-security",
        "@nuxtjs/seo",
    ],
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: "2025-05-15",
});

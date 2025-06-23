// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    routeRules: {
        "admin/**": { ssr: false },
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
    modules: [
      "@nuxt/test-utils",
      "@nuxt/image",
      "@nuxt/fonts",
      "@pinia/nuxt",
      "shadcn-nuxt",
      "nuxt-security",
    ],
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: "2025-05-15",
});
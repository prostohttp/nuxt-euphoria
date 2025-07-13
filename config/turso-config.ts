const isProd = process.env.NUXT_NODE_ENV === "production";

export const tursoConfig = {
    isProd,
    url: isProd
        ? (process.env.NUXT_TURSO_DATABASE_URL as string)
        : (process.env.NUXT_DB_FILE_NAME as string),
    authToken: process.env.NUXT_TURSO_AUTH_TOKEN as string,
};

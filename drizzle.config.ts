import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./server/db/migrations",
    schema: "./server/db/schema.ts",
    dialect: "sqlite",
    dbCredentials: {
        url: process.env.NUXT_DB_FILE_NAME!,
    },
    verbose: true,
    strict: true,
});

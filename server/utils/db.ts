import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { tursoConfig } from "~~/config/turso-config";

const tursoClient = createClient({
    url: tursoConfig.url,
    authToken: tursoConfig.authToken,
});

export function useDb() {
    return drizzle(tursoClient);
}

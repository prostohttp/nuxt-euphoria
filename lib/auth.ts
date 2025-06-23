import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "~~/server/db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(useDb(), {
        provider: "sqlite",
        schema: {
            ...schema,
        },
    }),
    user: {
        additionalFields: {
            firstName: {
                type: "string",
                fieldName: "firstName",
                returned: true,
                input: true,
                required: true,
            },
            lastName: {
                type: "string",
                fieldName: "lastName",
                returned: true,
                input: true,
                required: true,
            },
        },
        deleteUser: {
            enabled: true,
        },
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        // async sendResetPassword(url) {
        //     console.log("Reset password url:", url);
        // },
    },
    plugins: [
        admin({
            defaultRole: "user",
            impersonationSessionDuration: 1 * 24 * 60 * 60,
        }),
    ],
});

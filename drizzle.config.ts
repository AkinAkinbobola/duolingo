import {defineConfig} from "drizzle-kit";
import {config} from "dotenv";

config({
    path: ".env.local"
})

export default defineConfig({
    dialect: "postgresql",
    schema: "./database/schema.ts",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: true
})
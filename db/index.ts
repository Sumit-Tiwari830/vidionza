import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@/db/schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error("Missing DATABASE_URL.");
}

// Create the Neon SQL client
const sql = neon(databaseUrl);

// Pass the sql client into the drizzle constructor
export const db = drizzle(sql, { schema });
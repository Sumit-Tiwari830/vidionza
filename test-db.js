import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

const res = await sql`SELECT NOW()`;
console.log(res);
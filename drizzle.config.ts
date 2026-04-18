import { defineConfig } from "drizzle-kit";

const drizzleUrl =
  process.env.DRIZZLE_DATABASE_URL ||
  process.env.SUPABASE_POOLER_URL ||
  process.env.DATABASE_URL;

if (!drizzleUrl) {
  throw new Error(
    "Missing database URL. Set DRIZZLE_DATABASE_URL (recommended for Supabase pooler) or DATABASE_URL.",
  );
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: drizzleUrl,
  },
});

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // "postgresql" | "mysql"
  schema: "./src/db/schema/**",
  out: "./drizzle",

  // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});

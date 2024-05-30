import {
  pgTable,
  varchar,
  timestamp,
  boolean,
  text,
  uuid,
  serial,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  email: text("email"),
});

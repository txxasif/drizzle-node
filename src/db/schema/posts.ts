import {
  pgTable,
  varchar,
  timestamp,
  boolean,
  text,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./user";

export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("userId")
    .references(() => users.id)
    .notNull(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(), // Include `updatedAt` here
});

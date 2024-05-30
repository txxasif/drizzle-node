import db from "db/db_connect";
import { posts } from "db/schema/posts";
import { users } from "db/schema/user";
import { eq } from "drizzle-orm";
import { Post, User } from "types/types";
export async function createUser(user: User) {
  const result = await db
    .insert(users)
    .values(user)
    .returning({ id: users.id, name: users.name });
  return result;
}
export async function getAllUser() {
  const result = await db.select().from(users);
  return result;
}
export async function createPost(data: Post) {
  const result = await db
    .insert(posts)
    .values(data)
    .returning({ id: posts.id });
  return result;
}
export async function getPostOfUsers(id: string) {
  const result = await db
    .select({
      postId: posts.id,
      postTitle: posts.text,
      userName: users.name,
    })
    .from(posts)
    .leftJoin(users, eq(posts.userId, users.id))
    .where(eq(posts.userId, id));
  return result;
}

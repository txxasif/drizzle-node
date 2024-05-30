// src/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Post {
  id: string; // UUID type
  userId: string; // UUID type referencing users table
  text: string; // TEXT type
  createdAt: Date; // TIMESTAMP type
  updatedAt: Date; // TIMESTAMP type
}

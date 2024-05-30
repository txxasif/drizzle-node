import express from "express";
import {
  createPost,
  createUser,
  getAllUser,
  getPostOfUsers,
} from "models/user.model";

export async function getAllUsersController(
  req: express.Request,
  res: express.Response
) {
  const result = await getAllUser();
  res.json({ data: result });
}

export async function createUserController(
  req: express.Request,
  res: express.Response
) {
  const body = req.body;
  const result = await createUser(body);
  console.log(result);

  res.json({ data: result });
}
export async function createPostController(
  req: express.Request,
  res: express.Response
) {
  const body = req.body;
  const result = await createPost(body);
  res.json({ message: "done" });
}

export async function getUserPostByIdController(
  req: express.Request,
  res: express.Response
) {
  const id = req.params.id;
  const posts = await getPostOfUsers(id);
  res.json({ posts });
}

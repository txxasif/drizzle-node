import {
  getAllUsersController,
  createUserController,
  createPostController,
  getUserPostByIdController,
} from "controllers/userController";
import express from "express";
const userRoute = express.Router();

userRoute.get("/all-user", getAllUsersController);
userRoute.post("/create", createUserController);
userRoute.post("/create-post", createPostController);
userRoute.get("/user-posts/:id", getUserPostByIdController);

export default userRoute;

import express from "express";
import {
  createUser,
  deleteUser,
  fetchUsers,
  getUser,
  updateUser,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.get("/users", fetchUsers);
userRouter.post("/user", createUser);
userRouter.put("/user/:id", updateUser);
userRouter.get("/user/:id", getUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;

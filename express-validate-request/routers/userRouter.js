import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.js";
import validateSchema from "../middlewares/validateSchema.js";
import userSchema from "../schemas/users.js";

const userRouter = Router();

// Note if you want the validateSchema to work without relying on the req method type
// then you can pass the schema like this validateSchema(userSchema.POST), but you will have
// to update the validateSchema to not use req.method (schema.asyncValidate(req.body))

userRouter
  .route("/")
  .get(getUsers)
  .post(validateSchema(userSchema), createUser);
userRouter
  .route("/:id")
  .get(getUserById)
  .put(validateSchema(userSchema), updateUser)
  .delete(deleteUser);

export default userRouter;

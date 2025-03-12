import Post from "../models/Post.js";
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

export const createUser = asyncHandler(async (req, res) => {
  const {
    body: { firstName, lastName, email },
  } = req;

  const found = await User.findOne({ where: { email } });
  if (found)
    throw new ErrorResponse("User with that email already exists", 409);
  const user = await User.create({ firstName, lastName, email });
  res.json(user);
});

export const getUserById = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id, { include: Post });
  if (!user) throw new ErrorResponse("User not found", 404);
  res.json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const {
    body: { firstName, lastName, email },
    params: { id },
  } = req;

  const user = await User.findByPk(id);
  if (!user) throw new ErrorResponse("User not found", 404);
  await user.update(req.body);
  res.json(user);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new ErrorResponse("User not found", 404);
  await user.destroy();
  res.json({ message: "User deleted" });
});

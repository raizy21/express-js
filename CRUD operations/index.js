import express from "express";
import cors from "cors";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "./controllers/users.js";
import {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} from "./controllers/notes.js";

import "./db/association.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.route("/users").get(getUsers).post(createUser);
app.route("/users/:id").get(getUserById).put(updateUser).delete(deleteUser);

app.route("/notes").get(getNotes).post(createNote);
app.route("/notes/:id").get(getNoteById).put(updateNote).delete(deleteNote);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

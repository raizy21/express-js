import express from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "./controllers/users.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.route("/users").get(getUsers).post(createUser);
app.route("/users/:id").get(getUserById).put(updateUser).delete(deleteUser);

// app.get("/users", getUsers);
// app.post("/users", createUser);
// app.get("/users/:id", getUserById);
// app.put("/users/:id", updateUser);
// app.delete("/users/:id", deleteUser);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

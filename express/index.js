import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const users = [
  { id: 1, username: "John", email: "a@a.com" },
  { id: 2, username: "Jane", email: "b@b.com" },
  { id: 3, username: "Doe", email: "c@c.com" },
];

// we need this middleware (function) to parse the body of the request and add it to the req.body
app.use(express.json());
// const json = (req, res, next) => {
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });
//   req.on("end", () => {
//     req.body = JSON.parse(body);
//     next();
//   });
// };

app.get("/", (req, res) => {
  // res.send is used when sending a string or html to the client
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  // res.json is used when sending json data to the client
  res.json(users);
});

app.post("/users", (req, res) => {
  const { username, email } = req.body;
  res.status(201).json({ id: crypto.randomUUID(), username, email });
});

app.get("/users/:id", (req, res) => {
  //   const id = req.params.id;
  //   const {
  //     params: { id },
  //   } = req;
  const { id } = req.params;
  res.send(`User with id: ${id}`);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  console.log(username, email);
  res.send(`User with ${id} updated`);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User with ${id} deleted`);
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});

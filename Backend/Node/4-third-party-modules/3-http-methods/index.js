import express from "express";
import users from "./data.js";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

// CRUD

// Read
// getAllUsers
app.get("/api/v1/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

// Read
// getUserById
app.get("/api/v1/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = users.find((user) => user.id === +id);
    if (!findUser)
      return res
        .status(404)
        .json({ success: false, message: `No user with the id: ${id}` });
    res.status(200).json({ success: true, data: findUser });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
});

// Create
// createUser => data
app.post("/api/v1/users", async (req, res) => {
  try {
    console.log(req.body);
    const newUser = { ...req.body, id: uuidv4() };
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
});

// Update
// updateUserById
// data + id
app.put("/api/v1/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body; // {name: "", age: }
    const updatedUser = users.map((user) =>
      user.id === +id ? { id: user.id, ...data } : user
    );
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
});

// Delete
// deleteUserById
// id
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newUsers = users.filter((user) => user.id !== +id);
    res.status(200).json({ success: true, data: newUsers });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
});

app.listen(5000, () =>
  console.log("Server is running in: http://localhost:5000")
);

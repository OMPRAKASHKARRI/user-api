const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const filePath = "./data/users.json";

// helper to read file
const getUsers = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// helper to write file
const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};


//  GET /users (search + sort)
router.get("/", (req, res) => {
  let users = getUsers();

  const { search, sort, order } = req.query;

  // search
  if (search) {
    users = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
  }

  // sort
  if (sort) {
    users.sort((a, b) => {
      let valA = a[sort].toLowerCase();
      let valB = b[sort].toLowerCase();

      if (order === "desc") {
        return valB.localeCompare(valA);
      }
      return valA.localeCompare(valB);
    });
  }

  res.json(users);
});

//  GET /users/:id
router.get("/:id", (req, res) => {
  const users = getUsers();
  const user = users.find((u) => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});


//  POST /users
router.post("/", (req, res) => {
  const users = getUsers();

  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    company: req.body.company,
  };

  users.push(newUser);
  saveUsers(users);

  res.status(201).json(newUser);
});


//  PUT /users/:id
router.put("/:id", (req, res) => {
  let users = getUsers();

  const index = users.findIndex((u) => u.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...req.body };

  saveUsers(users);

  res.json(users[index]);
});


// DELETE /users/:id
router.delete("/:id", (req, res) => {
  let users = getUsers();

  const newUsers = users.filter((u) => u.id !== req.params.id);

  if (users.length === newUsers.length) {
    return res.status(404).json({ message: "User not found" });
  }

  saveUsers(newUsers);

  res.json({ message: "User deleted successfully" });
});

module.exports = router;
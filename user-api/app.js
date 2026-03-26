const express = require("express");
const app = express();
const userRoutes = require("./routes/users");

app.use(express.json());

// routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
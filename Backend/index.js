const express = require("express");
const { connection } = require("./Config/db");

const cors = require("cors");
const { userRouter } = require("./Route/user.route");
const { empRouter } = require("./Route/emp.route");
const { auth } = require("./Middleware/auth");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/employees",auth, empRouter);



app.get("/", async (req, res) => {
  res.send("Welcome to Employee Management");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to EmployeeDB");
    console.log(`server is running at http://localhost:${process.env.port}`);
  } catch (error) {
    console.log("Error in connecting to the database ", error);
  }
});

const express = require("express");
const dotenv = require("dotenv");

const { DB } = require("./db/db");
const userRouter = require("./routes/users");

dotenv.config();

const app = express();
app.use(express.json());

app.db = new DB();

app.use("/users", userRouter);

app.get("/", async (req, res) => {
  res.send("Hi I am Playground api service, Healthy and Ready to serve you.");
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

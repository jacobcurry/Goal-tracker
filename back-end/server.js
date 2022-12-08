const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const goalsRoute = require("./controllers/goals");
app.use("/goals", goalsRoute);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/goals", () => {
  console.log("mongo connected");
});
app.listen(3000, () => {
  console.log("listening");
});

import express from "express";
import mongoose from "mongoose";
import BookRoute from "./Route/BookRoute.js";
import UserRoute from "./Route/UserRoute.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/bookStore")
  .then(() => {
    console.log("Connected to the mongoDB");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

app.use("/book", BookRoute);
app.use("/user", UserRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

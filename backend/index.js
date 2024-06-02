import express from "express";
import { connectToDB } from "../backend/db.js";
import booksRoute from "./routes/booksRoute.js";
import dotenv from "dotenv";

const app = express();
const port = 4000;

dotenv.config(); // Leer .env

// Parsing Request Body
app.use(express.json()); // Leer Json

connectToDB();

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to my Bookstore");
});

// Books Router
app.use("/books", booksRoute);

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

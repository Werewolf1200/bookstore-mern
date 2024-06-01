import express from "express";
import mongoose from "mongoose";
import { connectToDB } from "../backend/db.js";
import dotenv from "dotenv";

const app = express();
const port = 4000;

dotenv.config(); // Leer .env

connectToDB();

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to my Bookstore");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

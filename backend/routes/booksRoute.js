import { Book } from "../models/bookModel.js";
import express from "express";

const router = express.Router();

// Create a New Book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.published) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      published: req.body.published,
    };

    const addBook = await Book.create(newBook);

    return res.status(201).send(addBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get all Books

router.get("/", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.find({});

    return res.status(200).json({
      count: result.length,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get one Book

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findById(id);

    if (!result) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update a Book

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.published) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).send({
      message: "Book updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete a Book

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).send({
      message: "Book deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;

import express from "express";
import { getBook } from "../Controller/BookController.js";  // Include the .js extension

const router = express.Router();
router.get("/", getBook);

export default router;

import express from "express";
import {
  createBookHandler,
  getBooksHandler,
  getSingleBookHandle,
  removeBookHandler,
  updateBookHandler,
} from "../controller/BookController";
import { validate } from "../middleware/validate";
import { createBookSchema } from "../validations/book.validation";

const router = express.Router();

router
  .route("/")
  .get(getBooksHandler)
  .post(validate(createBookSchema), createBookHandler);

router
  .route("/:bookId")
  .get(getSingleBookHandle)
  .put(updateBookHandler)
  .delete(removeBookHandler);

export default router;

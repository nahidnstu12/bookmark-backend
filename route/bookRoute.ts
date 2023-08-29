import express from "express";
import {
  createBookHnadler,
  getBooksHnadler,
  getSingleBookHandle,
  removeBookHandler,
  updateBookHnadler,
} from "../controller/BookController";
import { validate } from "../middleware/validate";
import { createBookSchema } from "../validations/book.validation";

const router = express.Router();

router
  .route("/")
  .get(getBooksHnadler)
  .post(validate(createBookSchema), createBookHnadler);

router
  .route("/:bookId")
  .get(getSingleBookHandle)
  .put(updateBookHnadler)
  .delete(removeBookHandler);

export default router;

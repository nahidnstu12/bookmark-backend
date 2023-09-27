import express from "express";
import { BookController } from "../controller/Book";
import { validate } from "../middleware/validate";
import { createBookSchema } from "../validations/book";

const router = express.Router();

router
  .route("/")
  .get(BookController.readAll)
  .post(validate(createBookSchema), BookController.create);

router
  .route("/:bookId")
  .get(BookController.read)
  .put(BookController.update)
  .delete(BookController.remove);

export default router;

import express from "express";
import { BookController } from "../controller/Book";
// import { validate } from "../middleware/validate";
// import { createBookSchema } from "../validations/book";

const router = express.Router();

router.route("/").get(BookController.readAll);
// .post(validate(createBookSchema), createBookHandler);

// router
//   .route("/:bookId")
//   .get(getSingleBookHandle)
//   .put(updateBookHandler)
//   .delete(removeBookHandler);

export default router;

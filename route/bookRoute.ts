import express from "express";
import {
  createBookHnadler,
  getBooksHnadler,
} from "../controller/BookController";

const router = express.Router();

router.route("/").get(getBooksHnadler).post(createBookHnadler);

export default router;

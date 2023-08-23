import express from "express";
import { getBooksHnadler } from "../controller/BookController";

const router = express.Router();

router.route("/").get(getBooksHnadler);

export default router;

import { NextFunction, Request, Response } from "express";
import { findBooks } from "../services/book.service";

export const getBooksHnadler = async (
  _: Request<any>,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const books = await findBooks({}, {}, {});

    res.status(200).json({
      status: "success",
      results: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    next(err);
  }
};

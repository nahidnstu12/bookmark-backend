import { NextFunction, Request, Response } from "express";
import { createBook, findBooks, getBook } from "../services/book";

export class BookController {
  static async readAll(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const books = await findBooks({}, {}, {});

      res.status(200).json({
        status: "success",
        total: books.length,
        data: books,
      });
    } catch (err) {
      next(err);
    }
  }

  static async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const book = await createBook(req.body);
      res.status(201).json({
        status: "Success",
        data: book,
      });
    } catch (err: any) {
      next(err);
    }
  }

  static async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const book = await getBook(req.params.bookId);
      if (!book) {
        return next("Book not found");
      }
      Object.assign(book, req.body);
      const updatedBook = await book.save();
      res.status(200).send({ status: "success", data: updatedBook });
    } catch (err) {
      next(err);
    }
  }

  static async remove(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const book = await getBook(req.params.bookId);
      if (!book) {
        return next("Book not found");
      }
      await book.remove();

      res.status(204).json({
        status: "success",
      });
    } catch (err) {
      next(err);
    }
  }

  static async read(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const book = await getBook(req.params.bookId);

      if (!book) {
        return next("Book not found");
      }
      res.status(200).send({ status: "success", data: book });
    } catch (err) {
      next(err);
    }
  }

  // You can add more handlers here
}

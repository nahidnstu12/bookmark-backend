import { NextFunction, Request, Response } from "express";
import bookService from "../services/book";
import { notFound } from "../utils/error";
import { successResponse } from "../utils/success";

export class BookController {
  static async readAll(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const books = await bookService.readAll({}, {}, {});

      res.status(200).json(successResponse("", books as any));
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
      const book = await bookService.create(req.body);
      if (book) {
        res
          .status(201)
          .json(successResponse("Successfully book created", book as any));
      }
    } catch (err: any) {
      next(err);
    }
  }

  static async read(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const book = await bookService.read(req.params.bookId);

      if (!book) {
        return next(notFound("Book not found"));
      }
      res.status(200).json(successResponse("", book as any));
    } catch (err) {
      next(err);
    }
  }
  static async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const book = await bookService.update(req.params.bookId, req.body);
      if (!book) {
        return next(notFound("Book not found"));
      }

      res
        .status(200)
        .json(successResponse("Successfully updated", book as any));
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
      const book = await bookService.remove(req.params.bookId);
      if (!book) {
        return next(notFound("Book not found"));
      }
      res.status(200).json(successResponse("Successfully deleted"));
    } catch (err) {
      next(err);
    }
  }

  // You can add more handlers here
}

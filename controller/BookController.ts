import { NextFunction, Request, Response } from "express";
import { createBook, findBooks, getBook } from "../services/book.service";

export const getBooksHnadler = async (
  _: Request<any>,
  res: Response,
  next: NextFunction,
): Promise<any> => {
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
};

export const createBookHnadler = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<any> => {
  try {
    const book = await createBook(req.body);
    res.status(201).json({
      status: "Success",
      data: book,
    });
  } catch (err: any) {
    if (err.code === "23505") {
      return res.status(409).json({
        status: "fail",
        message: "Book is already exist. Please provide another book name.",
      });
    }
    next(err);
  }
};

export const updateBookHnadler = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<any> => {
  try {
    const book = await getBook(req.params.bookId);
    if (!book) {
      return next("Book not found");
    }
    Object.assign(book, req.body);
    const updatedBook = await book.save();
    return res.status(200).send({ status: "success", data: updatedBook });
  } catch (err) {
    next(err);
  }
};
//
export const removeBookHandler = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<any> => {
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
};
//
export const getSingleBookHandle = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<any> => {
  try {
    const book = await getBook(req.params.bookId);

    if (!book) {
      return next("Book not found");
    }
    return res.status(200).send({ status: "success", data: book });
  } catch (err) {
    next(err);
  }
};
// export const getNewArrivalBook = async (
//   req: Request<any>,
//   res: Response<any>,
//   next: NextFunction,
// ): Promise<any> => {
//   try {
//   } catch (err) {}
// };
//
// export const getBestSellingBookHandler = async (
//   req: Request<any>,
//   res: Response<any>,
//   next: NextFunction,
// ): Promise<any> => {
//   try {
//   } catch (err) {}
// };

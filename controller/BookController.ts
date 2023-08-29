import { NextFunction, Request, Response } from "express";
import { createBook, findBooks } from "../services/book.service";

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
        message: "Post with that title already exist",
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
  } catch (err) {}
};

export const removeBookHnadler = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<any> => {
  try {
  } catch (err) {}
};

export const getSingleBookHandle = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<any> => {
  try {
  } catch (err) {}
};
export const getNewArrivalBook = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<any> => {
  try {
  } catch (err) {}
};

export const getBestSellingBookHandler = async (
  req: Request<any>,
  res: Response<any>,
  next: NextFunction,
): Promise<any> => {
  try {
  } catch (err) {}
};

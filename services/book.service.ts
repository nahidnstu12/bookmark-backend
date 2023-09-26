import {
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
} from "typeorm";
import AppDataSource from "../database";
import { Book } from "../models/BookModel";

const bookRepository = AppDataSource.getRepository(Book);
export const findBooks = async (
  where: FindOptionsWhere<Book> = {},
  select: FindOptionsSelect<Book> = {},
  relations: FindOptionsRelations<Book> = {},
) => {
  return await bookRepository.find({
    where,
    select,
    relations,
  });
};

export const createBook = async (input: Partial<Book>) => {
  return await bookRepository.save(bookRepository.create({ ...input }));
};

export const getBook = async (bookId: string) => {
  return await bookRepository.findOneBy({ id: bookId });
};

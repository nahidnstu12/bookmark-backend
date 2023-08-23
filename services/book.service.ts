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

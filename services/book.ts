import {
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
} from "typeorm";
import AppDataSource from "../database";
import { Book } from "../models/Book";

class BookService {
  private bookRepository = AppDataSource.getRepository(Book);

  public async readAll(
    where: FindOptionsWhere<Book> = {},
    select: FindOptionsSelect<Book> = {},
    relations: FindOptionsRelations<Book> = {},
  ) {
    return await this.bookRepository.find({
      where,
      select,
      relations,
    });
  }

  public async create(input: Partial<Book>) {
    return await this.bookRepository.save(
      this.bookRepository.create({ ...input }),
    );
  }

  public async read(bookId: string): Promise<Book | null> {
    return await this.bookRepository.findOne({
      where: { id: bookId },
    });
  }
}

export default new BookService();

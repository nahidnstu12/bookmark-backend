import {
  FindOptionsRelations,
  FindOptionsSelect,
  FindOptionsWhere,
} from "typeorm";
import AppDataSource from "../database";
import { Book } from "../models/book";

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

  public async update(id: string, data: any) {
    const bookData = await this.read(id);

    if (!bookData) {
      return false;
    }
    Object.assign(bookData, data);
    return await this.bookRepository.save(bookData);
  }

  public async remove(id: string) {
    const bookData = await this.read(id);
    if (!bookData) {
      return false;
    }
    return await this.bookRepository.delete(id);
  }
}

export default new BookService();

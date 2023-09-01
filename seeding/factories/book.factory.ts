import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Book } from "../../models/BookModel";
import { BookStatus, YesOrNo } from "../../utils/enum";

export const BookFactory = setSeederFactory(Book, (faker: Faker) => {
  const book = new Book();

  book.name = faker.commerce.productName();
  book.description = faker.commerce.productDescription();
  book.published_year = faker.date.past();
  book.book_status = faker.helpers.enumValue(BookStatus);
  book.best_selling = faker.helpers.enumValue(YesOrNo);
  return book;
});

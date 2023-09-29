import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Book } from "../../models/book";
import { BookStatus, YesOrNo } from "../../utils/enum";

export const BookFactory = setSeederFactory(Book, (faker: Faker) => {
  const book = new Book();

  book.title = faker.commerce.productName();
  book.description = faker.commerce.productDescription();
  book.publishedYear = faker.date.past();
  book.status = faker.helpers.enumValue(BookStatus);
  book.bestSelling = faker.helpers.enumValue(YesOrNo);
  book.totalPage = faker.number.int({ min: 50, max: 300 });
  book.editions = JSON.stringify(
    faker.helpers.arrayElements([
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
    ]),
  );
  return book;
});

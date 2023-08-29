import { object, string, TypeOf, coerce, nativeEnum, boolean } from "zod";
import { BookStatus } from "../utils/enum";
export const createBookSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    description: string({
      required_error: "description is required",
    }).min(10),
    published_year: coerce.date({
      required_error: "published_year is required",
      invalid_type_error: "Wrong format",
    }),
    book_status: nativeEnum(BookStatus),
    best_selling: boolean({
      required_error: "Name is required",
    }),
  }),
});

const params = {
  params: object({
    bookId: string(),
  }),
};

export const getBookSchema = object({ ...params });
export type CreateBookInput = TypeOf<typeof createBookSchema>["body"];
export type getBookInput = TypeOf<typeof getBookSchema>["params"];

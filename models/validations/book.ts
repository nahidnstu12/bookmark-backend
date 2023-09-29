import { number, coerce, nativeEnum, object, string, TypeOf } from "zod";
import { BookStatus } from "../../utils/enum";

export const createBookSchema = object({
  body: object({
    title: string({
      required_error: "Book title is required",
    }),
    description: string({
      required_error: "description is required",
    }).min(10),
    publishedYear: coerce.date({
      required_error: "published Year is required",
      invalid_type_error: "Wrong format",
    }),
    status: nativeEnum(BookStatus).optional().default(BookStatus.COMING_SOON),
    bestSelling: number({
      invalid_type_error: "best_selling must be a number",
    })
      .optional()
      .default(0),
    totalPage: number({
      invalid_type_error: "best_selling must be a number",
    })
      .optional()
      .default(0),
  }),
});
export const updateBookSchema = object({
  body: object({
    description: string().optional(),
    publishedYear: coerce
      .date({
        // required_error: "published Year is required",
        invalid_type_error: "Wrong format",
      })
      .optional(),
    status: nativeEnum(BookStatus).optional().default(BookStatus.COMING_SOON),
    bestSelling: number({
      invalid_type_error: "best_selling must be a number",
    })
      .optional()
      .default(0),
    totalPage: number({
      invalid_type_error: "best_selling must be a number",
    })
      .optional()
      .default(0),
  }),
});

const params = {
  params: object({
    bookId: string(),
  }),
};

export const getBookSchema = object({ ...params });
export type CreateBookInput = TypeOf<typeof createBookSchema>["body"];
export type updateBookInput = TypeOf<typeof updateBookSchema>["body"];
export type getBookInput = TypeOf<typeof getBookSchema>["params"];

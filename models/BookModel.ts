import { BookStatus } from "../utils/enum";
import { Entity, Column } from "typeorm";
import AbstractEntity from "./BaseModel";

@Entity("books")
export class Book extends AbstractEntity {
  @Column({
    unique: true,
  })
  name!: string;

  @Column({ nullable: false })
  published_year!: Date;

  @Column({
    type: "enum",
    enum: BookStatus,
    default: BookStatus.COMMING_SOON,
  })
  book_status!: number;

  @Column({
    length: 1000,
  })
  description!: string;

  @Column({
    nullable: true,
  })
  best_selling!: boolean;
}

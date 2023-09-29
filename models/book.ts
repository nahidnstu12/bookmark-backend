import { BookStatus } from "../utils/enum";
import { Column, Entity } from "typeorm";
import AbstractEntity from "./base-model";

@Entity("books")
export class Book extends AbstractEntity {
  @Column({
    unique: true,
  })
  title!: string;

  @Column({ nullable: false })
  publishedYear!: Date;

  @Column({
    type: "enum",
    enum: BookStatus,
    default: BookStatus.COMING_SOON,
  })
  status!: number;

  @Column({
    length: 1000,
  })
  description!: string;

  @Column({
    nullable: true,
  })
  bestSelling?: number;
  @Column({
    nullable: true,
  })
  totalPage?: number;
  @Column({
    nullable: true,
  })
  editions?: string;
}

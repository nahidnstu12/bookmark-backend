import path from "path";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import dotenv from "dotenv";
import { Book } from "../models/BookModel";
dotenv.config();
// const typeOrmConfig: PostgresConnectionOptions = {
//   type: "postgres",
//   host: process.env.DB_HOST,
//   // namingStrategy: new NamingStrategy(),
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DATABASE,
//   synchronize: true,
//   logging: false,
//   entities: [`${path.join(__dirname, "..", "model")}/**.[tj]s`],
//   migrations: [`${path.join(__dirname, "..", "model")}/migration/**.[tj]s`],
// };
const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PW, // Make sure it's a string
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  // namingStrategy: new NamingStrategy(),
  entities: [Book],
  migrations: [`${path.join(__dirname, "..", "models")}/migration/**.[tj]s`],
};

export { typeOrmConfig };

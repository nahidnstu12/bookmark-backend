import path from "path";

import "../utils/dot-env";
import { DataSourceOptions } from "typeorm";

const typeOrmConfig: DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  // namingStrategy: new NamingStrategy(),

  entities: ["models/*{.ts,.js}"],
  migrations: [`${path.join(__dirname, "..", "models")}/migration/**.[tj]s`],
};

export { typeOrmConfig };

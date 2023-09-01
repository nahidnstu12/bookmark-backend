import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";

import dotenv from "dotenv";

dotenv.config();

const typeOrmConfig: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DATABASE,

  synchronize: true,
  logging: true,
  entities: ["models/*{.ts,.js}"],
  // factories: [BookFactory],
  // seeds: [InitialDatabaseSeed],
  seeds: ["seeding/seeder/*{.ts,.js}"],
  factories: ["seeding/factories/*{.ts,.js}"],
};

const dataSource = new DataSource(typeOrmConfig);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});

import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { typeOrmConfig } from "./config";

dotenv.config();
const AppDataSource = new DataSource(typeOrmConfig);

export default AppDataSource;

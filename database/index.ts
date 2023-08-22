import { DataSource } from "typeorm";
import { typeOrmConfig } from "./config";
const AppDataSource = new DataSource(typeOrmConfig);

export default AppDataSource;

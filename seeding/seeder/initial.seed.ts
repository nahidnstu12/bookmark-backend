import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Book } from "../../models/book";

export default class InitialDatabaseSeed implements Seeder {
  public async run(
    _: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const bookFactory = factoryManager.get(Book);

    await bookFactory.saveMany(10);
  }
}

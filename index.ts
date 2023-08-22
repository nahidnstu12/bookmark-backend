import AppDataSource from "./database";
import { runServer } from "./server";

const PORT = Number(process.env.PORT) || 5050; //default port
const HOST = process.env.HOST || "localhost";

async function startApplication() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");

    await runServer(HOST, PORT);
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    console.error("startApplication Error: ", err);
    throw err;
  }
}

startApplication().then();

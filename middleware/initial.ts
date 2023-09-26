import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import * as fs from "fs";
import YAML from "yamljs";

const swaggerFilePath = path.join(__dirname, "../swagger.yaml");

const file = fs.readFileSync(swaggerFilePath, "utf8");
const swaggerDoc = YAML.parse(file);

const applyMiddleware = (app: any) => {
  app.use(express.json());
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(cookieParser());
  app.use(cors());

  app.use(
    "/api/v1/docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerDoc, { explorer: true }),
  );
  // app.use(
  //   middleware({
  //     apiSpec: swaggerDoc,
  //     validateResponses: true,
  //     validateRequests: true,
  //   }),
  // );
};

export default applyMiddleware;

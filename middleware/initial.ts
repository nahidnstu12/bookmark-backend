import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import cors from "cors";
import cookieParser from "cookie-parser";
import { middleware } from "express-openapi-validator";
import fs from "fs";
import path from "path";

const swaggerFilePath = path.join(__dirname, "../swagger.yaml");

const file = fs.readFileSync(swaggerFilePath, "utf8");
const swaggerDoc = YAML.load(file);

const options = {
  swaggerOptions: {
    validatorUrl: null,
  },
};

const applyMiddleware = (app: any) => {
  app.use(express.json());
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(cookieParser());
  app.use(cors());
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc, options));
  app.use(
    middleware({
      apiSpec: swaggerFilePath,
      validateResponses: true,
      validateRequests: true,
    }),
  );
};

export default applyMiddleware;

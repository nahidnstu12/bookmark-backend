import express from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as OpenApiValidator from "express-openapi-validator";

const swaggerDoc = YAML.load("./swagger.yaml");

const applyMiddleware = (app: any) => {
  app.use(express.json());
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(cookieParser());
  app.use(cors());
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  app.use(
    OpenApiValidator.middleware({
      apiSpec: swaggerDoc,
      validateResponses: true,
    }),
  );
};

export default applyMiddleware;

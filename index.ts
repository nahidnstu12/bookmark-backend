import express, { Request, Response } from "express";
import AppDataSource from "./database";
import applyMiddleware from "./middleware/initial";
import bookRoute from "./route/bookRoute";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    applyMiddleware(app);

    // ROUTES
    app.use("/api/books", bookRoute);

    // HEALTH CHECKER
    app.get("/api/v1/health", async (_, res: Response) => {
      // const message = await redisClient.get('try');

      res.status(200).json({
        status: "success",
        message: "Welcome to Bookstore, we are happy to see you",
      });
    });

    // UNHANDLED ROUTE
    // app.all("*", (req: Request, res: Response, next: NextFunction) => {
    //   next(new AppError(404, `Route ${req.originalUrl} not found`));
    // });

    // GLOBAL ERROR HANDLER
    // app.use(
    //   (error: AppError, req: Request, res: Response, next: NextFunction) => {
    //     error.status = error.status || "error";
    //     error.statusCode = error.statusCode || 500;
    //
    //     res.status(error.statusCode).json({
    //       status: error.status,
    //       message: error.message,
    //     });
    //   },
    // );

    app.use((err: any, _: Request, res: Response) => {
      // format error
      res.status(Number(err.status) || 500).json({
        message: err.message,
        errors: err.errors,
      });
    });

    app.listen(process.env.PORT);
    console.log(`Server started on: http://localhost:${process.env.PORT}`);
  })
  .catch((error) => console.log("server error: ", error));

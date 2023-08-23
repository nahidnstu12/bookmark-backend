import cookieParser from "cookie-parser";
import express, { Response } from "express";
import cors from "cors";
import morgan from "morgan";
import AppDataSource from "./database";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    console.log("debug 1:", process.env.DB_PW, process.env.DB_USER);

    app.use(express.json({ limit: "10kb" }));

    // 2. Logger
    if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

    // 3. Cookie Parser
    app.use(cookieParser());

    // 4. Cors
    app.use(cors());

    // ROUTES
    // app.use("/api/auth", authRouter);
    // app.use("/api/users", userRouter);
    // app.use("/api/posts", postRouter);

    // HEALTH CHECKER
    app.get("/api/healthChecker", async (_, res: Response) => {
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

    app.listen(process.env.PORT);
    console.log(`Server started on: http://localhost:${process.env.PORT}`);
  })
  .catch((error) => console.log("server error: ", error));

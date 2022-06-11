import express from "express";
import cors from "cors";

import appController from "./app.controller";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1", appController());

app.get("*", (req, res, next) => {
  const error = new Error(`Invalid request`);

  error.statusCode = 404;
  next(error);
});

export default app;

import express from "express";
import morgan from "morgan";
import cors from "cors";
import Redis from "ioredis";

import winston from "./winston";
import appController from "./app.controller";
import { seedCache } from "./utils/cacheUtil";

const app = express();

app.use(express.json());

app.use(
  morgan("combined", {
    stream: winston.stream,
    skip: (req, res) => process.env.NODE_ENV === "test",
  })
);

app.use(cors());

const cache = new Redis(
  process.env.REDIS_PORT || "6379",
  process.env.REDIS_HOST || "127.0.0.1"
);

await seedCache({ cache });

app.use("/api/v1", appController({ cache }));

app.get("*", (req, res, next) => {
  const error = new Error(`Invalid request`);

  error.statusCode = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;
  winston.error(
    `${error.statusCode} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
  return res
    .status(error.statusCode)
    .json({ success: false, error: error.message });
});

export default app;

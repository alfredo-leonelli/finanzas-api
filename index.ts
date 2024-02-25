import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app: Express = express();
dotenv.config();

app.use(express.json());

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URL || "")
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.log(error);
  });

import { userRouter } from "./routes/userRoutes";
import { monthRouter } from "./routes/monthRoutes";

app.use("/api", userRouter);
app.use("/api", monthRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

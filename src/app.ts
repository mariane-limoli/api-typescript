import express, { Response } from "express";

import router from "./routes";

import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";

const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize()
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((err) => {
    console.log(err);
  });

export default app;

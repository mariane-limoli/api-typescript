import express from "express";

import { AppDataSource } from "../config/dataSource";
import AdotanteController from "../controller/AdotanteController";
import AdotanteRepository from "../repositores/AdotanteRepository";

const router = express.Router();
const adotanteRepository = new AdotanteRepository(
  AppDataSource.getRepository("AdotanteEntity")
);
const adotanteController = new AdotanteController(adotanteRepository);

router.post("/", (req, res) => adotanteController.criaAdotante(req, res)); // Rota para criar um adotante

export default router;

import { Request, Response } from "express";

import AdotanteEntity from "../entities/AdotanteEntity";
import AdotanteRepository from "../repositores/AdotanteRepository";

export default class AdotanteController {
  constructor(private repository: AdotanteRepository) {}

  async criaAdotante(req: Request, res: Response) {
    try {
      const { nome, celular, endereco, foto, senha } = <AdotanteEntity>req.body;

      const novoAdotante = new AdotanteEntity(
        nome,
        senha,
        celular,
        foto,
        endereco
      );

      await this.repository.criaAdotante(novoAdotante);
      return res.status(201).json(novoAdotante);
    } catch (error) {
      console.log(error);
      console.log(req.body);
      return res.status(500).json({ error: "Erro ao criar o adotante" });
    }
  }
}

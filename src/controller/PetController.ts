import { Request, Response } from "express";

import type TipoPet from "../tipos/tipoPet";
import EnumEspecie from "../enum/enumEspecie";
import PetRepository from "../repositores/PetRepository";
import PetEntity from "../entities/PetEntity";

let listaDePets: TipoPet[] = [];

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default class PetController {
  constructor(private repository: PetRepository) {}

  criaPet(req: Request, res: Response) {
    const { adotado, especie, dataNascimento, nome } = <PetEntity>req.body;
    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(400).json({ erro: "Especie inválida" });
    }
    const novoPet = new PetEntity();
    novoPet.id = geraId();
    novoPet.adotado = adotado;
    novoPet.especie = especie;
    novoPet.dataNascimento = dataNascimento;
    novoPet.nome = nome;

    this.repository.criaPet(novoPet);
    return res.status(201).json(novoPet);
  }

  async listaPets(req: Request, res: Response) {
    const listaDePets = await this.repository.listaPets();
    return res.status(200).json(listaDePets);
  }

  atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { adotado, especie, dataNascimento, nome } = req.body as PetEntity;
    const pet = listaDePets.find((pet: TipoPet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }

    pet.nome = nome;
    pet.dataNascimento = dataNascimento;
    pet.especie = especie;
    pet.adotado = adotado;
    return res.status(200).json(pet);
  }

  deletaPet(req: Request, res: Response) {
    const { id } = req.params;
    const pet = listaDePets.find((pet: TipoPet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }
    const index = listaDePets.indexOf(pet);
    listaDePets.splice(index, 1);
    return res.status(200).json({ mensagem: "Pet deletado com sucesso" });
  }
}

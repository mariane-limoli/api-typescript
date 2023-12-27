import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import EnumEspecie from "../enum/enumEspecie";
import AdotanteEntity from "./AdotanteEntity";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nome: string;
  @Column()
  especie: EnumEspecie;
  @Column()
  adotado: boolean;
  @Column()
  dataNascimento: Date;
  @ManyToOne(() => AdotanteEntity, (adotante) => adotante.pets)
  adotante!: AdotanteEntity;

  constructor(
    nome: string,
    especie: EnumEspecie,
    adotado: boolean,
    dataNascimento: Date
  ) {
    this.nome = nome;
    this.especie = especie;
    this.adotado = adotado;
    this.dataNascimento = dataNascimento;
  }
}

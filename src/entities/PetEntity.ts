import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/enumEspecie";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  especie: EnumEspecie;
  @Column()
  adotado: boolean;
  @Column()
  dataNascimento: Date;
}

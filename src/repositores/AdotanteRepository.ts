import { AdotanteEntity } from "../path/to/AdotanteEntity";

// Replace '../path/to/AdotanteEntity' with the actual path to the AdotanteEntity file
// AdotanteRepository.ts
export class AdotanteRepository {
  async criaAdotante(adotante: AdotanteEntity): Promise<void> {
    await this.repository.save(adotante);
  }
}

import { ResultsRepository } from "../repositories/results-repository-interface"

export class RemoveService {
  constructor(private resultsRepository: ResultsRepository) {}

  async execute(id: string): Promise<void> {
    await this.resultsRepository.remove(id)
  }
}

import { ResultsRepository } from "../repositories/results-repository-interface"
import { Result } from "@prisma/client"

export class ListingService {
  constructor(private resultsRepository: ResultsRepository) {}

  async execute(): Promise<Result[]> {
    return await this.resultsRepository.listing()
  }
}

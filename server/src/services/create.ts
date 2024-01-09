import { ResultsRepository } from "../repositories/results-repository-interface"
import { ICreate } from "../utils/create-zod-interface"

export class CreateService {
  constructor(private resultsRepository: ResultsRepository) {}

  async execute({ bimester, grade, subject }: ICreate): Promise<void> {
    await this.resultsRepository.create({
      bimester,
      grade,
      subject,
    })
  }
}

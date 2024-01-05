import { ResultsRepository } from "../repositories/results-repository-interface"

interface ICreate {
  bimester: "PRIMEIRO" | "SEGUNDO" | "TERCEIRO" | "QUARTO"
  grade: number
  subject: "BIOLOGIA" | "ARTES" | "SOCIOLOGIA" | "GEOGRAFIA"
}

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

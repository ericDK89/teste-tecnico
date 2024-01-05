import { Result } from "@prisma/client"

interface ICreate {
  bimester: "PRIMEIRO" | "SEGUNDO" | "TERCEIRO" | "QUARTO"
  grade: number
  subject: "BIOLOGIA" | "ARTES" | "SOCIOLOGIA" | "GEOGRAFIA"
}

export interface ResultsRepository {
  listing(): Promise<Result>
  create(data: ICreate): Promise<void>
  remove(id: string): Promise<void>
}

import { Result } from "@prisma/client"
import { ICreate } from "../utils/create-zod-interface"

export interface ResultsRepository {
  listing(): Promise<Result>
  create(data: ICreate): Promise<void>
  remove(id: string): Promise<void>
}

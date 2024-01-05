import { Prisma } from "@prisma/client"
import { ResultsRepository } from "./results-repository-interface"
import { Result } from "@prisma/client"
import { prisma } from "../lib/prisma"

export class PrismaResultsRepository implements ResultsRepository {
  async create(data: Prisma.ResultCreateInput): Promise<void> {
    await prisma.result.create({ data })
  }

  async listing(): Promise<Result> {
    const result = await prisma.result.findFirst()

    if (!result) {
      throw new Error("Could not find result")
    }

    return result
  }

  async remove(id: string): Promise<void> {
    await prisma.result.delete({
      where: {
        id,
      },
    })
  }
}

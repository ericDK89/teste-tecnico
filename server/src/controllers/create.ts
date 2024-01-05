import { FastifyRequest as Req, FastifyReply as Reply } from "fastify"
import { PrismaResultsRepository } from "../repositories/prisma-results-repository"
import { CreateService } from "../services/create"

export const create = async (request: Req, reply: Reply) => {
  try {
    const { bimester, grade, subject } = request.body

    const prismaRepository = new PrismaResultsRepository()
    const createService = new CreateService(prismaRepository)

    await createService.execute({ bimester, grade, subject })

    return reply.status(201).send()
  } catch (error) {
    throw new Error(error)
  }
}

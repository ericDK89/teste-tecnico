import { FastifyRequest as Req, FastifyReply as Reply } from "fastify"
import { createSchema } from "../utils/create-zod-interface"
import { createService } from "../repositories"

export const create = async (request: Req, reply: Reply) => {
  try {
    const { bimester, grade, subject } = createSchema.parse(request.body)

    await createService.execute({ bimester, grade, subject })

    return reply.status(201).send()
  } catch (error) {
    throw new Error(error)
  }
}

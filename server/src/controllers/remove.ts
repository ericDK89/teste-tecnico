import { FastifyRequest as Req, FastifyReply as Reply } from "fastify"
import { removeService } from "../repositories"
import { z } from "zod"

export const remove = async (request: Req, reply: Reply) => {
  const requestSchema = z.object({
    id: z.string(),
  })

  try {
    const { id } = requestSchema.parse(request.params)

    await removeService.execute(id)

    return reply.status(201).send()
  } catch (error) {
    throw new Error(error)
  }
}

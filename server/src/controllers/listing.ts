import { FastifyRequest as Req, FastifyReply as Reply } from "fastify"
import { listingService } from "../repositories"

export const listing = async (request: Req, reply: Reply) => {
  try {
    const data = await listingService.execute()

    return reply.status(201).send({ data })
  } catch (error) {
    throw new Error(error)
  }
}

import { type FastifyInstance } from "fastify"
import { create } from "../controllers/create"

export const routes = async (app: FastifyInstance) => {
  app.post("/results", create)
}

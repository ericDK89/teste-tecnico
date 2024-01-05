import { FastifyInstance } from "fastify"
import { create } from "../controllers/create"

export const gradesRoutes = async (app: FastifyInstance): Promise<void> => {
  app.post("/results", create)
}

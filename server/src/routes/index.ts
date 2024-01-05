import { type FastifyInstance } from "fastify"
import { gradesRoutes } from "./grades"

export const routes = async (app: FastifyInstance) => {
  app.register(gradesRoutes)
}

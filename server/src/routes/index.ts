import { type FastifyInstance } from "fastify"
import { create } from "../controllers/create"
import { listing } from "../controllers/listing"
import { remove } from "../controllers/remove"

export const routes = async (app: FastifyInstance) => {
  app.post("/results", create)
  app.get("/results", listing)
  app.delete("/results/:id", remove)
}

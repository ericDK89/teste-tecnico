import fastify from "fastify"
import { create } from "./controllers/create"
import { prisma } from "./lib/prisma"

const app = fastify()

const PORT = 3334

app.post("/results", async (req, reply) => {
  await prisma.result.create({
    data: {
      bimester: "PRIMEIRO",
      grade: 5,
      subject: "ARTES",
    },
  })
})

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log("listening on port " + PORT)
  })

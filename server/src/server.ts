import fastify from "fastify"
import { routes } from "./routes"

const app = fastify()

app.register(routes)

app
  .listen({
    port: 3334,
  })
  .then(() => {
    console.log("listening on port")
  })

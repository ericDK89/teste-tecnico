import { z } from "zod"

export const createSchema = z.object({
  bimester: z.enum(["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO"]),
  grade: z.number(),
  subject: z.enum(["ARTES", "BIOLOGIA", "SOCIOLOGIA", "GEOGRAFIA"]),
})

export type ICreate = z.infer<typeof createSchema>

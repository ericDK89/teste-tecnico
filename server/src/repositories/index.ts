import { CreateService } from "../services/create"
import { ListingService } from "../services/listing"
import { RemoveService } from "../services/remove"
import { PrismaResultsRepository } from "./prisma-results-repository"

const prismaRepository = new PrismaResultsRepository()
export const createService = new CreateService(prismaRepository)
export const listingService = new ListingService(prismaRepository)
export const removeService = new RemoveService(prismaRepository)

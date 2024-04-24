import {PrismaClient} from ".prisma/client"
import {PrismaD1} from "@prisma/adapter-d1"
import {getRequestContext} from "@cloudflare/next-on-pages"

function getPrismaClient(): PrismaClient {
  const adapter = new PrismaD1(getRequestContext().env.DB)
  return new PrismaClient({adapter})
}

export async function getProject(slug: string) {
  return getPrismaClient().project.findUnique({
    where: {
      slug: slug
    }
  })
}

export async function getAllProjects() {
  return getPrismaClient().project.findMany()
}

import { PrismaClient, Prisma } from '@prisma/client'

// const prisma = new PrismaClient() 
// prisma = global.Prisma;

const globalForPrisma = globalThis as unknown as {
    prisma:PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
export const db =  prisma;

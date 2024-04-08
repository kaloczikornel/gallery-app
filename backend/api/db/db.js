const { PrismaClient } = require('@prisma/client')

const connectionString = `${process.env.DATABASE_URL}`

const prisma = new PrismaClient({ datasourceUrl: connectionString })

module.exports = { prisma }
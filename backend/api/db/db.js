const { PrismaClient } = require('@prisma/client');
const { POSTGRES_PRISMA_URL } = require('../../config');

const prisma = new PrismaClient({ datasourceUrl: POSTGRES_PRISMA_URL });

module.exports = { prisma };

require('dotenv').config();

function parseEnvNumber(paramName, defaultValue) {
    return typeof process.env[paramName] !== 'undefined'
        ? parseInt(process.env[paramName], 10)
        : defaultValue;
}

module.exports.PORT = parseEnvNumber('PORT', 4000);

module.exports.POSTGRES_PRISMA_URL = process.env.POSTGRES_PRISMA_URL;

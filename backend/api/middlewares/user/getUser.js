const getUser = objRepo => {
    const { prisma } = objRepo;
    return async (req, res, next) => {
        const users = await prisma.user.findMany();
        console.log(users);
        return next();
    };
};

module.exports = getUser;

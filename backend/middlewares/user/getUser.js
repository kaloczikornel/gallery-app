const getUser = objRepo => {
    const { prisma } = objRepo;
    return async (req, res, next) => {
        const users = await prisma.user.findMany();
        return res.json(users);
    };
};

module.exports = getUser;

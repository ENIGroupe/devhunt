const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const createUser = async (email, password) => {
    return await prisma.user.create({
        data : {email , password},
    })
}

const findUserByEmail = async (email) =>{
    return await prisma.user.findUnique({ where: { email } })
}

module.exports = {
    createUser , 
    findUserByEmail
}
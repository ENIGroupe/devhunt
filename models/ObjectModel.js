const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const ProductModel = {
    async createProduct(data){
        return await prisma.product.create({data})
    },

    async getAllProduct(){
        return await prisma.product.findMany()
    },

    async getProductById(id){
        return await prisma.product.findUnique({ where: { id:id} })
    },

    async updateProduct(id , data) {
        return await prisma.product.update({
            where: {id} , 
            data,
        })
    },

    async deleteProduct(id) {
        return await prisma.product.delete({ where: { id:id }})
    }
}

module.exports = ProductModel
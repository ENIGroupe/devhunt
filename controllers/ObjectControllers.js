const ProductModel = require('@models/ObjectModel')

const ProductController = {
    async create(req , res) {
        try {
            const product = await ProductModel.createProduct(req.body)
            res.status(202).json(product)
        }catch (e) {
            console.log("erreur : " , e)
            res.status(500).json({ error: "Erreur lors de la creation du produit:"})
        }
    },

    async getAll(req ,res) {
        try {
            const product = await ProductModel.getAllProduct()
            res.json(product)
        } catch (e) {
            res.status(500).json({ error: "Erreur lors de la recuperation des produits"})
        }
    },

    async getById(req , res) {
        try {
            const product = await ProductModel.getProductById(parseInt(req.params.id))
            if(!product) return res.status(404).json({ error: "Produit non trouve"})
            res.json(product)
        } catch (e) {
            res.status(500).json({ error: "Erreur lors de la recuperation du produit"})
        }
    },

    async update(req , res) {
        try {
            const product = await ProductModel.updateProduct(parseInt(req.params.id) , req.body)
            res.json(product)
        }catch (e) {
            res.status(500).json({ erro: "Erreur lors de la modification du produit"})
        }
    },

    async delete(req , res) {
        try {
            //params parametree 
            const productId = parseInt(req.params.id)
            if(isNaN(productId)){
                return res.status(500).json({ error: "id invalide"})
            }
            const product = await ProductModel.deleteProduct(productId)
            res.json({ message : "Produit supprime avec succes"})
        }catch (e) {
            console.log("erreur : " , e)
            res.status(500).json({ error: "Erreur lors de la suppresion du produit"})
        }
    }
}

module.exports = ProductController

const Product = require('../models/product.model.js')



const getApi = async (req , res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


  const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const createProduct = async (req , res ) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const UpdateProduct = async (req , res ) => {
    try {

        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)


        if (!product) {
            return res.status(404).json({ message: "Product Not found" })
        }

        const UpdateProduct = await Product.findById(id)
        res.status(200).json(UpdateProduct)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const deleteProduct = async (req, res ) => {
    try{

        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message : "Product not Found"})
        }

        res.status(200).json({message : "Product Has been deleted successfully" })

    }catch(error){
        res.status(500).json({message : error.message})
    }
}

module.exports={
    getApi, 
    getSingleProduct,
    createProduct,
    UpdateProduct,
    deleteProduct
}
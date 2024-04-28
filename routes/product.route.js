const express = require('express')
const {getApi, getSingleProduct, UpdateProduct, createProduct, deleteProduct} = require('../controllers/product.controllers.js')
const Router = express.Router();


Router.get('/', getApi )
Router.get('/:id', getSingleProduct )
Router.put('/:id', UpdateProduct )
Router.post('/', createProduct )
Router.delete('/:id', deleteProduct )


module.exports = Router;
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route.js')
app.use(express.json())
app.use("/api/products" , productRoute)



//connect with mongodb
mongoose.connect("mongodb+srv://admin:admin@backend.upxfidn.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Backend").then(() => {
    console.log("Connected to the DataBase")
    app.listen(3000, () => {
        console.log("App is running in 3000 port")
    })
})
    .catch(() => {
        console.log("Connection failed")
    })
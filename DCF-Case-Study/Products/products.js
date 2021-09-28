//Load Express
const express = require("express");
const app = express();

//Load BodyParser
const bodyParser = require("body-parser");

//Load CORS
const cors = require("cors");

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Load Mongoose
const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://SK-Test:Hirush76@test.8tfgy.mongodb.net/productsDB";

require("./product-model");
const Product = mongoose.model('Product');

//Connecting to the database
mongoose.connect(dbUrl, () => {
    console.log('Products Database is connected!');
})

//REST APIs
//Retrieve all products from the database
app.get('/products', (req, res) => {
    Product.find().then((products) => {
        res.json(products);
    }).catch((err) => {
        if(err){
            res.sendStatus(404).json(err);
        }
    })
})

//Retrieve a particular product from the database
app.get('/product/:id', (req, res) => {
    Product.findById(req.params.id).then((product) => {
        if(product){
            res.json(product);
        }else{
            res.sendStatus(404);
        }
    }).catch((err) => {
        if(err){
            res.sendStatus(404).json(err);
        }
    })
})

//Insert a new product to the database
app.post('/product', (req, res) => {
    var newProduct = {
        prodId: req.body.prodId,
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        imageUrl: req.body.imageUrl
    }

    //Create a new product
    var products = new Product(newProduct);

    //Save it to the database
    products.save().then(() => {
        console.log('New Product created!');
    }).catch((err) => {
        if(err){
            res.sendStatus(404).json(err);
        }
    })
})

//Delete a product from the database
app.delete('/product/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id).then(() => {
        res.send('Product removed successfully!');
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
})

//setting up the server
app.listen(3000, () => {
    console.log('Server running on port 3000 for Products Microservice');
})

//Export the file for testing
module.exports = app;
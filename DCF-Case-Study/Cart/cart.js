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
const dbUrl = "mongodb+srv://SK-Test:Hirush76@test.8tfgy.mongodb.net/cartDB";

require("./cart-model");
const Cart = mongoose.model('Cart');

//Connecting to the database
mongoose.connect(dbUrl, () => {
    console.log('Cart Database is connected!');
})

//REST APIs
//Retrieve all items from the database
app.get('/', (req, res) => {
    Cart.find((err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    })
})

//Insert a new item to the database
app.post('/', (req, res) => {
    var newItem = {
        prodId: req.body.prodId,
        name: req.body.name,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    }

    //Add a new item
    var items = new Cart(newItem);

    //Save it to the database
    items.save((err, result) => {
        if (err) console.log(err);
        else res.status(200).send(result);
    })
})

//Delete a item from the database
app.delete('/:id', (req, res) => {
    Cart.findByIdAndDelete({ _id: req.params.id }, (err, result) => {        
        if (err)          
            res.status(404).send(err);         
        else          
            res.status(200).send(result);    
    }) 
})

//setting up the server
app.listen(5540, () => {
    console.log('Server running on port 5540 for Cart Microservice');
})
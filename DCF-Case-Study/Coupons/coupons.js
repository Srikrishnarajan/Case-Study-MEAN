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
const dbUrl = "mongodb+srv://SK-Test:Hirush76@test.8tfgy.mongodb.net/couponsDB";

require("./coupon-model");
const Coupon = mongoose.model('Coupon');

//Connecting to the database
mongoose.connect(dbUrl, () => {
    console.log('Coupons Database is connected!');
})

//REST APIs
//Retrieve all coupons from the database
app.get('/coupons', (req, res) => {
    Coupon.find().then((coupons) => {
        res.status(200).json(coupons);
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
})

//Retrieve a particular coupon from the database
app.get('/coupon/:id', (req, res) => {
    Coupon.findById(req.params.id).then((coupon) => {
        if(coupon){
            res.status(200).json(coupon);
        }else{
            res.sendStatus(404);
        }
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
})

//Insert a new coupon to the database
app.post('/coupon', (req, res) => {
    var newCoupon = {
        image: req.body.image,
        offer: req.body.offer,
        productInfo: req.body.productInfo,
        coupon: req.body.coupon
    }

    //Create a new coupon
    var coupons = new Coupon(newCoupon);

    //Save it to the database
    coupons.save().then(() => {
        console.log('New Coupon created!');
    }).catch((err) => {
        if(err){
            throw err;
        }
    })

    res.send('New Coupon is created successfully');
})

//Delete a coupon from the database
app.delete('/coupon/:id', (req, res) => {
    Coupon.findByIdAndDelete(req.params.id).then(() => {
        res.send('Coupon removed successfully!');
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
})

//setting up the server
app.listen(2540, () => {
    console.log('Server running on port 2540 for Coupons Microservice');
})

//Export the file for testing
module.exports = app;
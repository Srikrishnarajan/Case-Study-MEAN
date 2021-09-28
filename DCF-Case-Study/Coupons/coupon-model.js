//Load Mongoose
const mongoose = require("mongoose");

//Define a schema for the collection in the couponDB database
mongoose.model('Coupon', {
    image:{
        type: String
    },
    offer:{
        type: String,
        required: true
    },
    productInfo:{
        type: String,
        required: true
    },
    coupon:{
        type: String,
        required: true
    }
});
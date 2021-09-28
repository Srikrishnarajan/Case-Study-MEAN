//Load Mongoose
const mongoose = require("mongoose");

//Define a schema for the collection in the productDB database
mongoose.model('Product', {
    prodId:{
        type: Number
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    }
});
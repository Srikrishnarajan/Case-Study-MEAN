//Load Mongoose
const mongoose = require("mongoose");

//Define a schema for the collection in the cartDB database
mongoose.model('Cart', {
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
    imageUrl:{
        type: String,
        required: true
    }
});
//Load Mongoose
const mongoose = require('mongoose');

//Define the schema for users collection
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: String,
    password: String
});

//Export the schema
module.exports = mongoose.model('User', userSchema, 'users');
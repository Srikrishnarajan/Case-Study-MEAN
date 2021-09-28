//Load Express
const express = require("express");
const app = express();

//Load JWT
const jwt = require("jsonwebtoken");

//Load Mongoose
const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://SK-Test:Hirush76@test.8tfgy.mongodb.net/usersDB";
const User = require("./user-model");

//Load CORS
const cors = require("cors");

//Middleware
app.use(cors());
app.use(express.json());

//Connecting to the database
mongoose.connect(dbUrl, () => {
    console.log('Users Database is connected!');
})

//REST APIs
//insert user info to the database, generate jwt token and send as a response to save token in browser's local storage
app.post('/register', (req, res) => {
    let userInfo = req.body;

    //Create a new user
    var users = new User(userInfo);

    //Save it to the database
    users.save((err, registeredUser) => {
        if (err) {
            res.sendStatus(404);
            console.log(err);
        } else {
            let payload = { subject: registeredUser._id };
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({ token });
        }
    })
})

//insert user info to the database, generate jwt token and send as a response to save token in browser's local storage
app.post('/login', (req, res) => {
    let userData = req.body;

    //Fetch user info and verify whether the user info is valid or invalid
    User.findOne({ email: userData.email }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send('Invalid Email');
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid Password');
            } else {
                let payload = { subject: user._id };
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({ token });
            }
        }
    })
})

//setting up the server
app.listen(8081, () => {
    console.log('Server running on port 8081 for Users Microservice');
})

//Export the file for testing
module.exports = app;
const express = require('express');
const jsonParser = require('body-parser').json();
const userRouter = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model('user');

userRouter.get("/", (req, res) => {
    try {
        User.find({}).then(response => {
            if (response) res.send(response);
        })
    } catch(err) {
        res.json({
            message: "Error while fetching users!"
        })
    }
});
userRouter.post("/", jsonParser, async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            email: req.body.email,
            date_of_birth: Date(),
            type: "Individual",
            address: req.body.address,
            posts: []
        }
        const newUser = new User(user);
        await newUser.save().then(async (savedUser) => {
            res.send(savedUser);
        })
    } catch(err) {
        res.json({
            message: "Error while creating user!"
        })
    }
});

module.exports = userRouter;
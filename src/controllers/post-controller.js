const express = require('express');
const postRouter = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model('post');

postRouter.get("/", (req, res) => {
    try {
        Post.find({}).then(response => {
            if (response) res.send(response);
        })
    } catch(err) {
        res.json({
            message: "Error while fetching posts!"
        })
    }
});

module.exports = postRouter;
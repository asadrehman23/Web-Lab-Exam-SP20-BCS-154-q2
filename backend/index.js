const mongoose = require('mongoose');
const express = require("express");
const Posts = require("./models/posts")
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/posts').then(()=>{
    console.log("Connection successful created!")
}).catch(e=>console.log(e))

app.get("/posts", async (req,res) => {
  
    try {
        let { page, size } = req.query;
        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 10;
        }
        const limit = parseInt(size);
        const posts = await Posts.find().limit(limit)
        res.send({
            page,
            size,
            posts: posts });
    }
    catch (error) {
        res.status(500).send("Something went wrong");
    }
});

app.listen(8080,()=>{
    console.log("listening on port 8080")
})
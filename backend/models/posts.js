const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    posts:[String]
})

const Posts = mongoose.model("Posts",postSchema);
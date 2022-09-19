const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;

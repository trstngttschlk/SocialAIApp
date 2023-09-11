const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
  // likes: {
  //   type: Number,
  //   required: true,
  // },
  created: {
    type: Date,
    default: Date.now,
  },
})

const PostModel = mongoose.model("Post", PostSchema)

module.exports = PostModel

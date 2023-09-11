const PostModel = require("../models/PostModel")

module.exports = async (req, res) => {
  const { caption } = req.body
  console.log(caption)
  console.log(req.body)
  const post = new PostModel({
    caption,
  })
  const newPost = await post.save()
  res.json(newPost)
}

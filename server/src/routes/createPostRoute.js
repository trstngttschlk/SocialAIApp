const PostModel = require("../models/PostModel")

module.exports = async (req, res) => {
  const { text } = req.body
  console.log(text)
  const post = new PostModel({
    caption: text,
  })
  const newPost = await post.save()
  res.json(newPost)
}

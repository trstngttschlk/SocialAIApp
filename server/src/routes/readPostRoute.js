const PostModel = require("../models/PostModel")

module.exports = async (req, res) => {
  const posts = await PostModel.find()
  res.json(posts)
}

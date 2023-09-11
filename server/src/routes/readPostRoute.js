const PostModel = require("../models/PostModel")

module.exports = async (req, res) => {
  const { id } = req.params
  const post = await PostModel.findById(id)
  res.json(post)
}

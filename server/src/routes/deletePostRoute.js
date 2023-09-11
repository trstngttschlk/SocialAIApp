const PostModel = require("../models/PostModel")

module.exports = async (req, res) => {
  const { id } = req.params
  const post = await PostModel.findById(id)
  await post.deleteOne()
  res.status(204).json(post)
}

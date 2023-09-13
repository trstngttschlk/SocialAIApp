const PostModel = require("../models/PostModel")

module.exports = async (req, res) => {
  // const { id } = req.params
  const post = await PostModel.findOne(req.params.id)
  res.json(post)
}

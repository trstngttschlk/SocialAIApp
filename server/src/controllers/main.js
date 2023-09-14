const PostModel = require("../models/PostModel")

module.exports = {
  readFeedRoute: async (req, res) => {
    const posts = await PostModel.find()
    res.json(posts)
  },
}

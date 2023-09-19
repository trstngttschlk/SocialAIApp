const PostModel = require("../models/PostModel")

module.exports = {
  createPostRoute: async (req, res) => {
    try {
      const { caption } = req.body
      const post = new PostModel({
        caption,
      })
      const newPost = await post.save()
      res.json(newPost)
    } catch (err) {
      console.log(err)
    }
  },
  readPostRoute: async (req, res) => {
    try {
      const { id } = req.params
      const post = await PostModel.findById(id)
      res.json(post)
    } catch (err) {
      console.log(err)
    }
  },
  // updatePostRoute: async (req, res) => {
  //   const { id } = req.params
  //   const post = await PostModel.findById(id)
  //   post.caption = req.body.caption
  //   await post.save()
  //   res.json(post)
  // },
  deletePostRoute: async (req, res) => {
    const { id } = req.params
    const post = await PostModel.findById(id)
    await post.deleteOne()
    res.status(204).json(post)
  },
}

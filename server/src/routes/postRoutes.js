const express = require("express")
const router = express.Router()
const {
  createPostRoute,
  readPostRoute,
  updatePostRoute,
  deletePostRoute,
} = require("../controllers/posts")

router.post("/createPost", createPostRoute)
router.get("/:id", readPostRoute)
router.put("/updatePost/:id", updatePostRoute)
router.delete("/deletePost/:id", deletePostRoute)

module.exports = router

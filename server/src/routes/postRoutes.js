const express = require("express")
const router = express.Router()
const {
  createPostRoute,
  readPostRoute,
  updatePostRoute,
  deletePostRoute,
} = require("../controllers/posts")

router.get("/:id", readPostRoute)
router.post("/createPost", createPostRoute)
// router.put("/updatePost/:id", updatePostRoute)
router.delete("/deletePost/:id", deletePostRoute)

module.exports = router

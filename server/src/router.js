const express = require("express")
const router = express.Router()

const getMainRoute = require("./routes/getMainRoute")

const readPostRoute = require("./routes/readPostRoute")
const readPostsRoute = require("./routes/readPostsRoute")

const createPostRoute = require("./routes/createPostRoute")
const updatePostRoute = require("./routes/updatePostRoute")
const deletePostRoute = require("./routes/deletePostRoute")

router.get("/", getMainRoute)

router.get("/posts", readPostsRoute)
router.post("/posts", createPostRoute)

router.get("posts/:id", readPostRoute)
router.put("/posts/:id", updatePostRoute)
router.delete("/posts/:id", deletePostRoute)

module.exports = router

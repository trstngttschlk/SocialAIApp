const express = require("express")
const router = express.Router()

const getMainRoute = require("./routes/getMainRoute")

const readPostRoute = require("./routes/readPostRoute")
const createPostRoute = require("./routes/createPostRoute")
const updatePostRoute = require("./routes/updatePostRoute")
const deletePostRoute = require("./routes/deletePostRoute")

router.get("/", getMainRoute)

router.get("/posts", readPostRoute)
router.post("/posts", createPostRoute)
router.put("/posts/:id", updatePostRoute)
router.delete("/posts/:id", deletePostRoute)

module.exports = router

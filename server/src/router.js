const express = require("express")
const router = express.Router()

const getMainRoute = require("./routes/getMainRoute")
const readPostsRoute = require("./routes/readPostsRoute")

router.get("/", getMainRoute)
router.get("/posts", readPostsRoute)

module.exports = router

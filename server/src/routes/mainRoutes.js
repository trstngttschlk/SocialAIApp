const express = require("express")
const { readFeedRoute } = require("../controllers/main")
const router = express.Router()

router.get("/feed", readFeedRoute)

module.exports = router

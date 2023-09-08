const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config({ path: "./config/.env" })

const app = express()
const PORT = 4000

app.get("/", (req, res) => {
  res.send("Hello World")
})
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT)
})

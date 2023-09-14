const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const router = require("./router")
const cors = require("cors")
const postRoutes = require("./routes/postRoutes")
dotenv.config({ path: "./config/.env" })

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.use("/post", postRoutes)
app.use(router)

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT)
})

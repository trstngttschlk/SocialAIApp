const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const mainRoutes = require("./routes/mainRoutes")
const postRoutes = require("./routes/postRoutes")
const userRoutes = require("./routes/userRoutes")
const morgan = require("morgan")
dotenv.config({ path: "./config/.env" })

const app = express()
app.use(morgan("tiny"))

app.use(cors())
app.use(express.json())

app.use("/", mainRoutes)
app.use("/post", postRoutes)
app.use("/api/user", userRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT)
})

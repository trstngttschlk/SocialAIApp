const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const mainRoutes = require("./routes/mainRoutes")
const authRoutes = require("./routes/authRoutes")
const postRoutes = require("./routes/postRoutes")
const morgan = require("morgan")
const path = require("path")

const passport = require("passport")
const session = require("express-session")
const SQLiteStore = require("connect-sqlite3")

dotenv.config({ path: "./config/.env" })

const app = express()
app.use(morgan("tiny"))

app.use(express.static(path.join(__dirname, "public")))
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
  })
)
app.use(passport.authenticate("session"))

app.use(cors())
app.use(express.json())

app.use("/", mainRoutes)
app.use("/", authRoutes)
app.use("/post", postRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT)
})

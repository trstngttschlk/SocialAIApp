const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel

const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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
  // first_name: {
  //   type: String,
  //   required: true,
  // },
  // last_name: {
  //   type: String,
  //   required: true,
  // },
  created: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email })
  if (exists) {
    throw Error("Email already in use")
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({ email, password: hash })

  return user
}

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel

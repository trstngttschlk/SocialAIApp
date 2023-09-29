const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

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

// signup function and logic
UserSchema.statics.signup = async function (email, password) {
  // checks if email and password fields are filled
  if (!email || !password) {
    throw Error("All fields must be filled")
  }
  // checks if valid email
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid")
  }
  // checks if password requirements are met
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      // minLowercase: 1,
      // minUppercase: 1,
      // minNumbers: 1,
      // minSymbols: 1,
    })
  ) {
    throw Error("Password not strong enough")
  }

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

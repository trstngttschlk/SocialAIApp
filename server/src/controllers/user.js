const UserModel = require("../models/UserModel")
const jwt = require("jsonwebtoken")

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
}

module.exports = {
  signupUser: async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await UserModel.signup(email, password)

      // create jwt token
      const token = createToken(user._id)

      res.status(200).json({ email, token })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body

    try {
      const user = await UserModel.login(email, password)

      const token = createToken(user._id)
      res.status(200).json({ email, token })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
}

const UserModel = require("../models/UserModel")

module.exports = {
  signupUser: async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await UserModel.signup(email, password)

      res.status(200).json({ email, user })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  loginUser: async (req, res) => {
    res.json({ msg: "user login" })
  },
}

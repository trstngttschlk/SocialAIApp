const UserModel = require("../models/UserModel")

module.exports = {
  signupUser: async (req, res) => {
    res.json({ msg: "user signup" })
  },
  loginUser: async (req, res) => {
    res.json({ msg: "user login" })
  },
}

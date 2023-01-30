import { User } from "../../../models/User"
import jwt from "jsonwebtoken"

export default async function Login(req, res) {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.status(400).send({ error: 'Email not found' })
    }

    if (!await compare(password, user.password)) {
      return res.status(400).send({ error: 'Incorrect password' })
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400

    })
    res.status(200).send({ user, token })
    
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
}
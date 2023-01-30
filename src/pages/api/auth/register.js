import { User } from "../../../models/User"
export default async function Register(req, res) {
  const { email } = req.body
  try {
    if (await User.findOne({ email })) {
      return (res.status(500).send({ error: 'Email or Identifier in use' }))
    }

    const user = await User.create(req.body)
    res.status(201).send({ user })

  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
}
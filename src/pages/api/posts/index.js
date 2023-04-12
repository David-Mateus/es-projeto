import { Post } from "../../../models/Post";

export default async function View(req, res) {
  try {
    const post = await Post.find().populate('user')
    res.status(200).send(post)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}
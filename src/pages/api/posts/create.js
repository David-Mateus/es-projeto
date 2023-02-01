import { Post } from "../../../models/Post";

export default async function Create(req, res) {
  try {
    const post = await Post.create(req.body)
    res.status(201).send(post)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}
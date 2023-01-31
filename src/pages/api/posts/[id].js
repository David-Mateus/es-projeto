import { Post } from "../../../models/Post";

export default async function OnePost(req, res) {
  const { id } = req.query
  try {
    const post = await Post.findById(id)
    res.status(200).send(post)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}
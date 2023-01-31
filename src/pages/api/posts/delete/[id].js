import { Post } from "../../../../models/Post";

export default async function Delete(req, res) {
  const { id } = req.query
  try {
    await Post.deleteOne({id})
    res.status(200).send('Post deleted successfully!')
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
}
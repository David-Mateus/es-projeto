import { Post } from "../../../../models/Post";

export default async function OnePost(req, res) {
  const { id } = req.query
  const { title, description } = req.body
  try {
    let post = await Post.findById(id)

    if (title) {
      post.title = title
    }
    if (description) {
      post.description = description
    }

    post = await post.save()
    res.status(200).send(post)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
} 
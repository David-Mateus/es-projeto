import { Post } from "../../../models/Post";
import { User } from "../../../models/User";

export default async function Create(req, res) {
  const { user } = req.body
  try {
    let creator = await User.findById(user)
    const post = await Post.create(req.body)
    creator.posts.push(post)
    creator = await creator.save()
    res.status(201).send(post)
  } catch (error) {
    res.status(500).send({ error: error })
  }
}
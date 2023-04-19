import { Post } from "../../../../models/Post";

export default async function UserPost(req, res) {
    const { userId } = req.query
    try {
        const post = await Post.find({user: userId})
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send({ error: error })
    }
}
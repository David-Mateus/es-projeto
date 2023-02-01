import { db } from "../database/mongo";

const PostSchema = new db.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Post = db.models.Post || db.model('Post', PostSchema)
export { Post }
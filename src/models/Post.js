import { db } from "../database/mongo";
const ObjectId = db.Schema.ObjectId
const PostSchema = new db.Schema({
  title: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Post = db.models.Post || db.model('Post', PostSchema)
export { Post }
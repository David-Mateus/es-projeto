import { db } from "../database/mongo";
import { hash } from "bcrypt";

const UserSchema = new db.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }, 
  password: {
    type: String,
    require: true,
    select: false
  },
  
})

UserSchema.pre('save', async function (next) {
  if (this.password) {
    const pswd = await hash(this.password, 10)
    this.password = pswd
    next()
  } else {
    next()
  }
})

const User = db.models.User || db.model('User', UserSchema)

export { User }
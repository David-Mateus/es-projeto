import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
const db = mongoose

db.connect(process.env.DATABASE_URL).then(() => {
  console.log('Banco conectado!')

}).catch((err) => {
  console.log(err)
})
export { db }
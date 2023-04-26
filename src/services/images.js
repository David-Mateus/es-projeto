import axios from "axios";
import { parseCookies } from "nookies";
import * as dotenv from 'dotenv'
dotenv.config()
const apiBaseUrl = process.env.IMAGE_URL
const { 'findy-token': token } = parseCookies()

const imageApi = axios.create({
  baseURL: apiBaseUrl
})

if (token) {
  imageApi.defaults.headers['Authorization'] = `Bearer ${token}`
}

export { imageApi }

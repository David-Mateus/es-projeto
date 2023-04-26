import axios from "axios";
import { parseCookies } from "nookies";
const apiBaseUrl = process.env.IMAGE_URL
const { 'findy-token': token } = parseCookies()

const imageApi = axios.create({
  baseURL: 'https://image-service-psi.vercel.app/'
})

if (token) {
  imageApi.defaults.headers['Authorization'] = `Bearer ${token}`
}

export { imageApi }

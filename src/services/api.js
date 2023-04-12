import axios from "axios";
import { parseCookies } from "nookies";
const apiBaseUrl = process.env.BASE_URL
const { 'findy-token': token } = parseCookies()

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export { api }
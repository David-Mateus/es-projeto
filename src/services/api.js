import axios from "axios";
import { parseCookies } from "nookies";

const { 'findy-token': token } = parseCookies()

const api = axios.create({
  baseURL: process.env.BASE_URL
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export { api }
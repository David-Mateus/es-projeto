import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const isAuthenticated = !!user

  // useEffect(() => {
  //   const { 'findy-token': token } = parseCookies()
  //   if (token) {
  //     //Chamar API das próprias informações
  //   }
  // }, [])

  async function signIn({ email, password }) {
    const response = await api.post('/auth/login', { email, password })
    setCookie(undefined, 'findy-token', response.data.token, {
      maxAge: 60 * 60,
      path: '/'
    })
    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
    setUser(response.data.user)
    Router.push('/feed')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
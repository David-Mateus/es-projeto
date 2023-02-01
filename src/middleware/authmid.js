import jwt from "jsonwebtoken"
export default function authMid(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({ error: 'No token' })
  }

  const parts = authHeader.split(' ')
  if (!parts.length === 2) {
    return res.status(401).send({ error: 'Token not supported' })
  }
  
  const [scheme, token] = parts
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Invalid token scheme' })
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: 'Invalid token' })
    }
    req.userId = decoded.id
    return next()
  })
}
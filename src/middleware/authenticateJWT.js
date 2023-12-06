
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  jwt.verify(token, 'secretpass', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Falha na autenticação do token.' });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;

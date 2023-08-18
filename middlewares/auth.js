const jwt = require('jsonwebtoken');
const AuthErr = require('../errors/AuthErr');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthErr('Необходима авторизация'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(
      token,
      '42513328af428502c52e0d692bca7d27e70356e2dc2f8a397dbd2a81f11213f8',
    );
  } catch (err) {
    return next(new AuthErr('Необходима авторизация'));
  }
  req.user = payload;
  return next();
};

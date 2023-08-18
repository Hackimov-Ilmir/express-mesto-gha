const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
  const { token } = req.headers;
  let payload;
  try {
    payload = jwt.verify(token, '42513328af428502c52e0d692bca7d27e70356e2dc2f8a397dbd2a81f11213f8');
  } catch (err) {
    return next();
  }
  req.user = payload;
  next();
  return undefined;
};

module.exports = { tokenVerify };

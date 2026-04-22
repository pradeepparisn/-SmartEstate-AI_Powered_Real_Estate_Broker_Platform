const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token, access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: 'Invalid token' });
  }
};

const sellerOnly = (req, res, next) => {
  if (req.user.role !== 'seller' && req.user.role !== 'admin')
    return res.status(403).json({ msg: 'Access denied. Sellers only.' });
  next();
};

module.exports = { protect, sellerOnly };
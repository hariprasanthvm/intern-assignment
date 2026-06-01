const checkAdmin = (req, res, next) => {
  const email = req.headers['user-email'] || req.query.email || '';

  if (email.startsWith('admin')) {
    next();
  } else {
    res.status(403).json({ error: "Access denied. Only admin emails allowed." });
  }
};

module.exports = { checkAdmin };

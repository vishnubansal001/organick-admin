const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, "abcd123", {
    expiresIn: "1hr",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true, // Use secure cookies in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 60 * 60 * 1000, // 30 days
  });
};

module.exports = generateToken;

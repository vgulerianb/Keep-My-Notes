const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (token) {
    jwt.verify(token, "VG", async (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        req.token = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      success: false,
      message: "Authentication error: Auth token is not supplied",
    });
  }
};

module.exports = {
  verifyToken
};

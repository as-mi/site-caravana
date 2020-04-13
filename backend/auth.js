const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies["Authorization"].replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.SECRET);

    if (!decoded.data.includes(process.env.ADMIN_NAME)) {
      throw new Error("Not logged in!");
    }

    next();
  } catch (error) {
    res.status(302).redirect("/admin/login");
  }
};

module.exports = auth;

const jwt = require("jsonwebtoken");
const user = require("../models/user");
exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, process.env.SecretorKey);
    if (!decode) {
      return res.status(400).send({ msg: "is not authorized" });
    }
    const Oneuser = await user.findById(decode.id);
    req.user = Oneuser;
    next();
  } catch (error) {
    console.log(error);
  }
};

const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await user.findOne({ email });
    if (found) {
      return res.status(400).send({ errors: ["user already existe"] });
    }
    const newUser = new user(req.body);
    const salt = 10;
    const hash = bcrypt.hashSync(password, salt);
    newUser.password = hash;
    const payload = { id: newUser._id };
    const token = jwt.sign(payload, process.env.SecretorKey);

    await newUser.save();

    res.status(200).send({ msg: "user added", newUser, token });
  } catch (error) {
    res.status(500).send({ error: "could not add user" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const founduser = await user.findOne({ email });
    if (!founduser) {
      return res.status(400).send({ errors: ["user not Found"] });
    }
    const match = await bcrypt.compare(password, founduser.password);
    if (!match) {
      return res.status(400).send({ errors: ["bad credential"] });
    }
    const payload = { id: founduser._id };
    const token = jwt.sign(payload, process.env.SecretorKey);
    res.status(200).send({ msg: "welcome back", founduser, token });
  } catch (error) {
    res.status(500).send({ error: ["could not logging"] });
  }
};

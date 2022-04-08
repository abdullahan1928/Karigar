const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, mail, password,name,phone } = req.body;

    // check if user exists
    const userExists = await User.exists({ mail: mail.toLowerCase() });

    const phoneExists = await User.exists({ phone: phone });

    if (userExists) {
      return res.status(409).send("E-mail already in use.");
    }
    if(phoneExists){
      return res.status(409).send("Phone number already in use.");
    }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      phone,
      name: name.toLowerCase(),
      password: encryptedPassword,
    });

   const token ='JWT token'

    res.status(201).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
        phone:user.phone,
        name:user.name,
      },
    }); 
  } catch (err) {
    return res.status(500).send("Error occured. Please try again "+ err);
  }
};

module.exports = postRegister;

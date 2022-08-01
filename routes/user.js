const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const usermodel = require("../models/model.user");
const uuid = require("uuid");
// Validating a existing user :
router.route("/login").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const findUser = usermodel.findOne({ email: email }, (err, user) => {
    if (err) {
      res.json({
        message: "error",
      });
    } else {
      if (user) {
        bcrypt.compare(password, user.password, function (err, data) {
          if (err) {
            res.status(400).json({
              message: "error",
            });
          }
          if (data) {
            res.status(200).json({
              message: "Success",
              userid: user._id,
            });
          } else {
            res.status(404).json({
              message: "Failed",
            });
          }
        });
      } else {
        res.status(404).json({
          message: "User Does Not Exist",
        });
      }
    }
  });
});
// Adding a New User
router.route("/signup").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  usermodel.findOne({ email: email }, async (err, user) => {
    if (err) {
      res.json({
        message: "error",
      });
    } else {
      if (user) {
        res.status(404).json({
          message: "User Already Exists",
        });
      } else {
        const id = uuid.v4();
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        const newuser = new usermodel({
          userId: id,
          email: email,
          password: hashedpassword,
        });
        newuser
          .save()
          .then((result) => {
            res.status(201).json({
              userId: result,
              message: "User Created Successfully",
            });
          })
          .catch((err) => {
            res.status(500).json({
              error: err,
            });
          });
      }
    }
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const homepagemodel = require("../models/model.homepage");

router.route("/get/data").post((req, res) => {
  homepagemodel.findOne({ findid: req.body.findid }, (err, data) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", data: data });
    }
  });
});

router.route("/add/data").post((req, res) => {
  const { Name, currentTitle, aboutme, picture, collegeData, findid, resume } =
    req.body;
  const newhomepage = new homepagemodel({
    Name,
    currentTitle,
    aboutme,
    collegeData,
    picture,
    findid,
    resume,
  });
  newhomepage
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Homepage Formed!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Internal Server Error",
      });
    });
});

router.route("/update/data").post((req, res) => {
  const { Name, currentTitle, aboutme, picture, collegeData, findid, resume } =
    req.body;
  console.log(picture);
  homepagemodel
    .findOneAndUpdate(
      { findid: findid },
      {
        Name,
        currentTitle,
        aboutme,
        collegeData,
        picture,
        resume,
      }
    )
    .then(
      res.json({
        msg: "updated",
      })
    )
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

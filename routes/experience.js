const express = require("express");
const router = express.Router();
const experiencemodel = require("../models/model.experience");

router.route("/get").post((req, res) => {
  const findid = req.body.findid;
  experiencemodel
    .find({ findid: findid })
    .then((result) => {
      res.json({
        msg: "Success",
        Data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/add").post((req, res) => {
  const {
    type,
    company,
    duration,
    startingDate,
    endingDate,
    findid,
    description,
    techstacksused,
    douments,
  } = req.body;
  const newexperience = new experiencemodel({
    type,
    company,
    duration,
    startingDate,
    endingDate,
    findid,
    description,
    techstacksused,
    douments,
  });
  newexperience
    .save()
    .then(
      res.json({
        msg: "success",
      })
    )
    .catch((err) => {
      console.log(err);
    });
});

router.route("/delete").post((req, res) => {
  const { id } = req.body;
  console.log(id);
  experiencemodel
    .findByIdAndDelete({
      _id: id,
    })
    .then(
      res.json({
        msg: "Deleted",
      })
    )
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update").post((req, res) => {
  const {
    type,
    company,
    duration,
    startingDate,
    endingDate,
    findid,
    description,
    techstacksused,
    douments,
    experienceid,
  } = req.body;
  experiencemodel
    .findByIdAndUpdate(
      {
        _id: experienceid,
      },
      {
        type,
        company,
        duration,
        startingDate,
        endingDate,
        description,
        techstacksused,
        douments,
      }
    )
    .then(
      res.json({
        msg: "Updated",
      })
    )
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

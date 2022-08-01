const express = require("express");
const router = express.Router();
const projectsmodel = require("../models/model.projects");

router.route("/get").post((req, res) => {
  const findid = req.body.findid;
  projectsmodel
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
  const { Name, link, findid, pic, description, techstacks } = req.body;
  const newprojects = new projectsmodel({
    Name,
    link,
    findid,
    pic,
    description,
    techstacks,
  });
  newprojects
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

router.route("/delete").delete((req, res) => {
  const { id } = req.body;
  console.log(id);
  projectsmodel
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
  const { Name, link, findid, pic, description, techstacks, projectid } =
    req.body;
  projectsmodel
    .findByIdAndUpdate(
      {
        _id: projectid,
      },
      {
        Name,
        link,
        pic,
        description,
        techstacks,
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

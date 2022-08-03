const express = require("express");
const router = express.Router();
const linksmodel = require("../models/model.links");

router.route("/get").post((req, res) => {
  const findid = req.body.findid;
  linksmodel
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
  const { Name, link, findid, pic } = req.body;
  const newLinks = new linksmodel({
    Name,
    link,
    findid,
    pic,
  });
  newLinks
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
  linksmodel
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
  const { Name, link, findid, pic, linkid } = req.body;
  linksmodel
    .findByIdAndUpdate(
      {
        _id: linkid,
      },
      {
        Name,
        link,
        pic,
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

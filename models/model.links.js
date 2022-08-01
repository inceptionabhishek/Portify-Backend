const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Links = new Schema({
  Name: String,
  link: String,
  findid: String,
  pic: String,
});

module.exports = mongoose.model("links", Links);

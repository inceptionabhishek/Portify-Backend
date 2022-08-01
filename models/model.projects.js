const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Projects = new Schema({
  Name: String,
  link: String,
  pic: String,
  description: String,
  findid: String,
  techstacks: [],
});

module.exports = mongoose.model("projects", Projects);

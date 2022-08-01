const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Experience = new Schema({
  type: String,
  company: String,
  duration: String,
  startingDate: String,
  endingDate: String,
  findid: String,
  description: String,
  techstacksused: [],
  douments: [],
});

module.exports = mongoose.model("experience", Experience);

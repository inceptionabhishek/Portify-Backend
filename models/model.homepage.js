const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomePage = new Schema({
  Name: String,
  currentTitle: String,
  aboutme: String,
  picture: String,
  collegeData: {
    name: String,
    description: String,
    startingDate: String,
    endingDate: String,
  },
  findid: String,
  resume: String,
});

module.exports = mongoose.model("homepage", HomePage);

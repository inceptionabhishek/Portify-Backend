const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: ".env" });
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
// Routes
// 0. Users
app.use("/api/user", require("./routes/user.js"));
// 1. HomePage Stuffs
app.use("/api/homepage", require("./routes/homepage.js"));
// 2. Projects Section
app.use("/api/projects", require("./routes/projects.js"));
// 3. Experience Section
app.use("/api/experience", require("./routes/experience.js"));
// 4. Links Section
app.use("/api/links", require("./routes/links.js"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

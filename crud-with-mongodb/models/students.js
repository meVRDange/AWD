const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  prn: String,
  name: String,
});

module.exports = mongoose.model("students", studentSchema);

const mongoose = require("mongoose");

const recruiterSchema = mongoose.Schema({
  name: String,
});

const RecruiterModel = mongoose.model("contact", recruiterSchema);

module.exports = {
  RecruiterModel,
};

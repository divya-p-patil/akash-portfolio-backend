const mongoose = require("mongoose");
require("dotenv").config();

const mongodbUrl = process.env.MONGODB_URL;

const connectionToDatabase = mongoose.connect(mongodbUrl);

module.exports = {
  connectionToDatabase,
};

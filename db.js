const mongoose = require("mongoose");
require("dotenv").config();
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("successfully connected to database");
  } catch (error) {
    console.log("error while connecting to database");
  }
};

module.exports = { connectToDatabase };

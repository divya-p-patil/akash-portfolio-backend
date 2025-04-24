const express = require("express");
const { RecruiterModel } = require("./models/recruiter.model");
const cors = require("cors");
const { connectToDatabase } = require("./db");
const { recruiterRouter } = require("./routes/recruiter.routes");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Routes
app.use("/recruiter", recruiterRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connectToDatabase();
    console.log("server is running");
  } catch (error) {
    console.log("error ");
  }
});

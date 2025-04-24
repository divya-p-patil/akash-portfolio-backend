const express = require("express");
const cors = require("cors");
const { recruiterRouter } = require("./routes/recruiter.routes");
const {  connectionToDatabase } = require("./db");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Routes
app.use("/recruiter", recruiterRouter);

app.use("/", (req, res) => {
  res.send("Home page");
});

app.listen(process.env.PORT, async () => {
  try {
    await connectionToDatabase;

    console.log("server is running & sucessful connection to databse");
  } catch (error) {
    console.log("error ");
  }
});

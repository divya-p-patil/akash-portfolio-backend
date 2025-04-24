const express = require("express");
const { RecruiterModel } = require("./models/recruiter.model");
const cors = require("cors");
const { connectToDatabase } = require("./db");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  try {
    const recruiter = new RecruiterModel(req.body);
    await recruiter.save();
    res.send("message sent successfully");
  } catch (error) {
    res.status(400).send("error while adding data to database");
  }
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, async (req, res) => {
try {
    await connectToDatabase();
console.log("server is running");
} catch (error) {
    console.log("error ");
}  
});

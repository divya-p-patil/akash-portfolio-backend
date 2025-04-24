const express = require("express");
const { RecruiterModel } = require("../models/recruiter.model");

const recruiterRouter = express.Router();

recruiterRouter.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const recruiter = new RecruiterModel(req.body);
    await recruiter.save();

    res.send("message sent successfully");
  } catch (error) {
    res.status(400).send("error while adding data to database");
  }
});

module.exports = {
  recruiterRouter,
};

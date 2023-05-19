const mongoose = require('mongoose');

const JobPosting = new mongoose.Schema(
  {
    postingId: {
      type: String,
      unique: true,
    },
    employeeId: String, //new string field for searching through employeeId
    title: String,
    blurb: String,
    jobCode: String,
    languages: [String],
    frameworks: [String],
    closingDate: Date,
  },
  { timestamps: true }
);

module.exports = JobPosting;

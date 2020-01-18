const mongoose = require("mongoose");
const CourseSchema = mongoose.Schema({
  courseId: {
    type: Number,
    required: true
  },
  courseName: {
    type: String
  },
  courseDuration: {
    type: String
  },
  courseStream: String
});

module.exports = mongoose.model("courses_tb", CourseSchema);

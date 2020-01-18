const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// router.get("/", (req, res) => {
//   res.send(["Physics", "Chemistry", "Maths"]); //http://localhost:4000/api/courses/1
// });

router.get("/", async (req, res) => {
  const course = await Course.find();
  res.send(course); //http://localhost:4000/api/courses/1
});

router.get("/:id", (req, res) => {
  res.send(req.params.id); //http://localhost:4000/api/courses/1
});

router.post("/", async (req, res) => {
  const course = new Course({
    courseId: req.body.courseId,
    courseName: req.body.courseName,
    courseDuration: req.body.courseDuration,
    courseStream: req.body.courseStream
  });

  try {
    const savedCourse = await course.save();
    res.json(savedCourse);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  if (Object.keys(req.query).length !== 0) {
    const queryKey = Object.keys(req.query)[0];
    var queryValue = req.query[Object.keys(req.query)[0]];
    if (queryKey === "userId") {
      queryValue = parseInt(queryValue);
    }
    var quer = {};
    quer[queryKey] = queryValue;

    const getResult = await User.find(quer);
    // res.send({
    //   query: req.query,
    //   queryValue: queryValue,
    //   queryKey: queryKey,
    //   quer: quer,
    //   result: getResult,
    //   params: req.params
    // });
    res.send(getResult);
  } else {
    try {
      const getUsers = await User.find();
      res.json(getUsers);
    } catch (err) {
      res.json({ message: err });
    }
  }
}); // http://localhost:4000/api/user

// router.get("/:userId", (req, res) => {
//   res.send(req.params.userId);
// }); //http://localhost:4000/api/user/5

router.get("/:userId", async (req, res) => {
  const findUserByuserId = await User.find({ userId: req.params.userId });
  res.send(findUserByuserId);
}); //http://localhost:4000/api/user/5

router.get("/:year/:month", (req, res) => {
  res.send({
    query: req.query,
    param: req.params
  }); //http://localhost:4000/api/user/2020/01?sortBy=month
});

// synchronous
// router.post("/", (req, res) => {
//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     userId: req.body.userId,
//     emailId: req.body.emailId,
//     course: req.body.course,
//     courses: req.body.courses,
//     multi: req.body.multi,
//     clubs: req.body.clubs
//   });
//   user
//     .save()
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// });

// asynchronous
router.post("/", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userId: req.body.userId,
    emailId: req.body.emailId,
    course: req.body.course,
    courses: req.body.courses,
    multi: req.body.multi,
    clubs: req.body.clubs
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

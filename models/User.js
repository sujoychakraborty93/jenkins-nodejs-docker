const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  emailId: {
    type: String,
    required: true
  },
  userId: {
    type: Number
  },
  course: String,
  courses: {
    type: [Number]
  },
  multi: Number,
  clubs: Array
});

module.exports = mongoose.model("user_tb", UserSchema);

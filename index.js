const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");
const DBClass = require("./DBClass");
const userRoute = require("./routes/user");
const courseRoute = require("./routes/course");
const mongoose = require("mongoose");

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// CONNECT TO DB
const uri = process.env.DB_URI;
// connect using DBClass.js
// let db = new DBClass(uri);
// connect from here directly
mongoose.connect(
  uri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("db connected");
  }
);

// ROUTES
app.use("/api/user", userRoute);
app.use("/api/course", courseRoute);

app.get("/", (req, res) => {
  res.send("we are at api homepage");
});

port = process.env.PORT || 4000;
app.listen(port, () => console.log("listening on port 4000"));

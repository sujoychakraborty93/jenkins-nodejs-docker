const mongoose = require("mongoose");
// const MongoClient = require("mongodb").MongoClient;

class DBClass {
  constructor(uri) {
    mongoose.connect(
      uri,
      { useUnifiedTopology: true, useNewUrlParser: true },
      () => {
        console.log("connected to db");
      }
    );

    // option 2 using MongoClient ------
    // const client = new MongoClient(
    //   uri,
    //   { useUnifiedTopology: true },
    //   { useNewUrlParser: true }
    // );
    // client.connect(err => {
    //   // const collection = client.db("testdb1").collection("user_tb");
    //   if (err) {
    //     console.log("error while connecting to db");
    //     client.close();
    //   }
    //   console.log("connected to db");
    //   // client.close();
    // });
  }
}

module.exports = DBClass;

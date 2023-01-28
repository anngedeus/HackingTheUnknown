const express = require("express");

const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

//route for signing up
recordRoutes.route("/signup").post(function (req, response) {
  let db_connect = dbo.getDb("Discover");

  let newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    visited: 0,
  };

  db_connect.collection("Users").insertOne(newUser, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//route for logging in
recordRoutes.route("/login").post(function (req, res) {
  let db_connect = dbo.getDb("Discover");

  let loginInfo = {
    email: req.body.email,
    password: req.body.password,
  };

  db_connect.collection("Users").findOne(loginInfo, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//route for incremeting visited location count
recordRoutes.route("/update-visited").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.body._id) };
  let newvalues = {
    $inc: {
      visited: 1,
    },
  };
  db_connect
    .collection("Users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

//route for getting location info
recordRoutes.route("/get-location/").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.body._id) };
  db_connect.collection("Locations").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = recordRoutes;

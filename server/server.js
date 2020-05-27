const bodyParser = require("body-parser");
const express = require("express");
const app = express();
var path = require("path");
var fs = require("fs");
var http = require("http");
var PythonShell = require("python-shell");
var jsonfile = require("jsonfile");

var urlencoded = bodyParser.urlencoded({ extended: false });

app.get("/ping", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  return res.send("chandani");
});
app.post("/location", urlencoded, (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  var location = req.body.location;
  console.log("location: " + location);

  //python code here *************************
  var options = {
    mode: "text",
    // pythonPath: 'C:/Python27',
    pythonOptions: ["-u"],
    // scriptPath: 'code',
    args: location,
  };

  //console.log(options);

  // call to python code mlr_algo

  PythonShell.run("./code/mlr_algo.py", options, function (err, results) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      // results is an array consisting of messages collected during execution
      console.log("results", results[0]);
      res.status(200).send(JSON.stringify(results[0]));
    }
  });

  //}); python ends here *******************************

  //res.send('You are now at ' + location);
});

app.listen(5000, () => {
  console.log("Started on http://localhost:5000");
});

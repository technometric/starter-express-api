const request = require('request');
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Modul akuarium");
});

app.post("/wa", function (req, res) {
  console.log(req.body)
  id = req.body["id"];
  msg = req.body["msg"];
  kirimWA(req.body);
  res.send("Kirim WA " + id + ": " + msg + " berhasil");
});

app.post("/sms", function (req, res) {
  console.log(req.body)
  id = req.body["id"];
  msg = req.body["msg"];
  kirimWA(req.body);
  res.send("Kirim WA " + id + ": " + msg + " berhasil");
});

function kirimWA(body){
  request({
      url: "http://128.199.96.82:5000/sms",
      method: "POST",
      json: true,   
      body: body
  }, function (error, response, body){
      console.log(error);
  });
}

app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}!`)
);

const { json } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

const accountSid = "AC9f65506a49b10d887b708bd19c781b95"; // Your Account SID from www.twilio.com/console
const authToken = "b7ad10e41197e2ee4a97e4f624498877"; // Your Auth Token from www.twilio.com/console
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

// We want to use JSON to send post request to our application
app.use(bodyParser.json());
// We tell express to serve the folder public as static content
app.get("/", (req, res) => {
  res.send("Modul akuarium");
});

app.get("/wa", (req, res) => {
  $no = `whatsapp:+62${req.query.id}`;
  $body = req.query.msg;
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      body: $body,
      to: $no,
    })
    .then((message) => console.log(message.sid));
  res.send($no);
});

app.post("/sms", function (req, res) {
  id = req.body["id"];
  msg = req.body["msg"];
  sendWA(id, msg);
  console.log(msg);
  res.send("Ok");
});

function sendWA(id, msg) {
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      body: msg,
      to: "whatsapp:+62" + id,
    })
    .then((message) => console.log(message.sid));
}
app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}!`)
);

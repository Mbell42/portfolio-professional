//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");

const router = express.Router();

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();
// const nodemailer = require("nodemailer");
// const creds = require("./config/config.js");
const cors = require("cors");

// var sg = require('sendgrid')(process.env.SENDGRID_KEY);

//MIDDLEWARE
app.use("/", router);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const mailTo = process.env.SENDGRID_TO;
// const mailTo = creds.GMAIL_USER;
const mailFrom = process.env.SENDGRID_FROM;
// const mailFrom = creds.PASS;

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: mailTo,
  from: mailFrom,
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
};
sgMail
  .send(msg)
  .then(() => console.log(msg))
  .catch(console.log);

// const transporter = nodemailer.createTransport(transport)
  
// transporter.verify((error, success) => {
//   console.log(creds);
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email server for contact form is verified.");
//   }
// });

//   router.post('/send', (req, res, next) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const subject = req.body.subject;
//     const message = req.body.message;
//     const content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`;
//     console.log(content);

//     const mail = {
//       from: name,
//       to: creds.GMAIL_USER,  
//       subject: "New Test Message from Contact Form",
//       text: content
//     };

//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         console.log(err);
//         res.json({
//           status: "fail"
//         })
//       } else {
//         console.log(data);
//         res.json({
//         status: "success"
//         })
//       }
//     });
//   });
//End nodemailer section

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


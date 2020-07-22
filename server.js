//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();
const routes = require("./routes");
const PORT = process.env.PORT || 3002;
const nodemailer = require("nodemailer");
var sg = require('sendgrid')(process.env.SENDGRID_KEY);
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_KEY)

const cors = require("cors");
const { getMaxListeners } = require("process");
// const creds = require("./config/config.js");

// const { use } = require("./routes");

//MIDDLEWARE
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/", router);


//sendgrid section
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

// sendgrid transport - for Heroku
let transport = {
  host: process.env.SENDGRID_SMTP, //provider address
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_KEY  
  },
};
// end sendgrid section

//nodemailer section
// gmail transport - for Heroku
// let transport = {
//   host: process.env.GMAIL_SMTP, //provider address
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS  
//   },
// };


// gmail transport - for Local use
// let transport = {
//   host: creds.SMTP, //provider address
//   port: 587,
//   secure: false,
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   },
// };

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email server for contact form is set up and ready.");
  }
});

  router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`

    const mail = {
      from: name,
      to: process.env.GMAIL_USER,  
      subject: "New Test Message from Contact Form",
      text: content
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
        status: 'success'
        })
      }
    });
  });

//End nodemailer section



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.listen(3002);
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


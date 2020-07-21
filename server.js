//DEPENDENCIES
const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
const cors = require("cors");
const creds = require("./config/config.js");


const path = require("path");
const routes = require("./routes");
// const { USER } = require("./config/config.js")
// const { PASS } = require("./config/config.js")
const PORT = process.env.PORT || 3001;
const app = express();

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//nodemailer
const transport = {
  service: "gmail", //provider address
  port: 587,
  auth: {
    user: "matthewbell1030@gmail.com",
    pass: "Artemis8942"
  }
}

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
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: creds.USER,  
    subject: 'New Test Message from Contact Form',
    text: content
  }

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
  })
})

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
// app.listen(3002)
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

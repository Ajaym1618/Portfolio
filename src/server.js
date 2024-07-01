const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ajaysiri54@gmail.com",
      pass: "txwmajxsiosiwgnz",
    },
  });

  const mailOptions = {
    from: "ajaysiri54@gmail.com",
    to: "ajaym230302@gmail.com",
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

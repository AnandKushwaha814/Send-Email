const nodemailer = require("nodemailer");
const express = require("express");
const app = express();

app.get("/sendmail", (req, res) => {
  console.log("Sending mail...");

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "anandkushwaha1220@gmail.com",
      pass: "**** **** **** ****", // Make sure you use app-specific password if 2FA is enabled
    },
  });

  const mailOptions = {
    from: "anandkushwaha1220@gmail.com", // Sender address
    to: "rameshcse918@gmail.com", // List of receivers
    subject: "Reset Password", // Subject line
    text: "Click the link below to reset your password.", // Email body (plain text)
    // Optionally, you could add HTML:
    // html: "<p>Click the <a href='https://your-site.com/reset-password'>link</a> to reset your password.</p>"
  };

  // Send mail
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred: ", error);
      return res.status(500).send("Failed to send email");
    }
    console.log("Email sent: ", info.response);
    res.status(200).send("Email sent successfully");
  });
});

// Start the express server
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

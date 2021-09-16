const nodemailer = require("nodemailer");
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
require('dotenv').config();

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: 'varopn@gmail.com', 
      pass: process.env.MAIL_PASS, 
    },
  });

  let report = await transporter.sendMail({
    from: 'testingautotests@gmail.com',
    to: "mykyta.shaforostov@computools.com",
    subject: "Test ✔",
    text: "Testing process of sending html report",
    html: await readFile('./reporter/report.html', 'utf8')
  });

  console.log("Message sent: %s", report.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(report));
  await transporter.close()
}

main().catch(console.error);
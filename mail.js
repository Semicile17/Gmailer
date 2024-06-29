// index.js
const nodemailer = require('nodemailer');
const xlsx = require('xlsx');



// Function to send a single email
const sendSingleMail = (userEmail,appPassword,to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: userEmail,
          pass: appPassword,
        },
      })
  const mailOptions = {
    from: userEmail,
    to: to,
    subject: subject,
    text: text,
  };

  return transporter.sendMail(mailOptions);
};

// Function to send multiple emails
const sendMultipleMails = (userEmail,appPassword ,recipients, subject, text) => {
  const promises = recipients.map((recipient) => sendSingleMail( userEmail,appPassword ,recipient, subject, text));
  return Promise.all(promises);
};

// Function to send emails using an Excel sheet
const sendExcelMails = (filePath,userEmail,appPassword,subject, text) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  const promises = data.map((row) => sendSingleMail(userEmail,appPassword,row.email, subject, text));
  return Promise.all(promises);
};

module.exports = {
 
  sendSingleMail,
  sendMultipleMails,
  sendExcelMails,
};

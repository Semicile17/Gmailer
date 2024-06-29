// index.js
const nodemailer = require('nodemailer');
const xlsx = require('xlsx');



// Function to send a single email
const sendSingleMail = async (userEmail,appPassword,to, subject, text) => {
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

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return {
      status: 'success',
      message: 'Email sent successfully',
      info: info
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      status: 'error',
      message: 'Failed to send email',
      error: error
    };
  }
};

// Function to send multiple emails
const sendMultipleMails = async (userEmail, appPassword, recipients, subject, text) => {
  const promises = recipients.map(async (recipient) => {
    try {
      const result = await sendSingleMail(userEmail, appPassword, recipient, subject, text);
      return {
        recipient,
        status: result.status,
        message: result.message,
        info: result.info,
      };
    } catch (error) {
      return {
        recipient,
        status: 'error',
        message: 'Failed to send email',
        error,
      };
    }
  });

  return Promise.all(promises);
};

// Function to send emails using an Excel sheet
const sendExcelMails = async (filePath, userEmail, appPassword, subject, text) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  
  const promises = data.map(async (row) => {
    try {
      const result = await sendSingleMail(userEmail, appPassword, row.email, subject, text);
      return {
        recipient: row.email,
        status: result.status,
        message: result.message,
        info: result.info,
      };
    } catch (error) {
      return {
        recipient: row.email,
        status: 'error',
        message: 'Failed to send email',
        error,
      };
    }
  });

  return Promise.all(promises);
};

module.exports = {
 
  sendSingleMail,
  sendMultipleMails,
  sendExcelMails,
};

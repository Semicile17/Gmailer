// test/index.test.js
const emailLibrary = require('../mail');
const path = require('path');

const userEmail = 'your_gmail'
const appPassword = 'app_password'
test('sendSingleMail function', async () => {
  const result = await emailLibrary.sendSingleMail(userEmail,appPassword,'test@example.com', 'Test Subject', 'Test Body');
  expect(result.accepted).toContain('test@example.com');
});

test('sendMultipleMails function', async () => {
  const recipients = ['test1@example.com', 'test2@example.com'];
  const result = await emailLibrary.sendMultipleMails(userEmail,appPassword,recipients, 'Test Subject', 'Test Body');
  expect(result.length).toBe(2);
},15000);
test('sendExcelMails function', async () => {
    const filePath = path.join(__dirname, 'your_file_path');  // Replace with your actual file path
  
    try {
      const result = await emailLibrary.sendExcelMails(filePath,userEmail, appPassword, 'Test Subject', 'Test Body');
      // Assuming your file has 3 email addresses for the sake of this example
      expect(result.length).toBe(3);
      result.forEach((res) => {
        expect(res.accepted.length).toBeGreaterThan(0);  // Ensure each email was accepted by the server
      });
    } catch (error) {
      console.error('Error sending emails:', error);
      expect(error).toBeFalsy();
    }
  }, 30000);  // 30 seconds timeout for longer running tests

// Note: For the sendExcelMails function, you may need to create a sample Excel file and test it accordingly.

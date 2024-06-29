


# Gmailer

A Node.js library for sending emails via Gmail. Supports sending single emails, multiple emails, and emails from Excel sheets.

## Installation

You can install the library via npm. Make sure you have Node.js installed.

```bash
npm install gmailer_by_semicile
```

## Features

- **Gmail Setup**: Easily set up Gmail authentication for sending emails.
- **Send Single Email**: Send a single email to one recipient.
- **Send Multiple Emails**: Send emails to multiple recipients at once.
- **Send Emails from Excel**: Send personalized emails to recipients listed in an Excel file.

## Usage

```javascript
const emailLibrary = require('gmailer_by_semicile');

// Send a single email
emailLibrary.sendSingleMail('your-email@gmail.com', 'your-app-password', 'recipient@example.com', 'Test Subject', 'Test Body');

// Send multiple emails
const recipients = ['recipient1@example.com', 'recipient2@example.com'];
emailLibrary.sendMultipleMails('your-email@gmail.com', 'your-app-password', recipients, 'Test Subject', 'Test Body');

// Send emails from an Excel file
emailLibrary.sendExcelMails('your-email@gmail.com', 'your-app-password', 'path/to/your/excel/file.xlsx', 'Test Subject', 'Test Body');
```

## API

### `gmailSetup(userEmail, appPassword)`

Set up Gmail authentication with your email and app password.

- `userEmail` (string): Your Gmail email address.
- `appPassword` (string): Your Gmail app password.

### `sendSingleMail(userEmail, appPassword, to, subject, text)`

Send a single email using Gmail.

- `userEmail` (string): Your Gmail email address.
- `appPassword` (string): Your Gmail app password.
- `to` (string): Recipient's email address.
- `subject` (string): Email subject.
- `text` (string): Email body text.

### `sendMultipleMails(userEmail, appPassword, recipients, subject, text)`

Send multiple emails using Gmail.

- `userEmail` (string): Your Gmail email address.
- `appPassword` (string): Your Gmail app password.
- `recipients` (array of strings): Array of recipient email addresses.
- `subject` (string): Email subject.
- `text` (string): Email body text.

### `sendExcelMails(userEmail, appPassword, filePath, subject, text)`

Send emails to recipients listed in an Excel file using Gmail.

- `userEmail` (string): Your Gmail email address.
- `appPassword` (string): Your Gmail app password.
- `filePath` (string): Path to the Excel file containing recipient email addresses.
- `subject` (string): Email subject.
- `text` (string): Email body text.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Issues

Report any issues or feature requests on the [GitHub Issues](https://github.com/Semicile17/Gmailer/issues) page.

## Author

- Your Name
- GitHub: [github.com/Semicile17](https://github.com/Gmailer)
```

Replace placeholders (`your-library-name`, `your-email@gmail.com`, etc.) with actual values relevant to your library. This Markdown file structure provides a clear and organized way to present your library's features, usage examples, API documentation, licensing information, and guidelines for contributing and reporting issues. Adjust and customize it as per your specific library requirements and preferences.
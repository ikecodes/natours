const nodemailer = require('nodemailer');

const sendEmail = async options => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL__USER,
      pass: process.env.GMAIL__PASSWORD
    }
    ///ACTIVATE IN GMAIL "LAST SECRE APP OPTION"
  });

  const mailOptions = {
    from: 'Onuorah Emmanuel <onuorah0fficial@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

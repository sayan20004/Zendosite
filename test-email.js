import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'tm.zendo@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'bxsv bkcp qevc foaa',
  },
});

const testEmail = {
  from: process.env.EMAIL_USER || 'tm.zendo@gmail.com',
  to: 'tm.zendo@gmail.com',
  subject: 'Test Email from Zendo',
  html: '<h1>This is a test email</h1><p>If you see this, email is working!</p>',
};

console.log('Attempting to send test email...');
console.log('From:', process.env.EMAIL_USER || 'tm.zendo@gmail.com');
console.log('To: tm.zendo@gmail.com');

transporter.sendMail(testEmail, (error, info) => {
  if (error) {
    console.error('❌ Email failed:', error.message);
    process.exit(1);
  }
  console.log('✅ Email sent successfully!');
  console.log('Response:', info.response);
  process.exit(0);
});

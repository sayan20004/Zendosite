import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tm.zendo@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
            background: #f5f5f5;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            border: 4px solid #000;
            box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #FF9966 0%, #FFD60A 100%);
            padding: 40px 30px;
            text-align: center;
            border-bottom: 4px solid #000;
        }
        .header-logo {
            display: inline-block;
            width: 50px;
            height: 50px;
            background: #000;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 900;
            font-size: 28px;
            margin-bottom: 15px;
            transform: rotate(3deg);
        }
        .header h1 {
            font-size: 28px;
            font-weight: 900;
            color: #000;
            margin-top: 10px;
            letter-spacing: -1px;
        }
        .content {
            padding: 40px 30px;
        }
        .content h2 {
            font-size: 20px;
            font-weight: 900;
            color: #000;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .info-box {
            background: #F5F5F5;
            border: 3px solid #000;
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .info-item {
            margin-bottom: 15px;
        }
        .info-item:last-child {
            margin-bottom: 0;
        }
        .info-label {
            font-size: 12px;
            font-weight: 900;
            color: #FF4D00;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }
        .info-value {
            font-size: 16px;
            color: #000;
            word-break: break-all;
        }
        .message-section {
            margin-top: 30px;
        }
        .message-section h3 {
            font-size: 14px;
            font-weight: 900;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 15px;
        }
        .message-content {
            background: #FFFACD;
            border: 3px solid #FFD60A;
            border-radius: 16px;
            padding: 20px;
            line-height: 1.6;
            color: #000;
            font-size: 15px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .footer {
            background: #000;
            color: white;
            text-align: center;
            padding: 25px 30px;
            font-size: 12px;
            border-top: 4px solid #000;
        }
        .footer p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-logo">Z</div>
            <h1>New Message Received</h1>
        </div>
        <div class="content">
            <h2>Contact Form Submission</h2>
            <div class="info-box">
                <div class="info-item">
                    <div class="info-label">👤 From</div>
                    <div class="info-value">${name}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">📧 Email</div>
                    <div class="info-value">${email}</div>
                </div>
            </div>
            <div class="message-section">
                <h3>💬 Message</h3>
                <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
        <div class="footer">
            <p><strong>Zendo</strong> — Contact Form Notification</p>
            <p style="color: #FFD60A;">✨ Work With Confidence</p>
        </div>
    </div>
</body>
</html>`,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - Zendo ✨',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Received - Zendo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
            background: linear-gradient(135deg, #FFD60A 0%, #FF9966 100%);
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            border: 4px solid #000;
            box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }
        .header {
            background: #000;
            padding: 50px 30px;
            text-align: center;
            position: relative;
        }
        .header::before {
            content: '✨';
            position: absolute;
            font-size: 48px;
            top: 15px;
            left: 30px;
            opacity: 0.3;
        }
        .header::after {
            content: '✨';
            position: absolute;
            font-size: 48px;
            bottom: 15px;
            right: 30px;
            opacity: 0.3;
        }
        .header-logo {
            display: inline-block;
            width: 60px;
            height: 60px;
            background: #FFD60A;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            font-weight: 900;
            font-size: 36px;
            margin-bottom: 20px;
            transform: rotate(-3deg);
            border: 3px solid #000;
        }
        .header h1 {
            font-size: 32px;
            font-weight: 900;
            color: #FFD60A;
            margin-bottom: 10px;
            letter-spacing: -1px;
        }
        .header p {
            color: #C5B8F0;
            font-size: 14px;
            font-weight: 600;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 18px;
            color: #000;
            margin-bottom: 15px;
            line-height: 1.6;
        }
        .greeting strong {
            color: #FF9966;
            font-weight: 900;
        }
        .confirmation-box {
            background: linear-gradient(135deg, #FFD60A 0%, rgba(255, 214, 10, 0.1) 100%);
            border: 3px solid #FFD60A;
            border-radius: 16px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
        }
        .confirmation-box .check {
            font-size: 48px;
            margin-bottom: 10px;
        }
        .confirmation-box p {
            font-size: 16px;
            font-weight: 900;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .message-review {
            background: #F5F5F5;
            border: 3px solid #000;
            border-radius: 16px;
            padding: 20px;
            margin: 25px 0;
        }
        .message-review h3 {
            font-size: 12px;
            font-weight: 900;
            color: #FF4D00;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }
        .message-content {
            background: white;
            border: 2px dashed #000;
            border-radius: 12px;
            padding: 15px;
            color: #000;
            font-size: 14px;
            line-height: 1.6;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .cta-box {
            background: #C5B8F0;
            border: 3px solid #000;
            border-radius: 16px;
            padding: 20px;
            margin: 25px 0;
            text-align: center;
        }
        .cta-box p {
            color: #000;
            font-size: 14px;
            line-height: 1.6;
        }
        .highlight {
            color: #FF4D00;
            font-weight: 900;
        }
        .footer {
            background: #000;
            color: white;
            padding: 30px;
            text-align: center;
            border-top: 4px solid #000;
        }
        .footer-logo {
            font-size: 14px;
            font-weight: 900;
            color: #FFD60A;
            margin-bottom: 10px;
        }
        .footer p {
            font-size: 12px;
            margin: 5px 0;
            color: #C5B8F0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-logo">Z</div>
            <h1>Got It!</h1>
            <p>Your message is on the way</p>
        </div>
        <div class="content">
            <div class="greeting">
                Hi <strong>${name}</strong>,
                <br><br>
                Thank you for reaching out to us! We've received your message and really appreciate you taking the time to get in touch.
            </div>
            <div class="confirmation-box">
                <div class="check">✓</div>
                <p>Message Received Successfully</p>
            </div>
            <div class="message-review">
                <h3>📝 Your Message</h3>
                <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="cta-box">
                <p>We're here to help! Our team will review your message and get back to you as soon as possible. In the meantime, feel free to explore more about <span class="highlight">Zendo</span>.</p>
            </div>
            <p style="font-size: 14px; color: #666; line-height: 1.6;">
                If you have any urgent questions, you can also reply directly to this email. We're always here to listen! 🎉
            </p>
        </div>
        <div class="footer">
            <div class="footer-logo">ZENDO</div>
            <p>Work With Confidence</p>
            <p style="margin-top: 10px;">© 2024 Zendo. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

# EmailJS Templates - Zendo Brand

## Admin Notification Email Template

### Template ID: `template_admin_notification`
### Subject: `New Contact Form Submission from {{from_name}}`

### HTML Content:

```html
<!DOCTYPE html>
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
        .accent-text {
            color: #FF9966;
            font-weight: 900;
        }
        @media (max-width: 600px) {
            .container {
                border-radius: 16px;
            }
            .header {
                padding: 30px 20px;
            }
            .content {
                padding: 30px 20px;
            }
            .header h1 {
                font-size: 24px;
            }
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
                    <div class="info-value">{{from_name}}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">📧 Email</div>
                    <div class="info-value">{{from_email}}</div>
                </div>
            </div>

            <div class="message-section">
                <h3>💬 Message</h3>
                <div class="message-content">{{message}}</div>
            </div>
        </div>

        <div class="footer">
            <p><strong>Zendo</strong> — Contact Form Notification</p>
            <p style="color: #FFD60A;">✨ Powered by EmailJS</p>
        </div>
    </div>
</body>
</html>
```

---

## User Confirmation Email Template

### Template ID: `template_user_confirmation`
### Subject: `We received your message - Zendo ✨`

### HTML Content:

```html
<!DOCTYPE html>
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
        .social-links {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid #333;
        }
        @media (max-width: 600px) {
            .container {
                border-radius: 16px;
            }
            .header {
                padding: 35px 20px;
            }
            .content {
                padding: 30px 20px;
            }
            .header h1 {
                font-size: 26px;
            }
            .greeting {
                font-size: 16px;
            }
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
                Hi <strong>{{user_name}}</strong>,
                <br><br>
                Thank you for reaching out to us! We've received your message and really appreciate you taking the time to get in touch.
            </div>

            <div class="confirmation-box">
                <div class="check">✓</div>
                <p>Message Received Successfully</p>
            </div>

            <div class="message-review">
                <h3>📝 Your Message</h3>
                <div class="message-content">{{user_message}}</div>
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
            <div class="social-links">
                <p>© 2024 Zendo. All rights reserved.</p>
                <p>Made with ❤️ for productivity</p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## How to Use These Templates in EmailJS

1. **Log in to EmailJS Dashboard**
2. **Go to Email Templates**
3. **For Admin Template:**
   - Click "Create New Template"
   - Name: `template_admin_notification`
   - Subject: `New Contact Form Submission from {{from_name}}`
   - In the HTML editor, paste the **Admin Notification HTML** above
   - Save the template and copy the Template ID

4. **For User Template:**
   - Click "Create New Template"
   - Name: `template_user_confirmation`
   - Subject: `We received your message - Zendo ✨`
   - In the HTML editor, paste the **User Confirmation HTML** above
   - Save the template and copy the Template ID

5. **Update your `.env` file:**
   ```
   VITE_EMAILJS_TEMPLATE_ID_ADMIN=template_admin_notification
   VITE_EMAILJS_TEMPLATE_ID_USER=template_user_confirmation
   ```

## Features of These Templates

✅ **Brand Aligned:** Uses Zendo's color scheme (Yellow, Orange, Purple)
✅ **Bold Typography:** Heavy fonts matching the site's aesthetic
✅ **Responsive Design:** Looks great on mobile and desktop
✅ **Playful Elements:** Emojis and rounded borders like the site
✅ **Professional:** Clear hierarchy and easy to read
✅ **Dark Mode Safe:** Works in light and dark email clients

## Template Variables

**Admin Template Variables:**
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{message}}` - User's message

**User Template Variables:**
- `{{user_name}}` - User's name
- `{{user_message}}` - User's message

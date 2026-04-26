# Zendo Contact Form - EmailJS Setup Guide

## Overview
The contact form is now powered by **EmailJS** - a simple, client-side email service that requires **NO backend server**!

When a user submits the form:
1. ✅ **Admin receives** the user's message at `tm.zendo@gmail.com`
2. ✅ **User receives** a confirmation email automatically
3. ✅ Everything happens in the browser - no server needed!

## Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Connect Gmail
1. Go to **Email Services** in EmailJS dashboard
2. Click **Add New Service**
3. Select **Gmail**
4. Follow the prompts to connect your Gmail account (tm.zendo@gmail.com)
5. Copy your **Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Templates

#### Template 1: Admin Notification
1. Go to **Email Templates** → **Create New Template**
2. **Name:** `admin_notification`
3. **Subject:** `New Contact Form Submission from {{from_name}}`
4. **Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Message:
{{message}}
```
5. Save and copy the **Template ID** (looks like: `template_xxxxx`)

#### Template 2: User Confirmation
1. Create another template
2. **Name:** `user_confirmation`
3. **Subject:** `We received your message - Zendo`
4. **Content:**
```
Hi {{user_name}},

Thank you for reaching out! We have received your message and will get back to you as soon as possible.

Your Message:
{{user_message}}

Best regards,
Zendo Team
```
5. Save and copy the **Template ID**

### Step 4: Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `xxxxx`)

### Step 5: Update .env File
Update `.env` in your project with the credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID_ADMIN=admin_notification
VITE_EMAILJS_TEMPLATE_ID_USER=user_confirmation
```

**Example:**
```env
VITE_EMAILJS_PUBLIC_KEY=xyz123abc456def789
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID_ADMIN=template_admin_001
VITE_EMAILJS_TEMPLATE_ID_USER=template_user_001
```

### Step 6: Done! ✨
Run your dev server:
```bash
npm run dev
```

That's it! The contact form will now work with EmailJS.

## How It Works

1. **User fills form** on `/about` page
2. **Clicks "Send Message"**
3. **EmailJS sends 2 emails:**
   - One to `tm.zendo@gmail.com` with the user's message
   - One to the user's email with a confirmation
4. **User sees success message**

## Testing

1. Navigate to `http://localhost:5000/about`
2. Fill in the contact form
3. Click "Send Message"
4. Check your email inbox for:
   - ✅ Confirmation email to your address
   - ✅ Notification email to tm.zendo@gmail.com

## Troubleshooting

### Issue: "Failed to send message"
- **Solution:** Check that all environment variables are correct in `.env`
- Make sure you updated `.env` and **restarted your dev server**

### Issue: Emails not arriving
- **Solution:** Check Gmail spam folder
- Verify the Gmail account is connected in EmailJS dashboard
- Make sure email address in form is correct

### Issue: Template variables not showing
- **Solution:** Make sure template variable names match exactly:
  - Admin template: `{{from_name}}`, `{{from_email}}`, `{{message}}`
  - User template: `{{user_name}}`, `{{user_message}}`

## Environment Variables Reference

| Variable | From EmailJS | Example |
|----------|------------|---------|
| `VITE_EMAILJS_PUBLIC_KEY` | Account → API Keys | `xyz123abc456def789` |
| `VITE_EMAILJS_SERVICE_ID` | Email Services | `service_abc123xyz` |
| `VITE_EMAILJS_TEMPLATE_ID_ADMIN` | Email Templates | `template_admin_001` |
| `VITE_EMAILJS_TEMPLATE_ID_USER` | Email Templates | `template_user_001` |

## Benefits of EmailJS

✅ **No server** - Everything runs in the browser
✅ **Free tier** - 200 emails/month free
✅ **No deployment** - Just update `.env`
✅ **Secure** - Private keys never exposed
✅ **Easy templates** - No coding needed
✅ **Multiple languages** - Supports many email providers

## Security Notes

- `.env` is already in `.gitignore` - your keys are safe
- Never commit `.env` to version control
- Only the Public Key is exposed in the frontend (this is safe)
- Private operations use Service IDs on EmailJS servers

## Next Steps

- Deploy your site to Vercel, Netlify, etc.
- The contact form will work automatically!
- EmailJS free tier is enough for most sites
- Upgrade if you need more than 200 emails/month


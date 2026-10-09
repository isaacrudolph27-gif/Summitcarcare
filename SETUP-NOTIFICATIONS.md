# Turn on booking emails and phone alerts

The website code is already connected. It just needs your Gmail "app password" so it is
allowed to send email as summitcarcare26@gmail.com. Takes about 5 minutes.

## What happens after setup

When someone books on your site:

1. **You get an email** at summitcarcare26@gmail.com with: who booked, their phone and email,
   the package, date, time, vehicle and notes. Hit Reply and it goes straight to the customer.
2. **The customer gets a confirmation email** with their date, time, a thank-you, and
   "text or call (406) 407-1405 to cancel or change."
3. **Your phone buzzes** if you have the Gmail app installed (see Step 3). Free.

The Contact form on the website also emails you.

---

## Step 1: Make a Gmail app password

Sign in to **summitcarcare26@gmail.com**, then:

1. Go to https://myaccount.google.com/security
2. Turn on **2-Step Verification** (required before app passwords are available)
3. Go to https://myaccount.google.com/apppasswords
4. Name it `Summit website` and click **Create**
5. Copy the **16-letter password** it shows you (you only see it once)

## Step 2: Add it to Vercel

1. Vercel dashboard, open your project, **Settings**, **Environment Variables**
2. Add these three (Environment: leave all checked):

| Name | Value |
|------|-------|
| `GMAIL_USER` | `summitcarcare26@gmail.com` |
| `GMAIL_APP_PASSWORD` | the 16-letter password (no spaces) |
| `NOTIFY_EMAIL` | `summitcarcare26@gmail.com` |

3. Go to **Deployments**, click the latest one, **Redeploy**.
   Variables only take effect on a new deployment, so don't skip this.

## Step 3: Get alerts on your phone (free)

1. Install the **Gmail app** and sign in to summitcarcare26@gmail.com
2. Gmail app, Settings, your account, Notifications, set to **All**
3. Optional: make a filter for subject `New booking` and give it a loud notification sound

## Step 4: Test it

Go to your live site, book a fake appointment using your own personal email, and check that:
- the alert lands in summitcarcare26@gmail.com
- the confirmation lands in your personal email

If the booking page says it can't send, the env vars are missing or wrong. Check Step 2
and make sure you redeployed. Vercel, your project, **Logs** shows the exact error.

---

## Optional: real text messages (costs money)

Email alerts are free and reach your phone through Gmail. If you also want an actual SMS to
(406) 407-1405 for every booking, the code supports it through **Twilio**, but it is a paid
service with a monthly number fee plus a small cost per text. In the US, Twilio also requires
a registration step before texts will deliver, which can take days. If you set it up, add:

| Name | Value |
|------|-------|
| `OWNER_PHONE` | `+14064071405` |
| `TWILIO_ACCOUNT_SID` | from your Twilio dashboard |
| `TWILIO_AUTH_TOKEN` | from your Twilio dashboard |
| `TWILIO_FROM_NUMBER` | your Twilio number, like `+14065550123` |

If these are blank, the site simply skips texting. Nothing breaks.

---

## Know the limits

- **Bookings are not saved anywhere except your email.** The site does not yet remember which
  time slots are taken, so two people could pick the same slot. If that happens, call or
  text one of them to move. Saving bookings and hiding taken slots needs a database
  (Supabase is free), and I can add that next.
- **Gmail allows about 500 emails per day.** More than enough for this.
- **No online payment.** The fake card form was removed. Customers settle up with you directly.

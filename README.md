# 🚗 Summit Car Care — Auto Detailing by Isaac

A booking website for **Summit Car Care**, owned and run by Isaac, a 17-year-old auto detailer (the only employee) from Whitefish High School serving the Flathead Valley.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

---

## 🚀 Deploy to Vercel (Free)

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. **Add New → Project** and import this repo
4. Click **Deploy**

Your site goes live at `your-project.vercel.app` in ~2 minutes.

---

## ✨ Features

- 🏠 **7 pages** — Home, Services, Booking, Reviews, About, Contact, Admin Dashboard
- 📅 **4-step booking wizard** — Service → Date → Customer Info → Payment
- 💰 **Four clean service tiers** — Basic Outside/Inside ($35/$40), Advanced Outside/Inside ($75/$85)
- 🎨 **Dark luxury theme** with Framer Motion animations
- 📱 **Fully responsive**
- ⭐ **Customer reviews** with star ratings
- 📊 **Admin dashboard** with charts

---

## 🏃 Run Locally

You need [Node.js](https://nodejs.org) (LTS version).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📧 Booking emails

Bookings and the contact form email the owner, and customers get a confirmation. This needs a Gmail app password. See **SETUP-NOTIFICATIONS.md**.

---

## ✏️ Customize It

**All content lives in one file:** `src/lib/data.ts`

Edit it to change:
- Services & pricing
- Customer reviews
- Sample dashboard data

**Contact info (phone, email, Instagram):** `src/lib/business.ts`

**About Isaac:** `src/app/(site)/about/page.tsx`

**Colors:** `tailwind.config.ts` — change the `summit` palette.

**Hero text:** `src/components/sections/HeroSection.tsx`

---

## 📜 Scripts

```bash
npm run dev      # Dev server
npm run build    # Production build
npm run start    # Run production
npm run lint     # Lint check
```

---

Built by Isaac · Whitefish, Montana

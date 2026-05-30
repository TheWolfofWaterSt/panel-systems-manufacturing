# Panel Systems Manufacturing — Room Dividers

Modern rebuild of [roomdividers.org](https://roomdividers.org) for Panel Systems Manufacturing, Inc. — a Wisconsin-based direct manufacturer of commercial room dividers, operable partitions, modular wall systems, and folding dividers.

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` — Next.js App Router pages (24 routes)
- `components/` — Reusable UI, layout, sections, forms, and page templates
- `content/` — Typed content modules (products, testimonials, FAQs)
- `lib/` — Site config, navigation, SEO helpers

## Features

- Conversion-optimized layout with sticky header, quote CTAs, and click-to-call
- 50–75% savings messaging throughout
- Product category hubs and detail pages with comparison tables
- Quote and contact forms with honeypot spam protection
- SEO metadata, JSON-LD schema, sitemap, and 301 redirects from legacy URLs

## Deploy on Vercel (recommended)

This is a Next.js app and is designed to run on [Vercel](https://vercel.com) (Hobby plan is free for personal projects).

1. Import the GitHub repo in Vercel and connect `main`.
2. Use the default settings (Framework: **Next.js**, Build: `next build`, Output: default).
3. Deploy — Vercel sets `VERCEL_URL` automatically so sitemap and metadata use your live URL.

**Do not use GitHub Pages** for this repo — it only serves static files and cannot run Next.js.

Optional: add `NEXT_PUBLIC_SITE_URL` in Vercel environment variables if you attach a custom domain.

Form submissions on Vercel are logged in the project’s **Functions** logs (email delivery can be wired up later).

## Portfolio Note

This is a portfolio demonstration project. Form submissions are logged to the console. Wire up email delivery via environment variables for production use.

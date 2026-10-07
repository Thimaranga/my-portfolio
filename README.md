# Thushal Himaranga — Portfolio

A Next.js (App Router) portfolio built from my CV, styled as a systems/monitoring
console — a nod to the Docker/Jenkins/Grafana/Prometheus stack, I actually work in,
rather than a generic template.

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend:** Node.js via a Next.js API route (`app/api/contact/route.ts`) handling
  the contact form. This is a real Node server endpoint — swap the `TODO` inside it
  for Nodemailer/Resend, or point it at a Spring Boot service later, without touching
  the frontend.

We'll need Node.js 18+ installed. Then, from this folder:

```bash
npm install
npm run dev
```

Open **http://localhost:3000** — that's it.

## Editing content

Everything text-based (profile, experience, projects, skills, education, references)
lives in one place: **`lib/data.ts`**. Edit that file and every section updates
automatically — no need to touch the components.

## Structure

```
app/
  layout.tsx          Fonts + metadata
  page.tsx             Assembles all sections
  api/contact/route.ts Node backend endpoint for the contact form
components/
  Nav, Hero, StatusBar, Experience, Projects, Skills, Education, Contact, Footer
lib/
  data.ts              Single source of truth for all my CV content
``

## Contact form → n8n

The contact form posts to `app/api/contact/route.ts`, which validates the message, drops spam
(hidden honeypot field) and forwards it server-side to an n8n workflow. The n8n workflow triages the
message with AI (job opportunity, freelance project, question, spam), saves it to Google Sheets,
sends the sender an acknowledgement email and alerts me on Telegram.

Set these in Vercel → Settings → Environment Variables (see `.env.example`):

| Name | Value |
|---|---|
| `N8N_CONTACT_WEBHOOK_URL` | Production URL of the n8n webhook, ending in `/webhook/portfolio-contact` |
| `N8N_CONTACT_SECRET` | Same value as the n8n Header Auth credential (header name `X-Portfolio-Secret`) |

Without them, `npm run dev` just logs messages to the console, and production returns an error
so the form tells visitors to email directly.

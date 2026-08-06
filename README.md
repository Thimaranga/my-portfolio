# Thushal Himaranga — Portfolio

A Next.js (App Router) portfolio built from my CV, styled as a systems/monitoring
console — a nod to the Docker/Jenkins/Grafana/Prometheus stack you actually work in,
rather than a generic template.

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend:** Node.js via a Next.js API route (`app/api/contact/route.ts`) handling
  the contact form. This is a real Node server endpoint — swap the `TODO` inside it
  for Nodemailer/Resend, or point it at a Spring Boot service later, without touching
  the frontend.

You'll need Node.js 18+ installed. Then, from this folder:

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

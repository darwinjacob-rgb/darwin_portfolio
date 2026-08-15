# Darwin Jacob.N — Portfolio

A premium, futuristic personal portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
```

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo in Vercel — it auto-detects Vite, no config needed.
3. Build command: `npm run build`, output directory: `dist`.

## Editing content

All personal content lives in `src/data/`:

- `profile.js` — name, title, bio, social links, resume path, services, interests
- `skills.js` — tech stack categories
- `projects.js` — featured + secondary project details, GitHub/demo links
- `experience.js` — timeline entries, milestones, certification

### Placeholders to replace

Search the project for these and swap in your real values:

- `YOUR_GITHUB_LINK`, `YOUR_LINKEDIN_LINK`, `YOUR_INSTAGRAM_LINK`, `YOUR_YOUTUBE_LINK`, `YOUR_LEETCODE_LINK` — in `src/data/profile.js`
- `YOUR_LIVE_DEMO_LINK`, `YOUR_PROJECT_GITHUB_LINK`, `YOUR_PROJECT_LIVE_DEMO_LINK` — in `src/data/projects.js`
- `YOUR_CERTIFICATE_LINK`, `YOUR_CREDENTIAL_ID` — in `src/data/experience.js`
- `/resume.pdf` — replace `public/resume.pdf` with your actual resume (same filename, or update `profile.resume`)
- Experience timeline entries in `src/data/experience.js` currently hold placeholder text — replace with real hackathon/workshop/event/leadership details as they're confirmed

### Contact form

The contact form in `src/components/Contact.jsx` is visually functional but not wired to a backend. To make it send real messages, connect it to a service like Formspree, EmailJS, or a custom API route, inside the `handleSubmit` function.

## Structure

```
src/
  components/   — all UI sections (Navbar, Hero, About, Skills, Projects, etc.)
  data/         — editable content (profile, skills, projects, experience)
  index.css     — design tokens (colors, fonts) + global styles
  App.jsx       — page composition
```

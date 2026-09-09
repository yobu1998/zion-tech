# Zion Tech — Business Website

A React + Vite one-page marketing site for Zion Tech, focused on business websites, automation and custom software.

## Local development

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Before launch

Update the placeholder contact details in `src/App.jsx`:

- `CONTACT_EMAIL in src/App.jsx`
- `WHATSAPP_NUMBER in src/App.jsx`

Replace them with your real business email and WhatsApp number.

## Deploy on Vercel

1. Push this project to GitHub.
2. Sign in to Vercel.
3. Add a new project and import the GitHub repository.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

Vercel will provide a `.vercel.app` address. Add your custom domain from the Vercel project settings when ready.

## Contact form

The current form uses a `mailto:` action so it can work without a backend. For a production lead system, connect it later to a form/email service or your own API. The WhatsApp link is also a direct external link.

## Important

The portfolio cards are explicitly labelled as concept projects. Replace them with real client case studies as you build your client base.

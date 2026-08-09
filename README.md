# yemibanwo.dev

Personal portfolio for **Yemi Banwo**, a Python backend engineer building APIs, automation, data systems, and AI-powered products.

Live site: https://yemibanwo.dev

## What this site covers

- Backend engineering experience and current focus
- Technical stack across Python, Django, FastAPI, databases, queues, cloud, and AI tooling
- Selected projects including cue for Windows, FuelSpotter, Bookie, and JobScout
- Contact form and direct links for collaboration
- Structured SEO metadata, Person JSON-LD, sitemap, and branded social previews

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- GitHub Pages
- Formspree

## Local development

Requirements:

- Node.js 20+
- npm

```bash
git clone https://github.com/papycoda/hello-world-persona-26.git
cd hello-world-persona-26
npm ci
npm run dev
```

The local Vite server will print the development URL in the terminal.

## Build

```bash
npm run build
```

The production bundle is written to `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The site is hosted on GitHub Pages with the custom domain `yemibanwo.dev`.

Pushes to `main` trigger the GitHub Actions deployment workflow in:

```text
.github/workflows/pages.yml
```

The workflow:

1. installs dependencies with `npm ci`;
2. builds the Vite application;
3. publishes the contents of `dist/` to the `gh-pages` branch;
4. preserves the custom domain through `public/CNAME`.

GitHub Pages serves the `gh-pages` branch over HTTPS.

## Project structure

```text
src/
├── components/
│   ├── SiteHeader.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── SiteFooter.tsx
├── pages/
│   └── Index.tsx
├── App.tsx
└── main.tsx

public/
├── CNAME
├── og-image.png
├── robots.txt
└── sitemap.xml
```

## Featured work

- [cue for Windows](https://github.com/papycoda/cue-windows) — Windows port and extension of the open-source [Cue](https://github.com/Blueturboguy07/cue) overlay
- [FuelSpotter API](https://github.com/papycoda/SpotterDjango) — Django REST route and fuel-cost optimization API
- [Bookie](https://github.com/papycoda/booking-scheduler) — booking and payment platform for small businesses
- [JobScout](https://github.com/papycoda/jobscout) — resume-driven automated job-search assistant

## Contact

- Website: https://yemibanwo.dev
- GitHub: https://github.com/papycoda
- Email: opeyemi655@gmail.com

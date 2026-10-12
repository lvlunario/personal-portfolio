# Leonardo Lunario — Engineering Portfolio

Professional portfolio focused on systems integration, verification and validation, engineering automation, and technical project work.

## Stack and development

React 19, TypeScript, Vite 7, and custom responsive CSS. Existing dependencies are retained to avoid an unrelated lockfile migration.

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run preview
```

## Content

- `src/content.ts`: career history and selected personal projects.
- `src/App.tsx`: portfolio, resume, navigation, and contact UI.
- `src/index.css`: responsive layout, focus states, reduced-motion support, and print styles.
- `/resume`: a printable professional summary; original attached resume documents are not published.
- `vercel.json`: Vite build settings, resume route handling, and redirect from the retired placeholder blog.

Professional experience and independent projects are explicitly separated. The flight-data tool and grid simulator are prototypes, not employer systems. No performance percentages, client testimonials, or unsupported production-readiness claims are used. AI-assisted personal development is disclosed in the About section.

Contact uses a mailto link, LinkedIn, GitHub, and clipboard copy; there is no form backend or visitor-data collection. Fonts load from Google Fonts with system fallbacks.

## Deployment

Repository: `lvlunario/personal-portfolio`, production branch `main`.
Existing Vercel integration: `leonardo-lunarios-projects / leonardolunario` (confirmed via prior GitHub commit status).

Vercel should build the production branch automatically. Verify the exact commit's Vercel status after each push and check the live homepage and `/resume` directly.

## Review checklist

- Production build and lint succeed.
- Desktop and mobile layouts have no horizontal overflow.
- Navigation, project scope disclosures, printable resume, and contact links work.
- `/resume` can be opened directly and printed.
- Personal projects remain accurately labeled and employer information remains high-level.

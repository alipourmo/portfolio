# Nahid Abdollahi, portfolio

Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion, Lenis, OGL shader backdrop.
Design based on the [rbp-portfolio](https://github.com/DavidHDev/rbp-portfolio) template by React Bits Pro.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Fonts (Geist, Geist Mono, Fraunces) are fetched from Google Fonts at build time, so the first build needs internet access.

## Where to edit things

| What | Where |
| --- | --- |
| All copy: bio, experience, projects, research, skills, education, contact details | `lib/content.ts` |
| Your photo | drop a file in `public/` and set `profile.portrait` in `lib/content.ts` (optional `hoverSrc` enables the morph effect). Until then the hero shows an "NA" monogram card. |
| Project illustrations | `components/projects/project-visuals.tsx` |
| Stack chips on About | `CHIPS` in `components/about/stack.tsx` |
| Site URL, SEO keywords | `lib/metadata.ts` |
| Colors / theme tokens | `app/globals.css` |
| Favicon, OG image, PWA icons | `app/icon.svg`, `app/apple-icon.png`, `public/og-image.png`, `public/icon-*.png` |

Routes: `/` (home), `/projects`, `/research`, `/about`.

# Gabriel Mota — Online Resume

Personal site for **Gabriel Mota**, a frontend software engineer based in Brasília, Brazil. It is built as a public resume: selected work, experience, stack, and contact in one page, written for international recruiters and remote teams.

Open to remote roles and global relocation. Comfortable working in English.

## What this project shows

The site is intentionally small. The interesting part is how it is structured.

- **Content is data.** Copy, jobs, and metadata live in `content/profile.ts`. The UI only renders it. Updating the resume does not mean hunting strings across components.
- **Server-first Next.js.** App Router, React Server Components by default. The only client island is a scroll reveal used for motion.
- **Clear boundaries.** `app/` owns routing, metadata, and SEO. `components/` owns presentation. `lib/` owns shared utilities. The layout is the shell (header/footer); the page composes sections.
- **Production details that recruiters actually check.** Typed models, semantic HTML, Open Graph image, JSON-LD `Person` schema, sitemap, and `robots.txt`.

Stack: **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**.

## Run locally

```bash
yarn
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
yarn lint
yarn build
```

## Contact

- Email: [gabrielmota287@gmail.com](mailto:gabrielmota287@gmail.com)
- LinkedIn: [linkedin.com/in/gabriel-mota-033528206](https://www.linkedin.com/in/gabriel-mota-033528206)
- GitHub: [github.com/GabrielMTF](https://github.com/GabrielMTF)

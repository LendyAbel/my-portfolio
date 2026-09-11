# Lendy Sánchez — Portfolio

Personal portfolio site built with React, TypeScript and Vite. Single-page layout with a dedicated route per project (`/projects/:slug`), animated with Framer Motion and styled with Tailwind CSS v4.

**Live demo:** https://lendyabel.netlify.app/

## Sections

- **Hero** — intro, tech stack badges, and CTAs to jump to Projects/Contact
- **About me** — short bio and quick stats
- **Skills** — skill list with proficiency levels, data-driven from `skills.json`
- **Projects** — project cards linking to a full detail page per project
- **Contact** — direct mailto CTA
- **Footer**

Each project also gets its own page (`/projects/:slug`) rendering the full description, feature list and technical highlights defined in `projects.json`.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) for project detail routes
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Radix UI](https://www.radix-ui.com/) primitives + [class-variance-authority](https://cva.style/) for the UI components (`button`, `badge`, `card`)
- [Lucide React](https://lucide.dev/) icons
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)

## Project structure

```
src/
├── components/
│   ├── seccions/       # Page sections: Navigation, Hero, AboutMe, Skills, Projects, Contact, Footer
│   ├── projects/        # ProjectPage — individual project detail route
│   └── ui/               # Reusable UI primitives: button, badge, card
├── data/
│   ├── projects.json    # Project content (title, description, tags, features, highlights, links)
│   └── skills.json      # Skills list with proficiency levels
├── types/                # Shared TypeScript types
├── App.tsx               # Home page composition
└── main.tsx              # Router setup
```

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check and build for production
npm run build

# preview the production build
npm run preview

# lint
npm run lint
```

## Editing content

Most content is data-driven, so no component edits are needed for routine updates:

- **Projects** — add/edit entries in [`src/data/projects.json`](src/data/projects.json). Each project supports `title`, `subtitle`, `description`, `longDescription`, `image`, `tags`, `github`, `live`, `features` and `highlights`.
- **Skills** — edit [`src/data/skills.json`](src/data/skills.json) (`name`, `level`, `icon` — icon must match a key mapped in [`App.tsx`](src/App.tsx)).
- **Contact email / bio / stats** — edit directly in [`src/components/seccions/Contact.tsx`](src/components/seccions/Contact.tsx) and [`AboutMe.tsx`](src/components/seccions/AboutMe.tsx).

## License

Personal project — feel free to use it as a reference for your own portfolio.

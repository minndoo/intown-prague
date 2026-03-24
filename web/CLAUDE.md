# Web

Next.js frontend for the InTown project, consuming content from Sanity.

## Stack

- Next.js 16 (App Router)
- React 19 with React Compiler enabled
- TypeScript 5
- Tailwind CSS 4
- next-sanity 12

## Sanity Connection

- Project ID: `hqky80t4`
- Dataset: `production`
- Client: `lib/sanity/client.ts`
- Queries: `lib/sanity/queries.ts`

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — lint

## Structure

- `src/app/` — App Router pages and layouts
- `lib/sanity/` — Sanity client and GROQ queries
- Path alias: `@/*` → `./src/*`

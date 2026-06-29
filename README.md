# ProofChain

ProofChain is a B2B SaaS web app for AI-assisted shipment verification and vendor dispute resolution. It includes a marketing site, authentication pages, operational dashboard, purchase orders, shipments, warehouse inspections, AI analysis, disputes, vendors, reports, analytics, notifications, employees, settings, API routes, and a production-oriented Prisma schema.

## Run locally

1. Install dependencies

   `npm install`

2. Create environment values

   Copy `.env.example` to `.env.local` and fill in real service credentials when connecting infrastructure.

3. Start the app

   `npm run dev`

4. Open `http://localhost:3000`

## Deployment on Vercel

1. Push this repository to GitHub.
2. Create a Vercel project and import the repository.
3. Add the environment variables from `.env.example` in Vercel Project Settings.
4. Provision PostgreSQL through AWS RDS, Neon, Supabase, or Vercel Postgres and set `DATABASE_URL`.
5. Configure AWS S3 credentials and bucket values for document/photo storage.
6. Add `OPENAI_API_KEY` for AI analysis/report generation.
7. Deploy from Vercel. The build command is `npm run build` and the output is managed by Next.js.

## Production integration notes

The current app uses shared demo data so every page and API works without external services. The Prisma schema in `prisma/schema.prisma` is ready for the real database layer. Replace demo-data reads in services/routes with Prisma queries as soon as `DATABASE_URL` is configured.

Recommended next infrastructure steps:

- Run `npx prisma generate` after installing Prisma dependencies.
- Run `npx prisma migrate dev --name init` locally, or `npx prisma migrate deploy` in production.
- Store uploads in S3 using the existing `lib/aws.ts` and `lib/upload.ts` integration files.
- Connect AI analysis routes to OpenAI with structured JSON output for findings, confidence, dispute email drafts, and report summaries.

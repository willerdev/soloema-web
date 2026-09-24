# Soloema (frontend)

Next.js investor UI for **Soloema**. Same backend as today (`solo-api`): same accounts, wallet, Smart Invest, JWT.

This repo is **frontend only**. Do not copy Nest or Prisma here.

## How it talks to the API

The browser calls same-origin `/api/v1`. Next proxies to `API_URL` (`src/app/api/v1/[...path]/route.ts`). JWT stays in `localStorage` (`trp-auth`).

## Local

Need **solo-api** on port 4001 from the traders monorepo:

```bash
cd /path/to/discover/backend
APP_VARIANT=solo npm run start:solo:dev
```

Then in this repo:

```bash
cp .env.example .env.local
npm install
npm run dev
```

- Site: http://localhost:3001
- Proxy default: `http://localhost:4001`

## Render (web service only)

Create a Web Service from **this** repo (not `willerdev/traders`):

| Setting | Value |
|---------|--------|
| Name | `soloema-web` |
| Root | repo root |
| Build | `npm install && npm run build` |
| Start | `npm start` |

Env:

| Key | Value |
|-----|--------|
| `API_URL` | Existing **solo-api** origin, **no** `/api/v1` |
| `NEXT_PUBLIC_API_URL` | Same origin + `/api/v1` |

Do **not** set `API_URL` to this frontend hostname (proxy loop / HTTP 508).

On **solo-api**, add this site’s origin to `FRONTEND_URL` and/or `SOLO_FRONTEND_URL` (comma-separated). Set `PUBLIC_APP_URL` to this origin if it is the live Soloema site.

See [RENDER.md](RENDER.md).

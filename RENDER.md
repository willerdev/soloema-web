# Host Soloema frontend on Render

`render login` was expired in the machine that prepared this repo, so create the service in the dashboard (or run `render login` then apply the Blueprint).

## New Web Service

1. [Render New Web Service](https://dashboard.render.com/select-repo?type=web) → GitHub **`willerdev/soloema-web`**.
2. Name: `soloema-web`.
3. Root directory: **empty** (this repo is already the Next app).
4. Build: `npm install && npm run build`
5. Start: `npm start`
6. Instance: same size as the old solo-web.

## Environment (this service)

Copy the **solo-api** public URL from Render (backend). Example shape: `https://solo-api-xxxx.onrender.com`.

- `NODE_ENV` = `production`
- `API_URL` = that origin **without** `/api/v1`
- `NEXT_PUBLIC_API_URL` = that origin **with** `/api/v1`

If you still have an old **solo-web** / **soloEma-1** service, copy any `NEXT_PUBLIC_*` keys from there.

## Environment (existing solo-api)

Do not create a second API.

- `SOLO_FRONTEND_URL` = `https://<this-soloema-web>.onrender.com` (comma-append `https://soloema-1.onrender.com` if that site stays up)
- `FRONTEND_URL` / `PUBLIC_APP_URL` = the new origin if this is the site users should open from emails

Keep `APP_VARIANT=solo`, `DATABASE_URL`, and `JWT_SECRET` unchanged.

## After first deploy

Open `https://<soloema-web>.onrender.com/login`, sign in with an existing Soloema user, and confirm wallet balances match the old site (same API).

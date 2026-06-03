# jetvipcharter-com-site

VIP Charters private jet landing page (v1.2) — React, Vite, Tailwind CSS, Cloudflare Pages. Display version lives in `src/lib/version.ts` (bump each iteration).

## Dev

```bash
npm install
npm run dev
```

## Deploy (Cloudflare Pages)

```bash
npm run pages:deploy       # dev branch → https://dev.jetvipcharter-dev.pages.dev
npm run pages:deploy:prod  # production → https://jetvipcharter-dev.pages.dev
```

Requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/) login: `npx wrangler login`

## GitHub → Cloudflare (auto-deploy)

Pushes to `main` or `dev` run [.github/workflows/deploy.yml](.github/workflows/deploy.yml) and update Cloudflare Pages:

| Git branch | Cloudflare URL |
|------------|----------------|
| `main` | https://jetvipcharter-dev.pages.dev (production) + https://dev.jetvipcharter-dev.pages.dev |
| `dev` | https://dev.jetvipcharter-dev.pages.dev |

### One-time: GitHub repository secrets

In [repo Settings → Secrets and variables → Actions](https://github.com/bearllc555-spec/jetvipcharter-com-site/settings/secrets/actions), add:

| Secret | Value |
|--------|--------|
| `CLOUDFLARE_ACCOUNT_ID` | `e0f6f68f26f8a26a75eaa793385019ef` |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with **Account → Cloudflare Pages → Edit** (create at [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)) |

If you already use these secrets on `serenity-spa-site`, add the same values to this repository.

## GitHub

Repository: [bearllc555-spec/jetvipcharter-com-site](https://github.com/bearllc555-spec/jetvipcharter-com-site)

```bash
git push origin main
```

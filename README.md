# Jonah Sachs

Recreation of [jonahsachs.com](https://www.jonahsachs.com) for free hosting on Vercel.

## Local development

```bash
npm install
npm run dev
```

## Deploy

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Set `FORMSPREE_FORM_ID` for the contact form
4. Point `jonahsachs.com` DNS at Vercel (domain is on **GoDaddy**)

### DNS (GoDaddy)

After adding the domain in Vercel Domains:

- Apex `A` records → values Vercel shows
- `www` `CNAME` → value Vercel shows

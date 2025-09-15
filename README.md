# RSGL Scraper

This is a simple serverless function for Vercel that scrapes WooCommerce product pages
to extract image URLs. It uses puppeteer-core + @sparticuz/chromium.

## Deploy

1. Create a new repo on GitHub called `rsgl-scraper`.
2. Unzip this folder, `cd` into it, then run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rsgl-scraper.git
git push -u origin main
```

3. Import the repo into Vercel → Deploy → Done.

## Usage

```bash
https://<your-vercel-app>.vercel.app/api/scrape-woo?url=https://example.com/product/some-item/
```

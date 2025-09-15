import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";

export default async function handler(req, res) {
  const target = req.query.url;
  if (!target) {
    return res.status(400).json({ error: "Missing ?url=" });
  }

  let browser = null;
  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto(target, { waitUntil: "networkidle2", timeout: 60000 });

    const imgs = await page.$$eval("img", els =>
      els.map(e => e.src).filter(u =>
        u.match(/\.(jpg|jpeg|png|webp)$/i)
      )
    );

    res.json({ images: imgs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (browser) await browser.close();
  }
}

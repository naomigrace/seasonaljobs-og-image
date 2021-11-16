import DOMPurify from "isomorphic-dompurify";
import absoluteUrl from "next-absolute-url";
import { truncate } from "../../utils/truncate";
const chromium = require("chrome-aws-lambda");

export default async function og(req, res) {
  const {
    query: { title, description },
  } = req;
  const { origin } = absoluteUrl(req, "localhost:3000");

  const sanitizedTitle = truncate(
    DOMPurify.sanitize(decodeURIComponent(title)),
    71
  );

  const sanitizedDescription = truncate(
    DOMPurify.sanitize(decodeURIComponent(description)),
    175
  );

  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    ignoreHTTPSErrors: true,
  });
  const [page] = await browser.pages();
  await page.goto(
    `${origin}/?title=${encodeURIComponent(
      sanitizedTitle
    )}&description=${encodeURIComponent(sanitizedDescription)}`,
    {
      waitUntil: "networkidle0",
    }
  );
  await page.setViewport({ width: 1200, height: 627 });
  const imageBuffer = await page.screenshot();

  await browser.close();
  res.setHeader("Content-Type", "image/jpg");
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=2592000, max-age=2592000`
  );
  res.send(imageBuffer);
}

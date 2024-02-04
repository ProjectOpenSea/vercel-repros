import { test, expect } from "@playwright/test";

const SITE_URL = "https://vercel-repros.vercel.app";
const HEADER_NAME = 'my-header'
const HEADER_VALUE = "my-super-header";

test("correctly propagated headers", async ({ page }) => {
  await page.route(`${SITE_URL}/**/*`, (route) => {
    const headers = route.request().headers();
    headers[HEADER_NAME] = HEADER_VALUE
    route.continue({ headers });
  });
  

  await page.goto(`${SITE_URL}/headers`)
  const { headers } = JSON.parse(await page.innerHTML("#headers"));
  expect(headers[HEADER_NAME]).toEqual(
    HEADER_VALUE
  );
});

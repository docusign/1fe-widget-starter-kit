import { test, expect } from "@playwright/test";

const version = process.env.WIDGET_VERSION || "1.0.1";

test("should display the expected string on the bathtub page", async ({
  page,
}) => {
  const url = `https://demo.1fe.com/bathtub?widgetUrl=https://1fe-a.akamaihd.net/integration/widgets/@1fe/test-starter-kit/${version}/js/1fe-bundle.js&fixPreview=true`;
  await page.goto(url);

  await expect(page.getByText("Welcome to 1FE Starter Kit")).toBeVisible();
});

import { test, expect } from "@playwright/test";
import packageJson from "../package.json" with { type: "json" };

const version = process.env.WIDGET_VERSION || "1.0.1";

test("should display the expected string on the bathtub page", async ({
  page,
}) => {
  const url = `https://demo.1fe.com/playground?widgetUrl=https://1fe-a.akamaihd.net/integration/widgets/${packageJson.name}/${version}/js/1fe-bundle.js&fixPreview=true`;
  await page.goto(url);

  await expect(page.getByText("Welcome to 1FE Starter Kit")).toBeVisible();
});

import { test, expect } from "@playwright/test";

// application is at https://z.martioli.com/
// api backend for it is at https://z3.martioli.com/api

test.describe("API Interaction Tests", () => {
  test("Verify initial data load from API", async ({ page }) => {
    // Start waiting for the response before navigating to the page.
    const responsePromise = page.waitForResponse("**/api");
    await page.goto("https://z.martioli.com/");
    const response = await responsePromise;

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.length).toBeGreaterThan(0);
  });

  test("Verify new entry is posted to the API", async ({ request }) => {
    const response = await request.post("https://z3.martioli.com/api", {
      data: {
        developer: "test-dev",
        qa: "test-qa",
        manager: "test-manager",
        team: "test-team",
        message: "test-message", // Keep field name as message
      },
      params: {
        token: "juke",
      },
    });
    expect(response.status()).toBe(201);
  });

  test("Verify UI updates after API post", async ({ page }) => {
    await page.route("**/api", async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify([
          {
            _id: "123",
            developer: "mock-dev",
            qa: "mock-qa",
            manager: "mock-manager",
            team: "mock-team",
            message: "mock-message",
            createdAt: new Date().toISOString(),
          },
        ]),
      });
    });

    await page.goto("https://z.martioli.com/");

    // Locate the card specifically by its content and verify its content
    const cardElement = page.getByText('Dev: mock-dev');
    await expect(cardElement).toBeVisible();
    // The following assertion might be redundant but keeping it for now
    await expect(cardElement.getByText("mock-dev")).toBeVisible();
  });
});

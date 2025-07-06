import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker"; // Assuming faker is still needed for other parts of the file

// Home Page Verifications
const cardId = "card-id";

// Add new entry on home page
// const developerInput = "developer-input";
const qaInputField = "qa-input";
const managerInputField = "manager-input";
const teamNameInputField = "teamname-input";
const taskInputField = "message-input";
const secretKeyInputField = "token-input";
const addNewEntryBtn = "new-entry-submit-btn";
const successfulEntryAddedMsg = "info-msg-entry-added";

test.describe("Home Page Verifications", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://z.martioli.com/");
  });

  test(
    "Verify cards are loaded on home page",
    { tag: "@regression" },
    async ({ page }) => {
      await expect(page.getByText("Loading...")).toBeVisible();
      await expect(page.getByTestId(cardId).first()).toBeVisible();
    }
  );

  test("Add new entry on home page", async ({ page }) => {
    await test.step("Fill the form", async () => {
      // await page.getByTestId(developerInput).fill(generateRandomString(6));
      await page.getByTestId(qaInputField).fill(faker.person.firstName());
      await page.getByTestId(managerInputField).fill(faker.person.firstName());
      await page.getByTestId(teamNameInputField).fill(faker.company.name());
      await page.getByTestId(taskInputField).fill(faker.company.catchPhrase());
      await page.getByTestId(secretKeyInputField).fill("juke");
    });

    await page.getByTestId(addNewEntryBtn).click();
    await expect(page.getByTestId(successfulEntryAddedMsg)).toHaveText(
      "Entry added successfully!"
    );
  });

  test("Do not add entry with missing secret key", async ({ page }) => {
    await page.getByTestId(qaInputField).fill(faker.person.firstName());
    await page.getByTestId(managerInputField).fill(faker.person.firstName());
    await page.getByTestId(teamNameInputField).fill(faker.company.name());
    await page.getByTestId(taskInputField).fill(faker.company.catchPhrase());
    await page.getByTestId(addNewEntryBtn).click();
    await expect(page.getByTestId(successfulEntryAddedMsg)).toBeVisible();
  });
});
import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

const qaInputField = "qa-input";
const managerInputField = "manager-input";
const teamNameInputField = "teamname-input";
const taskInputField = "message-input";
const secretKeyInputField = "token-input";
const addNewEntryBtn = "new-entry-submit-btn";
const successfulEntryAddedMsg = "info-msg-entry-added";
const errorMsg = "error-msg";

test.describe("Form Validation Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://z.martioli.com/");
  });

  test("Verify validation error for empty required fields", async ({ page }) => {
    await page.getByTestId(addNewEntryBtn).click();
    await expect(page.getByTestId(errorMsg)).toBeVisible();
    await expect(page.getByTestId(errorMsg)).toHaveText("All fields are required");
  });

  test("Verify validation for incorrect secret key", async ({ page }) => {
    await page.getByTestId(qaInputField).fill(faker.person.firstName());
    await page.getByTestId(managerInputField).fill(faker.person.firstName());
    await page.getByTestId(teamNameInputField).fill(faker.company.name());
    await page.getByTestId(taskInputField).fill(faker.company.catchPhrase());
    await page.getByTestId(secretKeyInputField).fill("wrong-key");
    await page.getByTestId(addNewEntryBtn).click();
    await expect(page.getByTestId(errorMsg)).toBeVisible();
    await expect(page.getByTestId(errorMsg)).toHaveText("Invalid token");
  });

  test("Verify successful submission with correct data", async ({ page }) => {
    await page.getByTestId(qaInputField).fill(faker.person.firstName());
    await page.getByTestId(managerInputField).fill(faker.person.firstName());
    await page.getByTestId(teamNameInputField).fill(faker.company.name());
    await page.getByTestId(taskInputField).fill(faker.company.catchPhrase());
    await page.getByTestId(secretKeyInputField).fill("juke");
    await page.getByTestId(addNewEntryBtn).click();
    await expect(page.getByTestId(successfulEntryAddedMsg)).toHaveText(
      "Entry added successfully!"
    );
  });
});

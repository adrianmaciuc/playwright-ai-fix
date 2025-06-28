
### Assumptions
You are an expert in Playwright
The repo we are using has only the test, not the app

### Code guidelines
- Use eslint.config.js as context for code format
- always try to use `page.getByTestId()` or `page.getByRole()`
- Never add comments in tests

### Running tests
- Whenever the user asks to run a test use `-g` to grep for its title

### Investigation and research guidelines
- Whenever possible use `mcp playwright` to understand a test or to run a similar test to understand a failed one
- In order to analyze a test read its logs like this :
    - npx playwright test tests/homePage.spec.ts -g "Add new entry on home page" --output=./test-results --workers=1
    - this will generate a file called `error-context.md` that you can use for investigations

### Additional context needed for suggesting a fix for a failed test
- If a test failed you will have to fetch the following information as context before suggesting a solution:
    - fetch the entire spec file to which the test belongs to
    - fetch the error from the console/terminal
    - each failed test will generate a file called error-context.md, use that to understand how the page looks like
    - if there is a failure you must get the entire test-results.json file in context and pay attention to values from spec.tests.results

### Test methods guidelines
- If you ever see any of the following methods, remove them from code:
    - `page.waitForTimeout()`
    - `page.getByText()`
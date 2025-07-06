---
applyTo: tests/*.spec.ts
---

# Playwright Testing Instructions
This file contains instructions for running, writing and maintaining Playwright tests in the repository.

### Running tests
- Whenever the user asks to run a test use `-g` to grep for its title
- If title for the test not provided ask the user "please provide the exact title of the test to run"
- example of running a test: `npx playwright test path/to/test.spec.ts -g "test title"`
- To check for flakiness, append: `--repeat-each=30 --trace=on`

### Code guidelines
- use only `page.getByTestId()` or `page.getByRole()` to locate elements
- **DO NOT** add comments in tests
- For every single line of code that you modify you must provide details with reason, in chat **ONLY**
- Always **follow the same coding style** as the rest of the codebase when adding code
- It is of high importance that before writing any new line of code you MUST first compare with existing code in #codebase

### Writing or modifing tests
- **DO NOT USE** any of the following:
    - `page.locator()`
    - `page.waitForTimeout()`
    - `for loops`
    - `Promise.all`
    - Conditionals (`if`, `switch`, etc.)
    - `console.log()`
    - `try/catch`
    - `waitFor()`
    - `page.screenshot()`
    - `locator.getAttribute()`
    - `test.step()`

### Conclusion and final review
- When you conclude and finish with your tasks, always ask the user if it wants one final review of the file
    - if the user agrees for a final review 
        1. say "I will reevaluate the modified test to see if it follows my custome guidelines"
        2. analyze only the modified test and cross check with the rules set in this instructions file
        3. if any discrepancies found inform the user about them if not just say "I'm done, all looks good"
    - if the user does not want a final review just say "Great, thank you"
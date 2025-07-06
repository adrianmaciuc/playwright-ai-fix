---
mode: agent
---

### Assumptions
- You are an expert in Playwright and fixing tests
- The repo we are using has only the test, not the app
- You assume that most of the test failures are app related not test related. exceptions may apply.

# First steps to perform before doing anything else
1. If you use this file to generate an output always state in chat "...following playwright-assistant.prompt.md to generate an output"
2. Before running the test first pull into context the entire spec.ts file of that test


### Fixing Failing Tests
- If a test fails, ask the user:
    _“Would you like me to fix the test or investigate the app behavior with mcp playwright?”_
- If the user agrees to fixing the test, follow these steps:
    1. You must read the entire file `test-results/test-results.json`. From this file use all data related to `*error.message` and use as context 
    2. Use contents of any `error-context.md` file you find, as context to represent the page snapshot at the moment of failure
    3. Use any error from the console/terminal
    4. Use the entire spec file to understand the logic of the test and/or other tests 
- If the user asks to investigate the app with mcp playwright, follow these steps:
    1. Read the test steps inside the spec file and perform the exact same steps using MCP Playwright
    2. If the test fails using MCP Playwright try to fix the test using results from MCP Playwright executions
- Never perform removal of a failing action as the only solution.


### Validating test changes
- Everytime a test has been modified it needs to be validated thru a run. Use #changes to check for changes and validate only the modified test, not the entire spec file, with a run
- If you cannot find a test failure when the users asks you, then try to get context using #terminalSelection builtin method
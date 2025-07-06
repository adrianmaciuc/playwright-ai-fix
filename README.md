# Playwright Fix tests with AI

## Project Overview

This project uses parts of this [https://github.com/adrianmaciuc/playwright-framework](framework)
It showcases how we can use `prompts.md` and `instructions.md` files for github copilot to try to fix playwright tests

## Understanding *.instructions.md files

VS Code Github copilot will use instructions files from inside folder `.github/instructions/*.instructions.md`
You must specify inside the .md file for which files the instructions to apply by putting at the top of the file the following:

```code-block
---
applyTo: tests/*.spec.ts
---
```
Whenever you will have one of the files to which it applies to, dragged into copilot chat/agent mode, the instructions will apply automatically


**Contributing**

To contribute, fork the repository, create a new branch, and submit a pull request to the main branch with a detailed description of your changes.
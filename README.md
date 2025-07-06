# Playwright Fix tests with AI

## Project Overview

The project showcases how we can use `prompts.md` and `instructions.md` files for github copilot to try to fix playwright tests

## Understanding *.instructions.md files

VS Code Github copilot can use instructions files from inside folder `.github/instructions/*.instructions.md` automatically
These files contain general instructions for how to write the code, from patterns, to style, to rules etc.
You must specify inside the .md file for which files the instructions to apply by putting at the top of the file the following:

```code-block
---
applyTo: tests/*.spec.ts
---
```
Whenever you will have one of the files to which it applies to, dragged into copilot chat/agent mode, the instructions will apply automatically

## Understanding *.prompt.md files

VS Code Github copilot can use prompts files to tailor the output specifically for your needs. 
It is advised to create prompt files per use case. For example create a prompt file for fixing tests.
Folders are commonly agreed to be stored inside `.github/prompts/*.prompt.md`
Prompt files are dragged into chat/agent mode per task. By default this file should be dragged once and it should remain in the session. However from my personal testing I realized that after some follow up direct prompts in chat the model tends to forget the initial prompt file so, once in a while I drag it again.


**Contributing**

To contribute, fork the repository, create a new branch, and submit a pull request to the main branch with a detailed description of your changes.
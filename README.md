# Playwright Test Fixing with AI

## Project Overview

This repository demonstrates how to use GitHub Copilot in VS Code to automatically fix Playwright tests. It relies on two supporting file types—instruction files and prompt files—to guide the AI toward consistent, project-specific patterns.  

---

## Instruction Files (`*.instructions.md`)

Instruction files live in `.github/instructions/` and apply automatically when matching test files are opened in Copilot Chat or Agent mode. They define coding patterns, style rules, naming conventions, and other guidelines.

### File Header Configuration

Place the following YAML front matter at the top of your instruction file to scope its application:

```yaml
---
applyTo: tests/*.spec.ts
---
```

Once configured, any file matching `tests/*.spec.ts` will inherit the rules in this instruction file whenever that spec file is dragged by you into Copilot chat or agent mode.

---

## Prompt Files (`*.prompt.md`)

Prompt files tailor Copilot’s output to specific tasks—such as fixing failing tests or generating new test cases. They do not apply automatically; you drag them into the chat/agent session when you need them.

### Recommended Workflow

1. Create one prompt file per use case (e.g., `fix-tests.prompt.md`).  
2. Store prompt files in `.github/prompts/`.  
3. At the start of your session, drag the relevant prompt file into Copilot Chat or Agent mode.  
4. If Copilot seems to lose context after follow-up messages, re-introduce the prompt file to reset its guidance.  

---

## Instruction vs. Prompt Files

| Feature       | Instruction Files                   | Prompt Files                          |
|---------------|-------------------------------------|---------------------------------------|
| Location      | `.github/instructions/*.instructions.md` | `.github/prompts/*.prompt.md`         |
| Activation    | Automatic for matching files       | Manual drag-in at session start       |
| Scope         | Broad project-wide guidelines      | Specific task or use-case instructions |
| Front Matter  | Must include `applyTo` property    | No front matter required             |

---

## Contributing

To contribute:

- Fork this repository  
- Create a feature branch (e.g., `feature/add-new-instruction`)  
- Commit your changes with clear messages  
- Open a pull request against the `main` branch, describing your updates in detail  

Thank you for helping improve our Playwright test suite!

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

The MIT License is a permissive open-source license that allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software. It also permits sublicensing and private use. The software is provided "as is", without warranty of any kind.
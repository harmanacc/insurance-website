# BIM760 Project Documentation

Welcome to the BIM760 project documentation.

## Getting Started

BIM760 is an insurance-related project focused on providing informative content and user functionality, with the ultimate goal of digitizing the entire insurance process—from decision-making and consulting to billing (future features) and offering a space for users to view and store their data (future features).

Currently, BIM760 is in the informative phase and does not accept user logins or payments.

## Prerequisites

BIM760 is a web application forked from Payload CMS website template, a Next.js-compatible framework that provides backend functionality for content management.

## Agentic Flow

Before making any decisions, follow the agentic flow guidelines:

1. Always review `package.json` to understand the project's dependencies. Do not install any packages already listed in `package.json`.
2. Ensure every major folder has a `README.md` file explaining the purpose of the folder and its contents at a high level. If a `README.md` is missing, create one with a general overview.
3. Before starting any task, create a task Markdown file named after the feature in the `agent-docs/tasks` folder with the following sections:
   - **Description**: A brief overview of the task.
   - **Steps**: Key steps taken to complete the task, including references to relevant files.
   - **Tasklist**: A checklist using `[]` for tasks. Mark completed items with `[x]`.
4. Avoid making assumptions about the code. If uncertain, seek clarification from me. Utilize Context7 MCP for documentation on Next.js, Payload CMS, or other packages.
5. The Payload-specific code resides in the `(payload)` folder. Exercise caution when modifying this section—consult the agentic flow at every step and verify details using Context7 MCP documentation.

## Important Notes

1. Keep files concise. If a file becomes too long, split it into multiple files within a folder, breaking down the logic. Include a `README.md` in each folder explaining its purpose and contents.
2. Always utilize the project's existing utilities, functions, hooks, components, Tailwind classes, and colors.
3. For tasks that have been done by creative solutions or documentation checks, create a new Markdown file in the `agent-docs/solutions` folder detailing the problem, solution, and any handled edge cases. This is initiated only when requested.
4. do not try to run the server , i will run the server and test the changes myself. do not build or anything else.
5. always be mindful of responsiveness , for both mobile and desktop.
6. this is a content heavy project so make sure every best practice of a seo firendly website is followed. you may suggest improvements for seo to be added or done by me .

## coding practices

1. each component should be in a separate file
2. always use shadcn and tailwind classes for ui elements, lucide-react for icons.
3. do not use the any type, use the specific type as much as poossible.
4. types should be in a seperate file in the closest folder to the component.

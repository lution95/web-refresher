# Small Steps - Web Refresher

A single-page study planner made with HTML5, CSS and vanilla JavaScript. No React, packages, account, build tools or external assets are needed.

## Run the website

Extract the project folder, then open `index.html` in a modern browser. Keep the folder structure unchanged. The planner sets a task and session length, lets you mark a session complete, and counts completed sessions. The theme button switches between light and dark colours. State resets when the page reloads; the session length is a plan, not a countdown timer.

## Files

- `index.html`: semantic page structure, labelled form and accessible status message.
- `styles.css`: custom styling, Grid/Flexbox layouts, mobile media query and keyboard focus styles.
- `script.js`: event handlers, task validation, theme switching and session counting.
- `assets/study-desk.svg`: local illustration with alternative text in the HTML.
- `TESTING.md`: checks completed and the browser testing checklist.

## Reflection draft - personalise before submission (120 words)

The clearest part of this project is the HTML structure: the header, navigation, main sections and footer each have a specific purpose. Keeping HTML, CSS and JavaScript in separate files also makes the page easier to follow. The more challenging areas are adapting the two-column desktop layout to a smaller screen and keeping the interactive controls in a sensible state. For example, the completion button should only work after a task has been set, and it should not count the same session twice. During Web Development II, I would like to improve my browser debugging skills, especially inspecting responsive layouts and tracing event handlers. Reviewing this project gives me a starting point for practising those skills and explaining the code.

This is an AI-drafted example, not a statement of your actual experience. Rewrite it to reflect what you personally found straightforward and challenging, and keep your final reflection between 100 and 150 words.

## AI acknowledgement

ChatGPT (OpenAI) assisted with generating the HTML, CSS, JavaScript, SVG illustration, documentation and example reflection on 12 October 2026. JavaScript checks used simulated DOM objects; no browser testing has been claimed. No third-party snippets or external images were copied. Review, adapt and understand all files before submission. The assessment brief requires acknowledgement of AI assistance and says you must be able to explain your code and must not rely on external material to complete the task for you.

## Code you should be able to explain

1. Semantic elements describe each part of the page; labels connect form controls to their descriptions.
2. CSS variables provide the colours. Grid creates columns, and the 700px media query stacks them on phones.
3. `addEventListener` connects button clicks and form submission to functions.
4. `preventDefault()` prevents the form from reloading the page.
5. `trim()` rejects tasks made only of spaces. `textContent` safely displays the task as text.
6. `completedSessions` stores the count. Disabling the completion button prevents counting the same plan twice.
7. `aria-pressed` describes the theme button state; the live status message announces planner feedback.

## Submission

After reviewing the code, personalising the reflection and completing the browser checks, copy this folder into your official Web Dev II GitHub repository. Commit and push all project files, then submit that repository URL through the formative submission point on Ultra. If uploading through GitHub's website, upload the extracted files rather than only the ZIP. Check that `assets/study-desk.svg` is included.

Deadline stated in the supplied brief: Friday 30 October 2026, 12:00 PM. The brief does not specify a timezone; use the course's submission time.

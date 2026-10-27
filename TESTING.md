# Testing record

## Completed on 12 October 2026

- JavaScript parsed and ran in Node using simulated DOM elements.
- Theme toggle switched its boolean state, button text and `aria-pressed` attribute.
- Whitespace-only tasks were rejected.
- A valid task enabled completion and displayed the chosen duration.
- Input containing HTML markup was assigned using `textContent`.
- Completing a task incremented the count and disabled completion.
- A second completion event did not increment the count.
- Reset returned the count to zero and disabled the reset button.
- All referenced local assets and code files are included.

These are logic checks, not real-browser or visual layout tests. A Playwright browser test was attempted, but the environment has no installed Chromium browser. Browser layout, keyboard interaction and console verification are therefore still pending.

## Required browser checks - complete before submitting

Open `index.html` in Chrome, Edge or Firefox. Open Developer Tools (F12 or right-click > Inspect), then enable the responsive device toolbar.

| Check | Expected result | Your result |
| --- | --- | --- |
| Desktop: 1440 x 900 | Hero and planner use two columns; habit cards use three; no horizontal scroll | Pending |
| Phone: 375 x 812 | Sections stack; navigation wraps; all controls fit; no horizontal scroll | Pending |
| Tablet: 768 x 1024 | Text and controls fit without overlap | Pending |
| Light/dark theme | All text remains readable and the button label changes | Pending |
| Empty/space-only task | Validation prevents setting an empty focus | Pending |
| Valid task + 45-minute session | Task and duration appear; completion becomes available | Pending |
| Complete once, then again | Count increases once; completion stays disabled until a new plan | Pending |
| Reset count | Count becomes zero | Pending |
| Keyboard only | Tab reaches links/controls; focus is visible; Enter submits; Space activates buttons | Pending |
| Console tab | No JavaScript errors during the above interactions | Pending |
| Reload | Theme, plan and count return to initial state | Pending |
| Image | Local illustration loads; meaningful alt text exists in HTML | Pending |

Replace Pending with your actual results. If a check fails, record the issue, correct it and repeat the affected check. Do not claim tests you have not performed.

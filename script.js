// Created with ChatGPT assistance. State is intentionally limited to this visit.
const themeToggle = document.querySelector('#theme-toggle');
const sessionForm = document.querySelector('#session-form');
const taskInput = document.querySelector('#task');
const durationSelect = document.querySelector('#duration');
const focusTask = document.querySelector('#focus-task');
const focusDuration = document.querySelector('#focus-duration');
const completeButton = document.querySelector('#complete-session');
const resetButton = document.querySelector('#reset-progress');
const feedback = document.querySelector('#session-feedback');
const countDisplay = document.querySelector('#session-count');
let completedSessions = 0;

themeToggle.addEventListener('click', () => {
  const darkEnabled = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(darkEnabled));
  themeToggle.textContent = darkEnabled ? 'Light theme' : 'Dark theme';
});

// Native validation handles empty input; this also rejects whitespace-only tasks.
taskInput.addEventListener('input', () => taskInput.setCustomValidity(''));
sessionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (!task) {
    taskInput.setCustomValidity('Please enter a study task, not just spaces.');
    taskInput.reportValidity();
    return;
  }
  taskInput.setCustomValidity('');
  // textContent displays user input as text rather than interpreting it as HTML.
  focusTask.textContent = task;
  focusDuration.textContent = `${durationSelect.value} minutes of focused learning. This is a plan, not a timer.`;
  completeButton.disabled = false;
  feedback.textContent = 'Your focus is set. Come back when you have finished.';
});

completeButton.addEventListener('click', () => {
  if (completeButton.disabled) return;
  completedSessions += 1;
  countDisplay.textContent = String(completedSessions);
  completeButton.disabled = true;
  resetButton.disabled = false;
  feedback.textContent = 'Session complete. Take a break, then choose your next task.';
});

resetButton.addEventListener('click', () => {
  completedSessions = 0;
  countDisplay.textContent = '0';
  resetButton.disabled = true;
  feedback.textContent = 'Your completed-session count has been reset.';
});

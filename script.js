const themeToggle = document.querySelector("#theme-toggle");
const messageButton = document.querySelector("#message-button");
const messageNode = document.querySelector("#message");
const revealNodes = document.querySelectorAll(".reveal");

const messages = [
  "Simple sites do not need complicated tooling.",
  "Start with a clean layout, then add the behavior you actually need.",
  "Small visual details can make plain HTML feel deliberate.",
  "This page is ready to be expanded into a real project."
];

let messageIndex = 0;

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "night" ? "day" : "night";

    if (nextTheme === "day") {
      delete document.body.dataset.theme;
    } else {
      document.body.dataset.theme = nextTheme;
    }

    const pressed = nextTheme === "night";
    themeToggle.setAttribute("aria-pressed", String(pressed));
    themeToggle.textContent = pressed ? "Use light theme" : "Switch theme";
  });
}

if (messageButton && messageNode) {
  messageButton.addEventListener("click", () => {
    messageIndex = (messageIndex + 1) % messages.length;
    messageNode.textContent = messages[messageIndex];
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealNodes.forEach((node) => observer.observe(node));

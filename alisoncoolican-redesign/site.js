const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme ?? (systemTheme.matches ? "dark" : "light");
}

function updateThemeLabel() {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", themeToggle.dataset[nextTheme + "Label"]);
}

themeToggle.addEventListener("click", () => {
  const theme = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = theme;
  try {
    localStorage.setItem("alison-coolican-theme", theme);
  } catch {
    // Keep the selected theme active for this page.
  }
  updateThemeLabel();
});

updateThemeLabel();
systemTheme.addEventListener("change", updateThemeLabel);
themeToggle.hidden = false;

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const narrowViewport = window.matchMedia("(max-width: 740px)");

function setMenu(open) {
  nav.toggleAttribute("data-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => {
  const open = !nav.hasAttribute("data-open");
  setMenu(open);
  if (open) nav.querySelector("a").focus();
});
nav.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (narrowViewport.matches && link) {
    const target = document.querySelector(link.hash);
    setMenu(false);
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }
});

header.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.hasAttribute("data-open")) {
    setMenu(false);
    menuToggle.focus();
  }
});

narrowViewport.addEventListener("change", () => setMenu(false));
header.setAttribute("data-menu-ready", "");
menuToggle.hidden = false;

const languageLink = document.querySelector("[data-language-link]");
const alternatePage = new URL(languageLink.href);
const sectionHashes = new Set(Array.from(nav.querySelectorAll("a"), (link) => link.hash));

function updateLanguageLink() {
  alternatePage.hash = sectionHashes.has(window.location.hash) ? window.location.hash : "";
  languageLink.href = alternatePage.href;
}

updateLanguageLink();
window.addEventListener("hashchange", updateLanguageLink);

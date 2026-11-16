(() => {
  const key = "perfectwalk-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const root = document.documentElement;
  let choice;
  let toggle;

  try {
    choice = localStorage.getItem(key);
  } catch {
    // The device theme remains available when storage is blocked.
  }

  function applyTheme() {
    const theme = choice === "dark" || choice === "light"
      ? choice
      : systemTheme.matches ? "dark" : "light";
    root.dataset.theme = theme;
    toggle?.setAttribute("aria-pressed", String(theme === "dark"));
  }

  applyTheme();
  systemTheme.addEventListener("change", applyTheme);

  document.addEventListener("DOMContentLoaded", () => {
    toggle = document.querySelector(".theme-toggle");
    applyTheme();
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      choice = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme();
      try {
        localStorage.setItem(key, choice);
      } catch {
        // The selected theme still applies to the current page.
      }
    });
  });
})();

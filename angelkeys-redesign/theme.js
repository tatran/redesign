(() => {
  const storageKey = "angelkeys-theme";
  const root = document.documentElement;
  const preference = window.matchMedia("(prefers-color-scheme: dark)");

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") root.dataset.theme = saved;
  } catch {
    // Private browsing or browser policy can disable storage.
  }

  function isDark() {
    return root.dataset.theme ? root.dataset.theme === "dark" : preference.matches;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("[data-theme-toggle]");
    const icon = button.querySelector(".theme-icon");

    function updateButton() {
      const dark = isDark();
      const label = dark ? button.dataset.toLight : button.dataset.toDark;
      button.setAttribute("aria-label", label);
      button.title = label;
      icon.textContent = dark ? "☀" : "☾";
    }

    button.addEventListener("click", () => {
      const theme = isDark() ? "light" : "dark";
      root.dataset.theme = theme;
      try {
        localStorage.setItem(storageKey, theme);
      } catch {
        // The current page still uses the selected theme.
      }
      updateButton();
    });

    preference.addEventListener("change", updateButton);
    updateButton();
    button.hidden = false;

    const languageLink = document.querySelector("[data-language-switch]");
    languageLink.addEventListener("click", () => {
      const sectionId = location.hash.slice(1);
      const target = new URL(languageLink.href);
      target.hash = document.getElementById(sectionId) ? sectionId : "";
      languageLink.href = target.href;
    });
  });
})();

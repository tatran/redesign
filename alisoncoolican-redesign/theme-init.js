try {
  const preferredTheme = localStorage.getItem("alison-coolican-theme");
  if (preferredTheme === "light" || preferredTheme === "dark") {
    document.documentElement.dataset.theme = preferredTheme;
  }
} catch {
  // The stylesheet follows the system theme when browser storage is unavailable.
}

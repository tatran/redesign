(() => {
  const root = document.documentElement;
  const preferenceKey = 'aosltd-theme';
  const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference;

  try {
    preference = localStorage.getItem(preferenceKey);
  } catch {
    // The theme still works within this page when storage is unavailable.
  }

  if (preference === 'light' || preference === 'dark') {
    root.dataset.theme = preference;
  }

  window.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('[data-theme-toggle]');
    const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : deviceTheme.matches;
    const updateToggle = () => toggle.setAttribute('aria-pressed', String(isDark()));

    toggle.addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      updateToggle();
      try {
        localStorage.setItem(preferenceKey, root.dataset.theme);
      } catch {
        // The selected theme has already been applied.
      }
    });

    deviceTheme.addEventListener('change', updateToggle);
    updateToggle();
    toggle.hidden = false;
  });
})();

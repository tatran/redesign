const root = document.documentElement;
const themePicker = document.querySelector("#theme");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const compactLayout = matchMedia("(max-width: 50rem)");

themePicker.value = root.dataset.theme ?? "auto";
themePicker.parentElement.hidden = false;

themePicker.addEventListener("change", () => {
  const theme = themePicker.value;
  if (theme === "auto") {
    delete root.dataset.theme;
  } else {
    root.dataset.theme = theme;
  }

  try {
    if (theme === "auto") {
      localStorage.removeItem("ad-asphalt-theme");
    } else {
      localStorage.setItem("ad-asphalt-theme", theme);
    }
  } catch {
    // Apply the choice to this page even when browser storage is unavailable.
  }
});

function setMenu(open) {
  navigation.toggleAttribute("data-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
}

navigation.setAttribute("data-collapsible", "");
menuButton.hidden = false;
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  setMenu(open);
  if (open) navigation.querySelector("a").focus();
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && compactLayout.matches) {
    setMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && compactLayout.matches && navigation.hasAttribute("data-open")) {
    setMenu(false);
    menuButton.focus();
  }
});

compactLayout.addEventListener("change", () => setMenu(false));

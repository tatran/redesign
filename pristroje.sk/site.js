const catalogDialog = document.querySelector("#catalog-dialog");
const catalogTitle = document.querySelector("#dialog-title");
const queryField = document.querySelector("#catalog-query");
const catalogList = document.querySelector(".catalog-list");
const catalogStatus = document.querySelector(".catalog-status");
const closeButton = catalogDialog.querySelector(".icon-button");
let catalogRequest;
let catalogOpener;

function normalize(text) {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("sk");
}

async function renderCatalog() {
  catalogStatus.textContent = "Načítavam kategórie…";
  try {
    catalogRequest ??= fetch("categories.json").then((response) => {
      if (!response.ok) throw new Error("Catalog unavailable");
      return response.json();
    });
    const categories = await catalogRequest;
    const term = normalize(queryField.value.trim());
    const matches = categories.filter(({ level, name }) =>
      term ? normalize(name).includes(term) : level === 0
    );
    catalogStatus.textContent = matches.length
      ? (term ? `Nájdené kategórie (${matches.length})` : `Hlavné kategórie (${matches.length})`)
      : "Žiadne zodpovedajúce kategórie. Skúste vyhľadať produkty v katalógu.";
    catalogList.replaceChildren(...matches.map(({ name, href, count }) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      const quantity = document.createElement("small");
      link.href = href;
      quantity.textContent = count;
      quantity.setAttribute("aria-label", `Počet produktov ${count}`);
      link.append(name, quantity);
      item.append(link);
      return item;
    }));
  } catch {
    catalogRequest = undefined;
    catalogList.replaceChildren();
    catalogStatus.textContent = "Kategórie sa nepodarilo načítať. Vyhľadávanie produktov je stále dostupné.";
  }
}

document.querySelectorAll("[data-open-catalog]").forEach((button) => {
  button.addEventListener("click", () => {
    catalogOpener = button;
    const browseMode = button.dataset.openCatalog === "browse";
    catalogTitle.textContent = browseMode ? "Všetky kategórie" : "Vyhľadávanie";
    queryField.value = "";
    catalogDialog.showModal();
    (browseMode ? closeButton : queryField).focus();
    renderCatalog();
  });
});

queryField.addEventListener("input", renderCatalog);
queryField.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    catalogDialog.close();
  }
});
catalogDialog.addEventListener("close", () => catalogOpener?.focus());

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");

function setMenu(open) {
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Zatvoriť navigáciu" : "Otvoriť navigáciu");
  menuButton.querySelector("use").setAttribute("href", open ? "#close" : "#menu");
}

menuButton.addEventListener("click", () => setMenu(!navigation.classList.contains("is-open")));
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    setMenu(false);
    menuButton.focus();
  }
});

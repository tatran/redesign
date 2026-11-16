const lightbox = document.querySelector(".lightbox");
const photos = [...document.querySelectorAll(".gallery-photo")];

if (typeof lightbox.showModal === "function") {
  const image = lightbox.querySelector(".lightbox-photo");
  const count = lightbox.querySelector(".lightbox-count");
  let current = 0;
  let opener;

  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    const link = photos[current];
    image.alt = link.querySelector("img").alt;
    image.src = link.href;
    count.textContent = `${current + 1} / ${photos.length}`;
  }

  photos.forEach((link, index) => {
    link.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      showPhoto(index);
      lightbox.showModal();
    });
  });

  lightbox.querySelectorAll("[data-photo-step]").forEach(button => {
    button.addEventListener("click", () => showPhoto(current + Number(button.dataset.photoStep)));
  });

  lightbox.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") showPhoto(current - 1);
    if (event.key === "ArrowRight") showPhoto(current + 1);
  });

  lightbox.addEventListener("close", () => opener?.focus());
}

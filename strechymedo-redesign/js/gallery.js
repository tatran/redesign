/**
 * Strechy Medo - Portfolio Gallery & Lightbox
 * Powers the project showcase with real Instagram photos
 */

const galleryProjects = [
  {
    id: "levoca",
    category: "pitched",
    cover: "images/project_01_levoca_1.jpg",
    images: [
      "images/project_01_levoca_1.jpg",
      "images/project_02_levoca_2.jpg",
      "images/project_03_levoca_3.jpg"
    ],
    materials: "Tondach, Titanzinok, Difúzna fólia",
    location: "Levoča"
  },
  {
    id: "horka",
    category: "pitched",
    cover: "images/project_05_horka_primovce_2.jpg",
    images: [
      "images/project_04_horka_primovce_1.jpg",
      "images/project_05_horka_primovce_2.jpg",
      "images/project_06_horka_primovce_3.jpg",
      "images/project_07_horka_primovce_4.jpg",
      "images/project_08_horka_primovce_5.jpg"
    ],
    materials: "Šikmá krytina, Odkvapy, Parozábrana",
    location: "Hôrka - Primovce"
  },
  {
    id: "presov",
    category: "metal",
    cover: "images/project_54_presov_titanzinok_1.jpg",
    images: [
      "images/project_54_presov_titanzinok_1.jpg",
      "images/project_55_presov_titanzinok_2.jpg",
      "images/project_56_presov_titanzinok_3.jpg",
      "images/project_57_presov_titanzinok_4.jpg",
      "images/project_58_presov_titanzinok_5.jpg"
    ],
    materials: "Falcovaný titánzinok, Dvojitá stojatá drážka",
    location: "Prešov"
  },
  {
    id: "lopusna",
    category: "shingle",
    cover: "images/project_34_lopusna_dolina_1.jpg",
    images: [
      "images/project_34_lopusna_dolina_1.jpg",
      "images/project_35_lopusna_dolina_2.jpg",
      "images/project_36_lopusna_dolina_3.jpg",
      "images/project_37_lopusna_dolina_4.jpg",
      "images/project_38_lopusna_dolina_5.jpg",
      "images/project_39_lopusna_dolina_6.jpg",
      "images/project_40_lopusna_dolina_7.jpg",
      "images/project_41_lopusna_dolina_8.jpg"
    ],
    materials: "Ekoternit plastový šindeľ, Nárožia, Drevený podklad",
    location: "Lopušná Dolina, Vysoké Tatry"
  },
  {
    id: "norwit",
    category: "metal",
    subCategory: "tinsmith",
    cover: "images/project_48_norwit_poprad_1.jpg",
    images: [
      "images/project_48_norwit_poprad_1.jpg",
      "images/project_49_norwit_poprad_2.jpg",
      "images/project_50_norwit_poprad_3.jpg",
      "images/project_51_norwit_poprad_4.jpg",
      "images/project_52_norwit_poprad_5.jpg",
      "images/project_53_norwit_poprad_6.jpg"
    ],
    materials: "Titánzinok, Vetracie hlavice, Priemyselná atika",
    location: "Poprad (Objekt Norwit)"
  },
  {
    id: "poprad_velka",
    category: "shingle",
    cover: "images/project_09_poprad_velka_sindel_1.jpg",
    images: [
      "images/project_09_poprad_velka_sindel_1.jpg",
      "images/project_10_poprad_velka_sindel_2.jpg",
      "images/project_11_poprad_velka_sindel_3.jpg",
      "images/project_12_poprad_velka_sindel_4.jpg",
      "images/project_13_poprad_velka_sindel_5.jpg",
      "images/project_14_poprad_velka_sindel_6.jpg",
      "images/project_20_poprad_velka_sindel_1.jpg",
      "images/project_21_poprad_velka_sindel_2.jpg",
      "images/project_22_poprad_velka_sindel_3.jpg",
      "images/project_23_poprad_velka_sindel_4.jpg",
      "images/project_24_poprad_velka_sindel_5.jpg"
    ],
    materials: "Asfaltový šindeľ IKO, Poistné pásy, Klampiarske nárožia",
    location: "Poprad - Veľká"
  },
  {
    id: "ciapka",
    category: "tinsmith",
    cover: "images/project_46_ciapka_komina_1.jpg",
    images: [
      "images/project_46_ciapka_komina_1.jpg",
      "images/project_47_ciapka_komina_2.jpg"
    ],
    materials: "Zákazkový plech, Aerodynamické lamelové lemovanie",
    location: "Dielňa Poprad / Výroba na mieru"
  },
  {
    id: "smizany",
    category: "pitched",
    cover: "images/project_16_smizany_2.jpg",
    images: [
      "images/project_15_smizany_1.jpg",
      "images/project_16_smizany_2.jpg",
      "images/project_17_smizany_3.jpg",
      "images/project_18_smizany_4.jpg",
      "images/project_19_smizany_5.jpg"
    ],
    materials: "Drevený krov, Betónová škridla Bramac, Odkvapy",
    location: "Smižany"
  },
  {
    id: "spisske_bystre",
    category: "pitched",
    cover: "images/project_25_spisske_bystre_1.jpg",
    images: [
      "images/project_25_spisske_bystre_1.jpg",
      "images/project_26_spisske_bystre_2.jpg",
      "images/project_27_spisske_bystre_3.jpg",
      "images/project_28_spisske_bystre_4.jpg",
      "images/project_29_spisske_bystre_5.jpg",
      "images/project_30_spisske_bystre_6.jpg",
      "images/project_31_spisske_bystre_7.jpg",
      "images/project_32_spisske_bystre_8.jpg",
      "images/project_33_spisske_bystre_9.jpg"
    ],
    materials: "Rozsiahla škridlová krytina, Snehové zábrany, Strešné okná",
    location: "Spišské Bystré"
  },
  {
    id: "svit",
    category: "pitched",
    cover: "images/project_43_svit_podskalka_2.jpg",
    images: [
      "images/project_42_svit_podskalka_1.jpg",
      "images/project_43_svit_podskalka_2.jpg",
      "images/project_44_svit_podskalka_3.jpg",
      "images/project_45_svit_podskalka_4.jpg"
    ],
    materials: "Oprava krovu, Rekonštrukcia valieb a komína",
    location: "Svit - Podskalka"
  }
];

let currentLang = 'sk';
let activeFilter = 'all';
let currentModalProject = null;
let currentModalImgIndex = 0;

function initGallery(lang = 'sk') {
  currentLang = lang;
  renderGalleryGrid();
  setupFilterTabs();
  setupLightboxListeners();
}

function renderGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = galleryProjects.filter(p => {
    if (activeFilter === 'all') return true;
    if (p.category === activeFilter) return true;
    if (p.subCategory === activeFilter) return true;
    return false;
  });

  const langLabels = {
    sk: { photos: 'fotografií', zoom: 'Zväčšiť projekt', open: 'Otvoriť galériu ➔' },
    en: { photos: 'photos', zoom: 'Enlarge project', open: 'Open gallery ➔' },
    de: { photos: 'Fotos', zoom: 'Projekt vergrößern', open: 'Galerie öffnen ➔' },
    pl: { photos: 'zdjęć', zoom: 'Powiększ projekt', open: 'Otwórz galerię ➔' },
    hu: { photos: 'fénykép', zoom: 'Projekt megtekintése', open: 'Galéria megnyitása ➔' }
  }[currentLang] || { photos: 'fotografií', zoom: 'Zväčšiť projekt', open: 'Otvoriť galériu ➔' };

  filtered.forEach((p, idx) => {
    const pData = translations[currentLang]?.portfolio?.projects?.[p.id] || {
      title: p.id,
      tag: p.materials,
      loc: p.location,
      desc: ''
    };

    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', p.category);
    card.innerHTML = `
      <div class="project-img-wrap" onclick="openLightbox('${p.id}', 0)">
        <img src="${p.cover}" alt="${pData.title}" loading="lazy" class="project-img">
        <div class="project-overlay">
          <span class="project-photos-count">📷 ${p.images.length} ${langLabels.photos}</span>
          <span class="view-btn">🔍 ${langLabels.zoom}</span>
        </div>
        <span class="project-badge">${pData.tag}</span>
      </div>
      <div class="project-info">
        <div class="project-location">📍 ${pData.loc}</div>
        <h3 class="project-title" onclick="openLightbox('${p.id}', 0)">${pData.title}</h3>
        <p class="project-desc">${pData.desc}</p>
        <div class="project-footer">
          <span class="project-meta-mats">🔨 ${p.materials}</span>
          <button class="project-open-btn" onclick="openLightbox('${p.id}', 0)">${langLabels.open}</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll('.gallery-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.getAttribute('data-filter');
      renderGalleryGrid();
    });
  });
}

function openLightbox(projectId, imgIndex = 0) {
  const project = galleryProjects.find(p => p.id === projectId);
  if (!project) return;

  currentModalProject = project;
  currentModalImgIndex = imgIndex;

  updateLightboxContent();

  const modal = document.getElementById('lightboxModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  if (!currentModalProject) return;

  const pData = translations[currentLang]?.portfolio?.projects?.[currentModalProject.id] || {
    title: currentModalProject.id,
    tag: currentModalProject.materials,
    loc: currentModalProject.location,
    desc: ''
  };

  const modalImg = document.getElementById('lightboxImage');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalLocation = document.getElementById('lightboxLocation');
  const modalDesc = document.getElementById('lightboxDesc');
  const modalCounter = document.getElementById('lightboxCounter');
  const thumbsContainer = document.getElementById('lightboxThumbs');

  modalImg.src = currentModalProject.images[currentModalImgIndex];
  modalTitle.textContent = pData.title;
  modalLocation.textContent = `📍 ${pData.loc} • 🔨 ${currentModalProject.materials}`;
  modalDesc.textContent = pData.desc;
  modalCounter.textContent = `${currentModalImgIndex + 1} / ${currentModalProject.images.length}`;

  // Update thumbs
  thumbsContainer.innerHTML = '';
  currentModalProject.images.forEach((img, idx) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.className = `lightbox-thumb ${idx === currentModalImgIndex ? 'active' : ''}`;
    thumb.onclick = () => {
      currentModalImgIndex = idx;
      updateLightboxContent();
    };
    thumbsContainer.appendChild(thumb);
  });
}

function prevLightboxImage() {
  if (!currentModalProject) return;
  currentModalImgIndex = (currentModalImgIndex - 1 + currentModalProject.images.length) % currentModalProject.images.length;
  updateLightboxContent();
}

function nextLightboxImage() {
  if (!currentModalProject) return;
  currentModalImgIndex = (currentModalImgIndex + 1) % currentModalProject.images.length;
  updateLightboxContent();
}

function setupLightboxListeners() {
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const backdrop = document.getElementById('lightboxBackdrop');

  if (closeBtn) closeBtn.onclick = closeLightbox;
  if (backdrop) backdrop.onclick = closeLightbox;
  if (prevBtn) prevBtn.onclick = prevLightboxImage;
  if (nextBtn) nextBtn.onclick = nextLightboxImage;

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightboxImage();
    if (e.key === 'ArrowRight') nextLightboxImage();
  });
}

// Expose to window
window.initGallery = initGallery;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.prevLightboxImage = prevLightboxImage;
window.nextLightboxImage = nextLightboxImage;

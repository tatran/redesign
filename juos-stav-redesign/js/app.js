const root = document.documentElement;
const languageButtons = document.querySelectorAll('[data-lang]');
const themeToggle = document.querySelector('#theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
const menuToggle = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#site-nav');
const desktop = matchMedia('(min-width: 811px)');
const form = document.querySelector('#inquiry-form');
const topic = form.elements.namedItem('topic');
const contactMap = document.querySelector('#contact-map');
const mapUrl = new URL(contactMap.src);
const photoDialog = document.querySelector('#photo-dialog');
const dialogImage = photoDialog.querySelector('img');
const dialogCaption = photoDialog.querySelector('figcaption');
let currentLanguage;
let selectedTheme = readPreference('juos-theme');

function readPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Switching still works when browser storage is disabled.
  }
}

function setLanguage(language) {
  currentLanguage = Object.hasOwn(translations, language) ? language : 'sk';
  const copy = translations[currentLanguage];

  root.lang = currentLanguage;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  contactMap.title = copy.mapTitle;
  if (mapUrl.searchParams.get('hl') !== currentLanguage) {
    mapUrl.searchParams.set('hl', currentLanguage);
    contactMap.src = mapUrl.href;
  }
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = copy[element.dataset.i18nAlt];
  });
  languageButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage));
  });
}

function syncTheme() {
  const dark = selectedTheme === 'dark' || (selectedTheme !== 'light' && systemTheme.matches);
  root.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeColor.content = dark ? '#070d17' : '#f8fafc';
}

function setMenuOpen(open) {
  navigation.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
}

const requestedLanguage = new URLSearchParams(location.search).get('lang');
setLanguage(Object.hasOwn(translations, requestedLanguage) ? requestedLanguage : readPreference('juos-language'));
syncTheme();
root.classList.add('has-js');

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
    savePreference('juos-language', currentLanguage);
    if (location.protocol === 'http:' || location.protocol === 'https:') {
      const url = new URL(location.href);
      url.searchParams.set('lang', currentLanguage);
      history.replaceState(null, '', url);
    }
  });
});

themeToggle.addEventListener('click', () => {
  selectedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  savePreference('juos-theme', selectedTheme);
  syncTheme();
});
systemTheme.addEventListener('change', syncTheme);

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'false';
  setMenuOpen(open);
  if (open) navigation.querySelector('a').focus();
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
desktop.addEventListener('change', () => setMenuOpen(false));

document.querySelectorAll('[data-topic]').forEach(link => {
  link.addEventListener('click', () => {
    topic.value = link.dataset.topic;
    form.elements.namedItem('name').focus({ preventScroll: true });
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const copy = translations[currentLanguage];
  const service = data.get('topic') ? topic.selectedOptions[0].textContent : '';
  const subject = service ? copy.formTitle + ' – ' + service : copy.formTitle;
  const body = [
    copy.name + ': ' + data.get('name').trim(),
    copy.email + ': ' + data.get('email').trim(),
    ...(service ? [copy.topic + ': ' + service] : []),
    '',
    copy.message + ':',
    data.get('message').trim(),
  ].join('\r\n');
  location.href = 'mailto:ostrovsky.juraj@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});

document.querySelectorAll('.project-card').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof photoDialog.showModal !== 'function') return;

    event.preventDefault();
    dialogImage.src = link.href;
    dialogImage.alt = link.querySelector('img').alt;
    dialogCaption.textContent = link.querySelector('strong').textContent;
    photoDialog.showModal();
  });
});
photoDialog.addEventListener('click', event => {
  if (event.target === photoDialog) photoDialog.close();
});

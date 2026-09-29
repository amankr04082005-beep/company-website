const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const readingProgress = document.querySelector('.reading-progress span');
const navSections = [...document.querySelectorAll('main section[id]')];

function updateActiveNavigation() {
  const activeSection = navSections.filter((section) => section.getBoundingClientRect().top <= 150).pop();
  nav.querySelectorAll('a').forEach((link) => {
    if (activeSection && link.getAttribute('href') === `#${activeSection.id}`) {
      link.setAttribute('aria-current', 'location');
    } else if (!link.hasAttribute('aria-current') || link.getAttribute('aria-current') !== 'page') {
      link.removeAttribute('aria-current');
    }
  });
}

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 28);
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  readingProgress.style.transform = `scaleX(${progress})`;
  if (navSections.length) updateActiveNavigation();
}, { passive: true });

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

if (navSections.length) updateActiveNavigation();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const projectRail = document.querySelector('.project-rail');
if (projectRail) {
  document.querySelector('.project-controls .prev')?.addEventListener('click', () => {
    projectRail.scrollBy({ left: -projectRail.clientWidth * 0.72, behavior: 'smooth' });
  });
  document.querySelector('.project-controls .next')?.addEventListener('click', () => {
    projectRail.scrollBy({ left: projectRail.clientWidth * 0.72, behavior: 'smooth' });
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(formData.get('subject').trim());
    const body = encodeURIComponent(`Name: ${formData.get('name').trim()}\nEmail: ${formData.get('email').trim()}\n\n${formData.get('message').trim()}`);
    document.querySelector('#form-status').textContent = 'Opening your email application…';
    window.location.href = `mailto:info@stcsindia.com?subject=${subject}&body=${body}`;
  });
}

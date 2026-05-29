// ── MENU TOGGLE ──────────────────────────────
const menuIcon = document.querySelector('#menu-icon');
const navbar   = document.querySelector('.navbar');

if (menuIcon) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

// ── STICKY HEADER ────────────────────────────
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('sticky', window.scrollY > 80);

  if (menuIcon) menuIcon.classList.remove('bx-x');
  if (navbar)   navbar.classList.remove('active');

  // active nav link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  sections.forEach(sec => {
    const top    = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`header nav a[href*="${id}"]`);
      if (link) link.classList.add('active');
    }
  });

  // footer
  const footer = document.querySelector('footer');
  if (footer) {
    footer.classList.toggle(
      'show-animate',
      window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight - 5
    );
  }

  revealOnScroll();
});

// ── FADE + SLIDE-UP REVEAL ───────────────────
function revealOnScroll() {
  document.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('revealed');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(revealOnScroll, 80);
  const home = document.querySelector('.home');
  if (home) home.classList.add('show-animate');
});

// Mobile menu toggle
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');

logo.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    const isOpen = navLinks.classList.contains('show');
    hamburgerIcon.style.display = isOpen ? 'none' : 'inline';
    closeIcon.style.display = isOpen ? 'inline' : 'none';
  });
});

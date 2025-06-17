import { renderGallery, renderTips } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  if (document.getElementById('gallery')) renderGallery();
  if (document.getElementById('tips-list')) renderTips();
});

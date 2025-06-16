import { fetchItems } from './api.js';

export async function renderGallery() {
  const gallery = document.getElementById('gallery');
  const items = await fetchItems();
  items.slice(0,15).forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button data-id="${item.id}">Details</button>
    `;
    gallery.append(card);
  });
  attachModalHandlers(items);
}

function attachModalHandlers(items) {
  const modal = document.getElementById('item-modal');
  const content = modal.querySelector('.modal-content');
  document.getElementById('gallery').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      const id = +e.target.dataset.id;
      const item = items.find(i => i.id === id);
      content.innerHTML = `
        <h2>${item.name}</h2>
        <img src="${item.img}" alt="${item.name}">
        <p>${item.desc}</p>
        <p>${item.price}</p>
      `;
      modal.showModal();
    }
  });
  modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
}

export function renderTips() {
  const tips = [
    'Layer neutral tones for a classic look.',
    'Mix textures: silk with denim.',
  ];
  const list = document.getElementById('tips-list');
  tips.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    list.append(li);
  });
}
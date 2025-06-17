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
      'Layer neutral tones (beige, ivory, taupe) for a timeless chic look.',
      'Mix prints—start small with a striped tee and floral skirt to keep it balanced.',
      'Go monochrome: head-to-toe one color instantly looks expensive.',
      'Add a statement belt to cinch waists and elevate dresses or oversized blazers.',
      'Use a pop of color in accessories—bright bag or shoes against a muted outfit.',
      'Pair heavy fabrics (denim, leather) with light ones (silk, chiffon) for contrast.',
      'Tuck in tops or do a half-tuck to define your waist without full commitment.',
      'Roll up sleeves and pant hems to show off shoes and add a laid-back edge.',
      'Try layering a slip dress over a plain tee for a 90s revival vibe.',
      'Balance proportions: team wide-leg trousers with a fitted top (and vice versa).',
      'Play with textures: velvet blazer + satin cami + lace camisole underneath.',
      'Elevate basics by tucking a crisp white shirt into high-waisted jeans.',
      'Statement sleeves (puff, balloon, bell) turn a simple piece into a focal point.',
      'Invest in a capsule wardrobe: 5 versatile tops + 5 bottoms = endless combos.',
      'Opt for sustainable fabrics—linen and organic cotton breathe better and last longer.'
    ];
  
    const list = document.getElementById('tips-list');
    tips.forEach(t => {
      const li = document.createElement('li');
      li.textContent = t;
      list.append(li);
    });
  }
  
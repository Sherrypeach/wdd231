const directory = document.getElementById('directory');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

gridBtn.addEventListener('click', () => {
  directory.classList.add('grid-view');
  directory.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  directory.classList.add('list-view');
  directory.classList.remove('grid-view');
});

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error('Fetch failed');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    directory.innerHTML = '<p>Failed to load members.</p>';
    console.error(error);
  }
}

function displayMembers(members) {
  directory.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name} logo" loading="lazy" />
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.websiteUrl}" target="_blank" rel="noopener noreferrer">${member.websiteUrl}</a>
    `;
    directory.appendChild(card);
  });
}

getMembers();

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/discover.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('discover-grid');
            data.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'discover-card';
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure><img src="${item.image}" alt="${item.name}"></figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button>Learn More</button>
                `;
                grid.appendChild(card);
            });
        });

    const messageContainer = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();

    if (!lastVisit) {
        messageContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (diffDays < 1) {
            messageContainer.textContent = "Back so soon! Awesome!";
        } else if (diffDays === 1) {
            messageContainer.textContent = `You last visited 1 day ago.`;
        } else {
            messageContainer.textContent = `You last visited ${diffDays} days ago.`;
        }
    }
    localStorage.setItem('lastVisit', now);
});
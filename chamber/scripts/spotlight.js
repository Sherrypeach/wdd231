async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    
    const goldSilver = data.members.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
    
    // Randomize and select 2-3 members
    const spotlights = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);
  
    const container = document.getElementById('spotlight-cards');
    container.innerHTML = spotlights.map(member => `
      <div class="card">
        <img src="${member.logo}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership: ${member.membership}</p>
      </div>
    `).join('');
  }
  
  loadSpotlights();
  
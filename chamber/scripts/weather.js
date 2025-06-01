const apiKey = "YOUR_API_KEY"; // replace with your OpenWeatherMap API key
const lat = "16.7735"; // Example: Timbuktu latitude
const lon = "-3.0074"; // Example: Timbuktu longitude

async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`);
  const data = await response.json();

  const current = `
    <p>Temperature: ${data.current.temp}°C</p>
    <p>${data.current.weather[0].description}</p>
  `;
  document.getElementById('current-weather').innerHTML = current;

  const forecast = data.daily.slice(1, 4).map(day => {
    const date = new Date(day.dt * 1000);
    return `<p>${date.toLocaleDateString(undefined, { weekday: 'long' })}: ${day.temp.day}°C</p>`;
  }).join('');
  document.getElementById('forecast').innerHTML = forecast;
}

getWeather();

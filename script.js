
import { apiKey } from "./api.js";

document.getElementById('getWeather').addEventListener('click', function() {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('City not found');
          }
          return response.json();
      })
      .then(data => {
          const weatherDiv = document.getElementById('weather');
          weatherDiv.innerHTML = `
              <h2>Weather in ${data.name}</h2>
              <p>Temperature: ${data.main.temp} °C</p>
              <p>Weather: ${data.weather[0].description}</p>
              <p>Humidity: ${data.main.humidity}%</p>
          `;
      })
      .catch(error => {
          document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
      });
});
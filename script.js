const apiKey = "1310a44dcd474168a5743223251205"; 

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      weatherResult.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Weather: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind: ${data.current.wind_kph} km/h</p>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

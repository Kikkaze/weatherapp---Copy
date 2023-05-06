function showTemp(response) {
  console.log(response);
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature");
  let temp = Math.round(response.data.main.temp);
  temperature.innerHTML = `${temp}`;
  let humidity = document.querySelector("#humidity");
  let hum = Math.round(response.data.main.humidity);
  humidity.innerHTML = `${hum}`;
  let windSpeed = document.querySelector("#wind");
  let wind = Math.round(response.data.wind.speed);
  windSpeed.innerHTML = `${wind}`;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
}

function searchCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  let city = document.querySelector("#city-input");
  h1.innerHTML = city.value;
  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

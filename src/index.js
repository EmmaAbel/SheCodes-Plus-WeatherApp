let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octobter",
  "November",
  "December",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let month = months[now.getMonth()];
let year = now.getFullYear();
let date = now.getDate();
let currentDate = `Last updated ${day}, ${month} ${date}, ${year} at ${hour}:${minutes}`;
let showDate = document.querySelector(".timeDate");
showDate.innerHTML = currentDate;

function currentTemp(response) {
  let apiKey = "6cd400507dc4152e1e63d463507ab0e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=${apiKey}&units=metric`;
  console.log(response.data);
  console.log(response.data.main.temp);
  let cityTemp = Math.round(response.data.main.temp);
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = `${cityTemp}`;
  let feelsLike = Math.round(response.data.main.feels_like);
  console.log(response.data.main.feels_like);
  let feelsTemp = document.querySelector(".feelsTemp");
  feelsTemp.innerHTML = `Feels like ${feelsLike}°C`;
  let windy = Math.round(response.data.wind.speed);
  console.log(response.data.wind.speed);
  let wind = document.querySelector(".wind");
  wind.innerHTML = `Wind speed ${windy} m/s`;
}
let apiKey = "6cd400507dc4152e1e63d463507ab0e3";
let apiUrlNow = `https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=${apiKey}&units=metric`;
axios.get(apiUrlNow).then(currentTemp);

function showTemp(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let cityTemp = Math.round(response.data.main.temp);
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = `${cityTemp}`;
  let feelsLike = Math.round(response.data.main.feels_like);
  console.log(response.data.main.feels_like);
  let feelsTemp = document.querySelector(".feelsTemp");
  feelsTemp.innerHTML = `Feels like ${feelsLike}°C`;
  let windy = Math.round(response.data.wind.speed);
  console.log(response.data.wind.speed);
  let wind = document.querySelector(".wind");
  wind.innerHTML = `Wind speed ${windy} m/s`;
}

function whichCity(event) {
  event.preventDefault();
  let where = document.querySelector("#inputCity");
  let city = document.querySelector(".city");
  let apiKey = "6cd400507dc4152e1e63d463507ab0e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${where.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  city.innerHTML = where.value;
  axios.get(apiUrl).then(showTemp);
}
let searchCity = document.querySelector("#searchbar");
searchCity.addEventListener("submit", whichCity);

function locationTemp(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let cityTemp = Math.round(response.data.main.temp);
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = `${cityTemp}`;
  let feelsLike = Math.round(response.data.main.feels_like);
  console.log(response.data.main.feels_like);
  let feelsTemp = document.querySelector(".feelsTemp");
  feelsTemp.innerHTML = `Feels like ${feelsLike}°C`;
  let windy = Math.round(response.data.wind.speed);
  console.log(response.data.wind.speed);
  let wind = document.querySelector(".wind");
  wind.innerHTML = `Wind speed ${windy} m/s`;
  let locationCity = response.data.name;
  let city = document.querySelector(".city");
  city.innerHTML = `${locationCity}`;
}

function handlePosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiKey = "6cd400507dc4152e1e63d463507ab0e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(locationTemp);
}

function currentLocation(position) {
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let currentCity = document.querySelector("#currentCity");
currentCity.addEventListener("click", currentLocation);
//function celciusTemperature(event) {
//event.preventDefault();
//let temperature = document.querySelector(".temperature");
//temperature.innerHTML = "13";
//}
//function fahrenheitTemperature(event) {
//event.preventDefault();
//let temperature = document.querySelector(".temperature");
//let temp = 13;
//let fahrenheitTemp = Math.round(temp * (9 / 5) + 32);
//console.log(fahrenheitTemp);
//temperature.innerHTML = fahrenheitTemp;
//}
//let celciusUnit = document.querySelector("#celcius-link");
//celciusUnit.addEventListener("click", celciusTemperature);
//let fahrenheitUnit = document.querySelector("#fahrenheit-link");
//fahrenheitUnit.addEventListener("click", fahrenheitTemperature);

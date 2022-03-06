let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let city = prompt("Enter a city?");
city = city.toLowerCase();
city = city.trim();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let celciusTemp = Math.round(temperature);
  let fahrenheitTemp = Math.round(temperature * (9 / 5) + 32);
  let humidity = weather[city].humidity;
  let capsCity = city.charAt(0).toUpperCase() + city.slice(1);
  alert(
    `It is currently ${celciusTemp}°C (${fahrenheitTemp}°F) in ${capsCity} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

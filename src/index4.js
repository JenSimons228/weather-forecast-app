// Note: Weather icons, celsius and fahrenheit buttons and future weather conditions not working for week 5 homework
// Show dates for today and next 5 days

let now = new Date();
let day1 = new Date();
day1.setDate(new Date().getDate() + 1);
let day2 = new Date();
day2.setDate(new Date().getDate() + 2);
let day3 = new Date();
day3.setDate(new Date().getDate() + 3);
let day4 = new Date();
day4.setDate(new Date().getDate() + 4);
let day5 = new Date();
day5.setDate(new Date().getDate() + 5);

let date = now.getDate();
let day1Date = day1.getDate();
let day2Date = day2.getDate();
let day3Date = day3.getDate();
let day4Date = day4.getDate();
let day5Date = day5.getDate();

let year = now.getFullYear();
let day1Year = day1.getFullYear();
let day2Year = day2.getFullYear();
let day3Year = day3.getFullYear();
let day4Year = day4.getFullYear();
let day5Year = day5.getFullYear();

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
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let day1Month = months[day1.getMonth()];
let day2Month = months[day2.getMonth()];
let day3Month = months[day3.getMonth()];
let day4Month = months[day4.getMonth()];
let day5Month = months[day5.getMonth()];

let h5 = document.querySelector("h5");
h5.innerHTML = `${date} ${month} ${year}`;

let day1DateText = document.querySelector("#day1-date");
day1DateText.innerHTML = `${day1Date} ${day1Month} ${day1Year}`;

let day2DateText = document.querySelector("#day2-date");
day2DateText.innerHTML = `${day2Date} ${day2Month} ${day2Year}`;

let day3DateText = document.querySelector("#day3-date");
day3DateText.innerHTML = `${day3Date} ${day3Month} ${day3Year}`;

let day4DateText = document.querySelector("#day4-date");
day4DateText.innerHTML = `${day4Date} ${day4Month} ${day4Year}`;

let day5DateText = document.querySelector("#day5-date");
day5DateText.innerHTML = `${day5Date} ${day5Month} ${day5Year}`;

// City search field

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = `${temperature}°C`;
  let mainDescription = response.data.weather[0].description;
  let description = document.querySelector("#main-description");
  description.innerHTML = `Conditions: ${mainDescription}`;
  console.log(response);
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = cityInput.value;
  let city = cityInput.value;
  let unit = "metric";
  let apiKey = "20b8554eeba454a5c2dc8a5569e82273";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

let refreshButton = document.querySelector("#refresh-button");
refreshButton.addEventListener("click", search);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// My location button

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = `${temperature}°C`;
  let mainDescription = response.data.weather[0].description;
  let description = document.querySelector("#main-description");
  description.innerHTML = `Conditions: ${mainDescription}`;
}
function myPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let apiKey = "20b8554eeba454a5c2dc8a5569e82273";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}
function myLocationButton() {
  let placeMain = document.querySelector("h1");
  placeMain.innerHTML = "Your current location";
  let cityInput = document.querySelector("#city-input");
  cityInput.value = placeMain.innerHTML;
  navigator.geolocation.getCurrentPosition(myPosition);
}
let myCity = document.querySelector("#my-location-button");
myCity.addEventListener("click", myLocationButton);

// Default weather info for London

function showDefaultWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = `${temperature}°C`;
  let mainDescription = response.data.weather[0].description;
  let description = document.querySelector("#main-description");
  description.innerHTML = `Conditions: ${mainDescription}`;
}

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=20b8554eeba454a5c2dc8a5569e82273`;
axios.get(apiUrl).then(showDefaultWeather);

// Celsius and fahrenheit buttons

function replaceWithF(event) {
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = "63°F";
}
let fbutton = document.querySelector("#fbutton");
fbutton.addEventListener("click", replaceWithF);

function replaceWithC(event) {
  let degrees = document.querySelector("#main-temp");
  degrees.innerHTML = "17°C";
}
let cbutton = document.querySelector("#cbutton");
cbutton.addEventListener("click", replaceWithC);

let weather = {
  Paris: {
    temp: 19.7,
    humidity: 80
  },
  Tokyo: {
    temp: 17.3,
    humidity: 50
  },
  Lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "San Francisco": {
    temp: 20.9,
    humidity: 100
  },
  Moscow: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city");
city = city.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
city = city.trim();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemp = Math.round(temperature);
  let fahrenheitTemp = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It's currently ${celsiusTemp}°C (${fahrenheitTemp}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, I don't know the weather for ${city}, please try going to https://www.google.com/search?q=weather+${city}`
  );
}

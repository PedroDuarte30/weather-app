function displayWeather(data) {
    const weatherCard = document.getElementById("weather-display");

    //Insert the data
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}ºC`;

    //Show the card
    weatherCard.classList.remove("hidden");
    weatherCard.classList.add("active");
}
//Element selection
const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");

//Form submission event
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (city) {
        getWeatherData(city); // This function “lives” in api.js
    }
});


function displayWeather(data) {
    const weatherCard = document.getElementById("weather-display");
    const weatherIcon = document.getElementById("weather-icon");

    //Insert the data
    document.getElementById("city-name").textContent = data.name;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}ºC`;
    document.getElementById("weather-icon").style.display = "block";

    //Search for the official OpenWeather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description; // Accessibility
    weatherIcon.style.display = "block";

    //Show the card
    weatherCard.classList.remove("hidden");
    weatherCard.classList.add("active");

    const temp = data.main.temp;
    updateBackground(temp);
}

function showError(message) {
    const weatherCard = document.getElementById("weather-display");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const weatherIcon = document.getElementById("weather-icon");

    //Make the card visible to show the message
    weatherCard.classList.remove("hidden");
    weatherCard.classList.add("active");

    //Defines the error message 
    cityName.textContent = `⚠️ ${message}`;

    //Securely clears old values
    temperature.textContent = "";
    
    //Hide the icon so that the empty or “broken” square does not appear.
    if (weatherIcon) {
        weatherIcon.src = "";
        weatherIcon.style.display = "none";
    }
}
function updateBackground(temp) {
    const body = document.body;
    
    if (temp <= 15) {
        //Freezing cold (Bright blue)
        body.style.background = "linear-gradient(135deg, #74ebd5 0%, #9face6 100%)";
    } else if (temp > 15 && temp <= 22) {
        //Cool/Mild (Aqua green or Light blue) - 19°C 
        body.style.background = "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)";
    } else if (temp > 22 && temp <= 30) {
        //Hot (Orange/Yellow)
        body.style.background = "linear-gradient(135deg, #f6d365 0%, #fda085 100%)";
    } else {
        // Very Hot (Red/Pink)
        body.style.background = "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)";
    }
}
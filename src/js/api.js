const API_KEY = "560cb9cf84c2c0ec880792a5ec08b42a";

/**
 * Function to retrieve meteorological data
 * @param {string} city - Name of city entered by user
 * */

async function getWeatherData(city) {
    const lang = 'pt';
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}&lang=${lang}`;

    try {
        const response = await fetch(url);

        //Check if the response was successful (status 200-299)
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found");
            }
            throw new Error("Error loading weather data.");
        }

        const data = await response.json();

        //Call the function that will handle the display (it will be created in main.js)
        displayWeather(data);

    } catch (error) {
        console.log("API Error:", error.message);
        showError(error.message);
    }
}


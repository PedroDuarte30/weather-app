# 📋 Weather App (Semantic & Mobile First)

A modern weather forecast application, built with a focus on **accessibility**, **mobile performance**, and **clean code**. This project consumes real-time data from the OpenWeather API to provide accurate climate information with a seamless user experience.

---

## 🚀 Technologies and Concepts

For this project, I prioritized web development best practices and modern standards:

### 🏗️ Architecture & Semantics
* **Semantic HTML5:** Full use of structural tags like `<main>`, `<article>`, and `<section>` to ensure better SEO and screen reader compatibility.
* **A11y (Accessibility):** Implementation of `aria-live` attributes for dynamic updates and high-contrast color palettes.

### 📱 Styling Strategy
* **Mobile First CSS:** Styling logic starting from the smallest screens up, using **CSS Grid** and **Flexbox** for fluid responsiveness without unnecessary media query bloat.
* **Custom Properties:** Usage of CSS Variables for easy theme maintenance.

### ⚙️ Logic & Workflow
* **Asynchronous JavaScript:** Robust implementation of `Async/Await` and `Fetch API` for real-time data manipulation and error handling.
* **Git Flow:** Professional version management through organized branches:
    * `main`: Production-ready code.
    * `develop`: Integration branch for new features.
    * `feature/*`: Granular task development.

---

2. **Configure your API Key:**
   This project requires an API Key from [OpenWeatherMap](https://openweathermap.org/).
   * Create a file named `config.js` in the js folder.
   * Add the following code:
     ```javascript
     const API_KEY = "YOUR_API_KEY_HERE";
     ```

3. **Open the project:**
   Simply open `index.html` in your browser or use the **Live Server** extension in VS Code.

---

## 📸 Preview
<img width="1909" height="891" alt="Captura de ecrã 2026-02-22 155530" src="https://github.com/user-attachments/assets/a80f8da5-f461-4215-9f0b-e8cb6e0e7ec3" />


## 📄 License
This project is under the MIT License.

## 🛠️ How to Run

1. **Clone the repository:**
   https://github.com/PedroDuarte30/weather-app.git 

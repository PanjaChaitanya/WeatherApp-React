# **WeatherApp-React** ☁️

[![GitHub stars](https://img.shields.io/github/stars/PanjaChaitanya/WeatherApp-React?style=social)](https://github.com/PanjaChaitanya/WeatherApp-React) [![GitHub forks](https://img.shields.io/github/forks/PanjaChaitanya/WeatherApp-React?style=social)](https://github.com/PanjaChaitanya/WeatherApp-React) [![License: MIT](https://img.shields.io/badge/License-MIT-green)]()

## 🌐 Live Demo

&#x20;*Screenshot: WeatherApp-React running in a mobile browser (live at [weatherapp-vite.vercel.app](https://weatherapp-vite.vercel.app/)).*

Visit the live app to see current weather conditions in action. WeatherApp-React fetches **real-time weather data** from OpenWeatherMap’s API, which “provides comprehensive weather details” for any location. Users can enter a city name or use the current-location button to load local weather (via Geolocation) – for example, searching **“New York City”** retrieves its latest temperature and conditions. The UI (as shown above) highlights the current temperature, weather icon, and other details clearly.

## 📖 Project Description

WeatherApp-React is a responsive web app that shows the current weather and forecast for any city. It’s built with **React** (UI) and **Vite** (dev server/bundler) for a modern, fast setup. The app uses the browser’s Geolocation API and the OpenWeatherMap API to retrieve and display weather information (temperature, condition, humidity, etc.) in real time. It’s useful for quickly checking live weather conditions anywhere in the world, with a clean UI that adapts to desktop and mobile screens.

## ✨ Features

* 🔎 **Search by City:** Type a city name and press Enter to fetch its current weather.
* 📍 **Use Current Location:** Click the “Current Location” button to automatically get weather for your location.
* 🌡️ **Live Data:** Displays real-time temperature, condition (sunny, cloudy, etc.), humidity, wind, and more.
* 📅 **Forecast:** Shows daily forecasts (filtered from 5-day data) alongside current conditions.
* 📱 **Responsive Design:** The layout adapts for mobile and desktop (built with React components and Tailwind CSS).
* 🎨 **Custom Icons:** Uses weather icons matching conditions for visual clarity.

## 🛠️ Tech Stack

* **React** – JavaScript library for building the UI.
* **Vite** – Modern build tool and dev server (lightning-fast hot reload).
* **Tailwind CSS** – Utility-first CSS framework for styling.
* **OpenWeatherMap API** – Fetches current weather and forecast data.
* **Geolocation API** – Browser API to get user’s latitude/longitude.

This stack (“built with React and Vite”) enables quick development and a sleek UI. Tailwind CSS ensures the app is **fully responsive** across devices.

## 📷 Screenshots

&#x20;*Screenshot: WeatherApp-React UI on a smartphone (dark theme).* The app’s clean interface (above) is built with React and styled with Tailwind CSS. It prominently shows the current temperature and icon.

&#x20;*Screenshot: Main weather display (example city).* In this screenshot, WeatherApp-React is showing the current weather (24°C, cloudy) for a searched city. The layout uses card-like panels and clear typography to present weather data in an easy-to-read format.

## 🚀 Getting Started

To run WeatherApp-React locally:

1. **Clone the repo:** `git clone https://github.com/PanjaChaitanya/WeatherApp-React.git`
2. **Install dependencies:** Run `npm install` in the project directory.
3. **Obtain an API key:** Sign up at [OpenWeatherMap](https://openweathermap.org/) and set your key in a `.env` file (e.g. `WEATHER_API_KEY=YOUR_KEY`).
4. **Run the app:** Execute `npm run dev` to start the development server (Vite will serve the app at `http://localhost:3000` by default).
5. **View in browser:** Open the local address and try searching for cities to see live weather data.

## 📁 Folder Structure

* `public/` – Static files (e.g. `index.html`, images).
* `src/` – React source code and components (including `Header.jsx`, `Weather.jsx`, etc.).
* `src/Components/images/` – Asset images (icons, logos, etc.).
* `screenshots/` – Project screenshot images (for the README).
* `.env` – Environment file storing the `WEATHER_API_KEY`.
* `README.md`, `.gitignore`, etc. – Config and documentation files.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with improvements or bug fixes. Follow standard GitHub workflow: fork the repo, create a feature branch, commit your changes, and open a PR. As with many open-source projects, “contributions are always welcome” (please see issues and pull requests).

## 📄 License

This project does not include a license file (no license specified). (If MIT or another license is intended, please add it.)

## 👤 Author

**Panja Chaitanya** – *Full Stack Developer* – [GitHub Profile](https://github.com/PanjaChaitanya)

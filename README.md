# 🌍 Origo — Weather & Discover

> A beautiful, zero-dependency weather app built with pure HTML5, CSS3, and Vanilla JavaScript.

![Origo Weather App](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🔍 **City Search** — Search any city worldwide with real-time weather
- 📍 **Geolocation** — Get weather for your current location
- 🎨 **Dynamic Themes** — Background changes based on weather condition
- 🎬 **Animated Canvas** — Rain, snow, lightning FX via Canvas API
- 📅 **5-Day Forecast** — Daily weather cards with icons
- 🏙️ **City Spotlight** — Wikipedia photo + city description
- 🗺️ **Tourist Attractions** — Real data from OpenStreetMap (Overpass API)
- ☕ **Popular Cafes** — Local cafes with Google Maps directions
- 🕓 **Search History** — Persisted in localStorage
- 📱 **Fully Responsive** — Mobile-first design

## 🚀 Getting Started

### Standalone Version (No build needed)
Just open `index.html` in any browser — no npm, no installation required!

### React Version
```bash
cd origo
npm install
npm start
```

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 with Custom Properties |
| Logic | Vanilla JavaScript (ES2020+) |
| Weather | [OpenWeatherMap API](https://openweathermap.org/api) |
| Places | [Overpass API (OSM)](https://overpass-api.de/) |
| City Info | [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/) |
| Font | [Outfit — Google Fonts](https://fonts.google.com/specimen/Outfit) |

## 📁 Project Structure

```
origo/
├── index.html              ← Standalone app (no build needed)
├── src/
│   ├── App.js              ← Root React component
│   ├── components/
│   │   ├── SearchBar.js    ← Search + weather display
│   │   └── Forecast.js     ← 5-day forecast cards
│   └── services/
│       └── weatherApi.js   ← OpenWeatherMap API calls
└── public/
    └── index.html
```

## 🌤️ Weather Themes

| Condition | Background |
|---|---|
| ☀️ Clear | Warm amber/orange gradient |
| 🌧️ Rain | Deep blue gradient |
| ❄️ Snow | Ice blue/white |
| ⛈️ Thunderstorm | Dark purple + lightning flash |
| ☁️ Clouds | Silver/grey |
| 🌙 Dark Mode | Deep navy/charcoal |

## 📸 Live Demo

Open `index.html` directly in your browser — no server needed!

---

Made with ❤️ by obscure-01

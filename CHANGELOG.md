# Changelog

All notable changes to Origo are documented in this file.

## [2.0.0] - 2026-04-02 — The Big Upgrade

### Added
- ✨ Standalone `index.html` — zero-dependency version (no npm/build needed)
- 🎬 Canvas-based particle effects: rain, snow, floating particles, lightning flashes
- 🏙️ City Spotlight section with Wikipedia photo and Ken Burns animation
- 🗺️ Top Tourist Attractions via OpenStreetMap Overpass API
- ☕ Popular Cafes via OpenStreetMap, with Google Maps directions
- 💀 Skeleton loaders while places data loads in background
- 💾 Search history persisted in localStorage
- ↑ Scroll-to-top button
- 📖 Wikipedia integration for city description
- ▶ YouTube city tour search button
- 🎨 Full CSS design system with custom properties

### Changed
- Rewrote weather card with larger temperature display and stat grid
- Forecast cards now show weather description below temperature
- Background themes via CSS class (weather-reactive `--wx1`, `--wx2` accent colors)
- Loading state now shows animated dots + spinner ring

### Fixed
- Cross-browser `line-clamp` property compatibility
- Geolocation error handling with user-friendly messages

---

## [1.0.0] - 2026-04-01 — Initial React Release

### Added
- ⚛️ React app with TailwindCSS
- 🔍 City search and weather display
- 📍 Geolocation support
- 📅 5-day forecast
- 🌙 Dark mode toggle
- 🕓 Search history (last 5 cities)
- 🌡 Weather stats: feels like, humidity, wind, country

# 🛰️ Satellite Tracker

Real-time 3D satellite visualization built with Vue 3 and Three.js. Track thousands of satellites orbiting Earth with interactive controls and detailed orbital information.

**[🚀 Live Demo](https://ergunyavuz.github.io/Satellite-tracker/)**

## Features

- Tracking and computing using CELESTRAK TLE data
- Interactive search
- Click satellites for orbital details and trajectory visualization
- GPU-accelerated rendering

## Quick Start

```bash
# Clone and install
git clone https://github.com/ergunyavuz/Satellite-tracker.git
cd Satellite-tracker
npm install

# Development
npm run dev

# Production build
npm run build
```

## Usage

- **Navigate**: Mouse drag to rotate, wheel to zoom
- **Search**: Type satellite names in the top search bar
- **Select**: Click any satellite (white dots) to see details and orbital path
- **Info Panel**: View inclination, period, altitude, velocity, and position

## Tech Stack

- **Vue 3** - Reactive UI framework
- **Three.js** - 3D WebGL rendering
- **Pinia** - State management
- **satellite.js** - Orbital mechanics calculations
- **Vite** - Build tool

## Project Structure

```
src/
├── components/          # Vue UI components
├── core/               # Three.js 3D logic
│   ├── SceneManager.js # Main scene orchestrator
│   ├── Earth.js        # Earth rendering
│   └── satellite/      # Satellite management
├── stores/             # Pinia state
└── main.js            # Entry point
```

## Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push branch (`git push origin feature/name`)
5. Open Pull Request

**Data provided by [CELESTRAK](https://celestrak.org/) • Built with ❤️ for space enthusiasts**

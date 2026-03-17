# Cloud Project Showcase

A production-grade cloud infrastructure showcase built with React + Vite.

## Project Structure

```
cloud-showcase/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Header.module.css
        ├── Hero.jsx
        ├── Hero.module.css
        ├── Terminal.jsx
        ├── Terminal.module.css
        ├── Features.jsx
        ├── Features.module.css
        ├── AdminDashboard.jsx
        ├── AdminDashboard.module.css
        ├── ContactForm.jsx
        └── ContactForm.module.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open http://localhost:3000 in your browser.

## Features
- AWS EC2 Hosting section with live terminal simulation
- 6 feature cards with hover animations
- Admin dashboard with real-time message feed
- Contact form with validation — submitted messages appear live in the dashboard
- Fully responsive (mobile-friendly)
- CSS Modules for scoped, maintainable styles

# Resource Manager — Project 3

Simple single‑page style admin/dashboard demo built with HTML, Bootstrap 5 and vanilla JS.

## Contents
- index.html — Main page with Dashboard
- profile.html — Profile page with employee info
- settings.html — Simple settings (theme + notifications)
- login.html / logout.html 
- style.css — site styles and theme overrides
- logic.js — client logic (theme init, navigation, modals, alerts)
- assets/ — images/icons used by the UI

## Features
- Responsive dashboard layout
- Common sidebar used across pages (inline or injected)
- Simple login/logout flow (demo token in storage)
- Settings page persists theme and notification prefs to localStorage
- Theme support: light / dark / system — applied globally via data-theme
- Inline Bootstrap alerts for forms and modals

## Theme behavior
- Settings page writes `theme` to localStorage with values: `light`, `dark``.

## License
MIT

## Contact
Subhashini Dhamodaran — repo: github.com/subhashini-19/geeksforgeeks-mern-course
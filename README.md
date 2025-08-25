# Md. Almahmud — Flask Portfolio

Premium, responsive, animated personal portfolio built with **Flask + Bootstrap 5 + AOS + GSAP**.

## Features
- Hero with animated typing + gradient glass UI
- About, Skills, Projects, Contact pages
- Dark/Light theme toggle (persists)
- Config via `data.json`
- Deployed-ready: uses `PORT` env var (Render friendly)

## Quickstart

```bash
python -m venv venv
source venv/bin/activate  # on Windows: venv\Scripts\activate
pip install flask
python app.py
# open http://localhost:5000
```

## Deploy on Render
- Use **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `python app.py`
- Add environment variable `PORT` (Render sets automatically).

## Customize
- Edit `data.json` to change info, skills, and projects.
- Styles in `static/css/style.css`, scripts in `static/js/main.js`.

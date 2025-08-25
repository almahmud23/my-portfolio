import os, json
from flask import Flask, render_template, url_for, jsonify

app = Flask(__name__)

def load_profile():
    path = os.path.join(os.path.dirname(__file__), "data.json")
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

PROFILE = load_profile()

@app.context_processor
def inject_globals():
    return dict(PROFILE=PROFILE)

@app.get("/")
def home():
    return render_template("index.html")

@app.get("/projects")
def projects():
    return render_template("projects.html")

@app.get("/contact")
def contact():
    return render_template("contact.html")

@app.get("/api/profile")
def api_profile():
    return PROFILE

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)

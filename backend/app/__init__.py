from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "secpass backend is running!"}

app.mount("/", StaticFiles(directory="../frontend/dist", html=True), name="home")

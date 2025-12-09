from fastapi import FastAPI

app = FastAPI(title="Collaborative Editor Backend", version="1.0")

@app.get("/")
def root():
    return {"message": "Backend API is running"}

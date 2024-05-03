from fastapi import FastAPI
from .controllers import ingredient_controller, auth_controller

app = FastAPI()
app.include_router(ingredient_controller.router)
app.include_router(auth_controller.router)

@app.get("/")
async def root():
    return {"message": "MealPlan API Running!"}
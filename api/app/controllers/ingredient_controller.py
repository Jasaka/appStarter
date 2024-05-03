from fastapi import APIRouter

from ..models.ingredient_model import Ingredient, IngredientResponse
from ..crud import ingredient_crud

router = APIRouter(
    prefix="/ingredients",
    tags=["ingredients"],
    responses={404: {"description": "Not found"}}
)

@router.get("/", response_model=list[IngredientResponse])
async def get_ingredients():
    return ingredient_crud.get_ingredients()

@router.get("/{ingredient_id}", response_model=IngredientResponse)
async def get_ingredient(ingredient_id: str):
    return ingredient_crud.get_ingredient(ingredient_id)

@router.post("/", response_model=IngredientResponse)
async def create_ingredient(ingredient: Ingredient):
    return ingredient_crud.create_ingredient(ingredient.name, ingredient.calories)

@router.put("/{ingredient_id}", response_model=IngredientResponse)
async def update_ingredient(ingredient_id: str, ingredient: Ingredient):
    return ingredient_crud.update_ingredient(ingredient_id, ingredient.name, ingredient.calories)

@router.delete("/{ingredient_id}", response_model=None)
async def delete_ingredient(ingredient_id: str):
    return ingredient_crud.delete_ingredient(ingredient_id)
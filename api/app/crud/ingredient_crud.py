from typing import Optional, cast
import uuid

from fastapi import HTTPException

from .database import Session
from ..models.ingredient_model import Ingredient, IngredientTable


def create_ingredient(name: str, calories: int):
    new_ingredient = IngredientTable(id=uuid.uuid4(), name=name, calories=calories)

    with Session() as session:
        session.add(new_ingredient)
        session.commit()
        session.refresh(new_ingredient)
        return cast(Ingredient, new_ingredient)


def get_ingredient(ingredient_id: str, session: Optional[Session] = None):
    if not session:
        with Session() as session:
            db_ingredient = session.query(IngredientTable).filter(IngredientTable.id == ingredient_id).first()
            if db_ingredient is None:
                raise HTTPException(status_code=404, detail="Ingredient not found")

            return cast(Ingredient, db_ingredient)

    db_ingredient = session.query(IngredientTable).filter(IngredientTable.id == ingredient_id).first()
    if db_ingredient is None:
        raise HTTPException(status_code=404, detail="Ingredient not found")

    return cast(Ingredient, db_ingredient)


def update_ingredient(ingredient_id: str, name: str, calories: int):
    with Session() as session:
        db_ingredient = get_ingredient(ingredient_id, session)

        db_ingredient.name = name
        db_ingredient.calories = calories
        session.commit()
        session.refresh(db_ingredient)
        return cast(Ingredient, db_ingredient)


def delete_ingredient(ingredient_id: str):
    with Session() as session:
        db_ingredient = get_ingredient(ingredient_id, session)
        if db_ingredient:
            session.delete(db_ingredient)
            session.commit()
            return cast(Ingredient, db_ingredient)


def get_ingredients():
    with Session() as session:
        return cast(list[Ingredient], session.query(IngredientTable).all())

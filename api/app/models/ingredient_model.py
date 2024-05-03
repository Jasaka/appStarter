from pydantic import BaseModel, UUID4
from sqlalchemy import Column, Integer, String, UUID
from sqlalchemy.ext.declarative import declarative_base


class Ingredient(BaseModel):
    name: str
    calories: int

    class Config:
        from_attributes = True


class IngredientResponse(Ingredient):
    id: UUID4


BaseTableModel = declarative_base()


class IngredientTable(BaseTableModel):
    __tablename__ = 'ingredients'

    id = Column(UUID, primary_key=True)
    name = Column(String)
    calories = Column(Integer)

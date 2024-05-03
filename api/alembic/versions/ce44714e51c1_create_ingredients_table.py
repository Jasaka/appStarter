"""create ingredients table

Revision ID: ce44714e51c1
Revises: 
Create Date: 2024-04-21 22:22:41.407825

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ce44714e51c1'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'ingredients',
        sa.Column('id', sa.UUID, primary_key=True),
        sa.Column('name', sa.String),
        sa.Column('calories', sa.Integer)
    )


def downgrade() -> None:
    op.drop_table('ingredients')

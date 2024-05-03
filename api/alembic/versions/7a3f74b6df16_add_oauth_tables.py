"""Add oauth tables

Revision ID: 7a3f74b6df16
Revises: ce44714e51c1
Create Date: 2024-04-28 17:33:45.291070

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = '7a3f74b6df16'
down_revision: Union[str, None] = 'ce44714e51c1'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.String(length=255), nullable=False),
        sa.Column('name', sa.String(), nullable=True),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('email_verified', sa.DateTime(), nullable=True),
        sa.Column('image', sa.String(), nullable=True),
        sa.Column('created_at', sa.DateTime(), nullable=False),
        sa.Column('updated_at', sa.DateTime(), nullable=False),
        sa.Column('deleted_at', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email')
    )

    op.create_table(
        'oauth_accounts',
        sa.Column('user_id', sa.String(length=255), nullable=False),
        sa.Column('type', sa.String(), nullable=False),
        sa.Column('provider', sa.String(), nullable=False),
        sa.Column('provider_account_id', sa.String(), nullable=False),
        sa.Column('refresh_token', sa.String(), nullable=True),
        sa.Column('access_token', sa.String(), nullable=True),
        sa.Column('expires_at', sa.Integer(), nullable=True),
        sa.Column('token_type', sa.String(), nullable=True),
        sa.Column('scope', sa.String(), nullable=True),
        sa.Column('id_token', sa.String(), nullable=True),
        sa.Column('session_state', sa.String(), nullable=True),
        sa.Column('created_at', sa.DateTime(), nullable=False),
        sa.Column('updated_at', sa.DateTime(), nullable=False),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('provider', 'provider_account_id')
    )

    op.create_table(
        'oauth_sessions',
        sa.Column('session_token', sa.String(length=255), nullable=False),
        sa.Column('user_id', sa.String(length=255), nullable=False),
        sa.Column('expires', sa.DateTime(), nullable=False),
        sa.Column('created_at', sa.DateTime(), nullable=False),
        sa.Column('updated_at', sa.DateTime(), nullable=False),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('user_id', 'session_token'),
        sa.UniqueConstraint('session_token')
    )

    op.create_table(
        'oauth_verification_tokens',
        sa.Column('identifier', sa.String(length=255), nullable=False),
        sa.Column('token', sa.String(length=255), nullable=False),
        sa.Column('expires', sa.DateTime(), nullable=False),
        sa.ForeignKeyConstraint(['identifier'], ['users.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('identifier', 'token')
    )


def downgrade():
    op.drop_table('oauth_verification_tokens')
    op.drop_table('oauth_sessions')
    op.drop_table('oauth_accounts')
    op.drop_table('users')

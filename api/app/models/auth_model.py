from typing import Optional

from pydantic import BaseModel, ConfigDict
from pydantic.alias_generators import to_camel
from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, TIMESTAMP, PrimaryKeyConstraint, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship


class BaseSchema(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
        from_attributes=True,
    )


class User(BaseSchema):
    id: str
    name: Optional[str] = None
    email: str
    email_verified: Optional[datetime] = None
    image: Optional[str] = None


class OAuthAccount(BaseSchema):
    user_id: str
    type: str
    provider: str
    provider_account_id: str
    refresh_token: Optional[str] = None
    access_token: Optional[str] = None
    expires_at: Optional[int] = None
    token_type: Optional[str] = None
    scope: Optional[str] = None
    id_token: Optional[str] = None
    session_state: Optional[str] = None


class OAuthSession(BaseSchema):
    user_id: str
    expires: datetime
    session_token: str


class OAuthVerificationToken(BaseSchema):
    identifier: str
    expires: datetime
    token: str


class OAuthSessionAndUser(BaseSchema):
    user: User
    session: OAuthSession


BaseTableModel = declarative_base()


class UserTable(BaseTableModel):
    __tablename__ = 'users'

    id = Column(String(255), primary_key=True)
    name = Column(String(255), nullable=True)
    email = Column(String(255))
    email_verified = Column(TIMESTAMP, nullable=True)
    image = Column(Text, nullable=True)
    created_at = Column(TIMESTAMP, nullable=False, default=datetime.utcnow())
    updated_at = Column(TIMESTAMP, nullable=False, default=datetime.utcnow(), onupdate=datetime.utcnow())
    deleted_at = Column(TIMESTAMP, nullable=True)

    oauth_accounts = relationship("OAuthAccountTable", back_populates="user")
    oauth_sessions = relationship("OAuthSessionTable", back_populates="user")
    oauth_verification_tokens = relationship("OAuthVerificationTokenTable", back_populates="user")


class OAuthAccountTable(BaseTableModel):
    __tablename__ = 'oauth_accounts'
    __table_args__ = (PrimaryKeyConstraint('provider', 'provider_account_id'), {})

    user_id = Column(String(255), ForeignKey('users.id'), nullable=False)
    type = Column(String(255), nullable=False)
    provider = Column(String(255), nullable=False)
    provider_account_id = Column(String(255), nullable=False)
    refresh_token = Column(Text, nullable=True)
    access_token = Column(Text, nullable=True)
    expires_at = Column(Integer, nullable=True)
    id_token = Column(Text, nullable=True)
    scope = Column(Text, nullable=True)
    session_state = Column(Text, nullable=True)
    token_type = Column(Text, nullable=True)
    created_at = Column(TIMESTAMP, nullable=False, default=datetime.utcnow())
    updated_at = Column(TIMESTAMP, nullable=False, default=datetime.utcnow(), onupdate=datetime.utcnow())

    user = relationship("UserTable", back_populates="oauth_accounts")


class OAuthSessionTable(BaseTableModel):
    __tablename__ = 'oauth_sessions'
    __table_args__ = (PrimaryKeyConstraint('user_id', 'session_token'), {})

    user_id = Column(String(255), ForeignKey('users.id'), nullable=False)
    expires = Column(TIMESTAMP, nullable=False)
    session_token = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, default=datetime.utcnow())
    updated_at = Column(TIMESTAMP, nullable=False, default=datetime.utcnow(), onupdate=datetime.utcnow())

    user = relationship("UserTable", back_populates="oauth_sessions")


class OAuthVerificationTokenTable(BaseTableModel):
    __tablename__ = 'oauth_verification_token'
    __table_args__ = (PrimaryKeyConstraint('identifier', 'token'), {})

    identifier = Column(String(255), ForeignKey('users.id'), nullable=False)
    expires = Column(TIMESTAMP, nullable=False)
    token = Column(Text, nullable=False)

    user = relationship("UserTable", back_populates="oauth_verification_tokens")

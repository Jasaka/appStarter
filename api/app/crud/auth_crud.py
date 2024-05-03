from typing import cast

from fastapi import HTTPException

from .database import Session
from ..models.auth_model import User, UserTable, OAuthAccount, OAuthAccountTable, OAuthSession, OAuthSessionTable, \
    OAuthVerificationToken, OAuthVerificationTokenTable, OAuthSessionAndUser


# USER MANAGEMENT
def create_user(user: User):
    new_user = UserTable(id=user.id, name=user.name, email=user.email, email_verified=user.email_verified,
                         image=user.image)

    with Session() as session:
        session.add(new_user)
        session.commit()
        session.refresh(new_user)
        return cast(User, new_user)


def get_user(user_id: str):
    with Session() as session:
        db_user = session.query(UserTable).filter(UserTable.id == user_id).first()
        if db_user is None or db_user.deleted_at is not None:
            raise HTTPException(status_code=404, detail="User not found")
        return cast(User, db_user)


def get_user_by_account(provider_id: str, account_id: str):
    with Session() as session:
        db_user = session.query(UserTable) \
            .join(OAuthAccountTable) \
            .filter(OAuthAccountTable \
                    .provider == provider_id,
                    OAuthAccountTable \
                    .provider_account_id == account_id) \
            .first()
        if db_user is None or db_user.deleted_at is not None:
            raise HTTPException(status_code=404, detail="User not found")
        return cast(User, db_user)


def update_user(user_id: str, user: User):
    with Session() as session:
        db_user = session.query(UserTable).filter(UserTable.id == user_id).first()
        if db_user is None or db_user.deleted_at is not None:
            raise HTTPException(status_code=404, detail="User not found")
        db_user.name = user.name
        db_user.email = user.email
        db_user.email_verified = user.email_verified
        db_user.image = user.image
        session.commit()
        session.refresh(db_user)
        return cast(User, db_user)


def link_account(provider_id: str, account: OAuthAccount):
    new_account = OAuthAccountTable(user_id=account.user_id, type=account.type, provider=provider_id,
                                    provider_account_id=account.provider_account_id,
                                    refresh_token=account.refresh_token,
                                    access_token=account.access_token, expires_at=account.expires_at,
                                    token_type=account.token_type, scope=account.scope, id_token=account.id_token,
                                    session_state=account.session_state)
    with Session() as session:
        session.add(new_account)
        session.commit()
        session.refresh(new_account)
        return cast(OAuthAccount, new_account)


def delete_user(user_id: str):
    with Session() as session:
        db_user = session.query(UserTable).filter(UserTable.id == user_id).first()
        if db_user is None:
            raise HTTPException(status_code=404, detail="User not found")
        session.delete(db_user)
        session.commit()
        return cast(User, db_user)


def unlink_account(provider_id: str, account_id: str):
    with Session() as session:
        db_account = session.query(OAuthAccountTable) \
            .filter(OAuthAccountTable.provider == provider_id,
                    OAuthAccountTable.provider_account_id == account_id) \
            .first()
        if db_account is None:
            raise HTTPException(status_code=404, detail="Account not found")
        session.delete(db_account)
        session.commit()
        return cast(OAuthAccount, db_account)


# SESSION MANAGEMENT
def create_session(session: OAuthSession):
    new_session = OAuthSessionTable(session_token=session.session_token, user_id=session.user_id,
                                    expires=session.expires)
    with Session() as session:
        session.add(new_session)
        session.commit()
        session.refresh(new_session)
        return cast(OAuthSession, new_session)


def get_session_and_user(session_token: str):
    with Session() as session:
        db_session = session.query(OAuthSessionTable).filter(OAuthSessionTable.session_token == session_token).first()
        if db_session is None:
            raise HTTPException(status_code=404, detail="Session not found")
        db_user = session.query(UserTable).filter(UserTable.id == db_session.user_id).first()
        if db_user is None or db_user.deleted_at is not None:
            raise HTTPException(status_code=404, detail="User not found")
        return cast(OAuthSessionAndUser, {"user": db_user, "session": db_session})


def update_session(session_token: str, auth_session: OAuthSession):
    with Session() as session:
        db_session = session.query(OAuthSessionTable).filter(OAuthSessionTable.session_token == session_token).first()
        if db_session is None:
            raise HTTPException(status_code=404, detail="Session not found")
        db_session.expires = auth_session.expires
        session.commit()
        session.refresh(db_session)
        return cast(OAuthSession, db_session)


def delete_session(session_token: str):
    with Session() as session:
        db_session = session.query(OAuthSessionTable).filter(OAuthSessionTable.session_token == session_token).first()
        if db_session is None:
            raise HTTPException(status_code=404, detail="Session not found")
        session.delete(db_session)
        session.commit()
        return cast(OAuthSession, db_session)


# VERIFICATION MANAGEMENT
def get_user_by_email(email: str):
    with Session() as session:
        db_user = session.query(UserTable).filter(UserTable.email == email).first()
        if db_user is None or db_user.deleted_at is not None:
            raise HTTPException(status_code=404, detail="User not found")
        return cast(User, db_user)


def create_verification_token(verification_token: OAuthVerificationToken):
    new_verification_token = OAuthVerificationTokenTable(identifier=verification_token.identifier,
                                                         token=verification_token.token, expires=verification_token.expires)
    with Session() as session:
        session.add(new_verification_token)
        session.commit()
        session.refresh(new_verification_token)
        return cast(OAuthVerificationToken, new_verification_token)


def use_verification_token(token: str):
    with Session() as session:
        db_verification_token = session.query(OAuthVerificationTokenTable).filter(
            OAuthVerificationTokenTable.token == token).first()
        if db_verification_token is None:
            raise HTTPException(status_code=404, detail="Verification token not found")
        session.delete(db_verification_token)
        session.commit()
        return cast(OAuthVerificationToken, db_verification_token)

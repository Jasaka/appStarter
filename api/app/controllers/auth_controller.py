from fastapi import APIRouter, Request

from ..crud import auth_crud
from ..models import auth_model

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
    responses={404: {"description": "Not found"}}
)


@router.post("/users", response_model=auth_model.User)
async def create_user(user: auth_model.User):
    print("Create User", user)
    return auth_crud.create_user(user)


@router.get("/users/{user_id}", response_model=auth_model.User)
async def get_user(user_id: str):
    print("Get User", user_id)
    return auth_crud.get_user(user_id)


@router.get("/providers/{provider_id}/accounts/{account_id}", response_model=auth_model.User)
async def get_user_by_account(provider_id: str, account_id: str):
    print("Get User by Account", provider_id, account_id)
    return auth_crud.get_user_by_account(provider_id, account_id)


@router.patch("/users/{user_id}", response_model=auth_model.User)
async def update_user(user_id: str, user: auth_model.User):
    print("Update User", user_id, user)
    return auth_crud.update_user(user_id, user)


@router.post("/providers/{provider_id}/accounts", response_model=auth_model.OAuthAccount)
async def link_account(provider_id: str, request: Request):
    request_json = await request.json()
    print("Link Account", provider_id, request_json)
    account = auth_model.OAuthAccount(**request_json)
    return auth_crud.link_account(provider_id, account)


@router.delete("/users/{user_id}", response_model=auth_model.User)
async def delete_user(user_id: str):
    print("Delete User", user_id)
    return auth_crud.delete_user(user_id)


@router.delete("/providers/{provider_id}/accounts/{account_id}", response_model=auth_model.OAuthAccount)
async def unlink_account(provider_id: str, account_id: str):
    print("Unlink Account", provider_id, account_id)
    return auth_crud.unlink_account(provider_id, account_id)


@router.post("/sessions", response_model=auth_model.OAuthSession)
async def create_session(session: auth_model.OAuthSession):
    print("Create Session", session)
    return auth_crud.create_session(session)


@router.get("/sessions/{session_token}", response_model=auth_model.OAuthSessionAndUser)
async def get_session_and_user(session_token: str):
    print("Get Session and User", session_token)
    return auth_crud.get_session_and_user(session_token)


@router.patch("/sessions/{session_token}", response_model=auth_model.OAuthSession)
async def update_session(session_token: str, session: auth_model.OAuthSession):
    print("Update Session", session_token, session)
    return auth_crud.update_session(session_token, session)


@router.delete("/sessions/{session_token}", response_model=auth_model.OAuthSession)
async def delete_session(session_token: str):
    print("Delete Session", session_token)
    return auth_crud.delete_session(session_token)


@router.get("/users", response_model=auth_model.User)
async def get_user_by_email(email: str):
    print("Get User by Email", email)
    return auth_crud.get_user_by_email(email)


@router.post("/verification", response_model=auth_model.OAuthVerificationToken)
async def create_verification_token(verification_token: auth_model.OAuthVerificationToken):
    print("Create Verification Token", verification_token)
    return auth_crud.create_verification_token(verification_token)


@router.get("/verification/{token}", response_model=auth_model.OAuthVerificationToken)
async def get_verification_token(token: str):
    print("Get Verification Token", token)
    return auth_crud.use_verification_token(token)

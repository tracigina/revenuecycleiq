from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Revenue Cycle IQ API")
api_router = APIRouter(prefix="/api")


# -------- Models --------
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    organization: Optional[str] = Field(default="", max_length=200)
    message: str = Field(..., min_length=1, max_length=5000)


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    organization: str = ""
    message: str
    submitted_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class BookingCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    organization: Optional[str] = Field(default="", max_length=200)
    phone: Optional[str] = Field(default="", max_length=50)
    preferred_date: Optional[str] = Field(default="", max_length=50)
    preferred_time: Optional[str] = Field(default="", max_length=50)
    message: Optional[str] = Field(default="", max_length=5000)


class BookingSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    organization: str = ""
    phone: str = ""
    preferred_date: str = ""
    preferred_time: str = ""
    message: str = ""
    submitted_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# -------- Routes --------
@api_router.get("/")
async def root():
    return {"service": "Revenue Cycle IQ API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


@api_router.post("/contact", response_model=ContactSubmission, status_code=201)
async def create_contact(payload: ContactCreate):
    submission = ContactSubmission(
        name=payload.name.strip(),
        email=payload.email,
        organization=(payload.organization or "").strip(),
        message=payload.message.strip(),
    )
    doc = submission.model_dump()
    await db.contact_submissions.insert_one(doc)
    return submission


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts():
    items = await db.contact_submissions.find({}, {"_id": 0}).sort("submitted_at", -1).to_list(500)
    return items


@api_router.post("/booking", response_model=BookingSubmission, status_code=201)
async def create_booking(payload: BookingCreate):
    submission = BookingSubmission(
        name=payload.name.strip(),
        email=payload.email,
        organization=(payload.organization or "").strip(),
        phone=(payload.phone or "").strip(),
        preferred_date=(payload.preferred_date or "").strip(),
        preferred_time=(payload.preferred_time or "").strip(),
        message=(payload.message or "").strip(),
    )
    doc = submission.model_dump()
    await db.booking_submissions.insert_one(doc)
    return submission


@api_router.get("/booking", response_model=List[BookingSubmission])
async def list_bookings():
    items = await db.booking_submissions.find({}, {"_id": 0}).sort("submitted_at", -1).to_list(500)
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

"""Backend API tests for Revenue Cycle IQ - covers health, contact, booking endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL") or "https://logo-search-bar.preview.emergentagent.com"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health_endpoint(self, session):
        r = session.get(f"{API}/health", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "healthy"
        assert "timestamp" in data


# ---------- Contact ----------
class TestContact:
    def test_create_contact_valid(self, session):
        payload = {
            "name": "TEST_Alice",
            "email": "test_alice@example.com",
            "organization": "TEST_Org",
            "message": "Hello, this is a test submission.",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "submitted_at" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["organization"] == payload["organization"]
        assert data["message"] == payload["message"]

    def test_create_contact_invalid_email(self, session):
        payload = {
            "name": "TEST_Bob",
            "email": "not-an-email",
            "organization": "",
            "message": "Test",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_missing_name(self, session):
        payload = {"email": "x@y.com", "message": "msg"}
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_missing_email(self, session):
        payload = {"name": "TEST", "message": "msg"}
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_missing_message(self, session):
        payload = {"name": "TEST", "email": "x@y.com"}
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_list_contact_excludes_id(self, session):
        # ensure at least one exists
        session.post(f"{API}/contact", json={
            "name": "TEST_List",
            "email": "test_list@example.com",
            "message": "list test",
        }, timeout=15)
        r = session.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        for it in items:
            assert "_id" not in it
            assert "id" in it
            assert "email" in it


# ---------- Booking ----------
class TestBooking:
    def test_create_booking_valid(self, session):
        payload = {
            "name": "TEST_Carol",
            "email": "test_carol@example.com",
            "organization": "TEST_Org",
            "phone": "555-1234",
            "preferred_date": "2026-02-15",
            "preferred_time": "10:00",
            "message": "Want to discuss A/R challenges.",
        }
        r = session.post(f"{API}/booking", json=payload, timeout=15)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str)
        assert "submitted_at" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["preferred_date"] == payload["preferred_date"]
        assert data["preferred_time"] == payload["preferred_time"]

    def test_create_booking_invalid_email(self, session):
        payload = {
            "name": "TEST_Dan",
            "email": "bademail",
            "message": "Test",
        }
        r = session.post(f"{API}/booking", json=payload, timeout=15)
        assert r.status_code == 422

    def test_list_booking_excludes_id(self, session):
        r = session.get(f"{API}/booking", timeout=15)
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        for it in items:
            assert "_id" not in it
            assert "id" in it

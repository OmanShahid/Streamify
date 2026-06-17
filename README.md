# Streamify

Streamify is a full-stack movie and streaming discovery app built with a Django backend and a Next.js frontend. It includes authentication, browsing by genre and category, search, watch history, watchlist, and profile/admin screens.

## Tech Stack

- Backend: Django, Django REST Framework, Simple JWT, django-allauth
- Frontend: Next.js 14, React 18, TypeScript
- UI: Bootstrap, React Bootstrap, Ant Design, Chart.js
- Data: PostgreSQL for the backend database

## Project Structure

- `backend/` - Django project, authentication app, and API endpoints
- `frontend/` - Next.js app, components, hooks, services, and styles
- `.venv/` - Local Python virtual environment used for the backend

## Requirements

- Node.js 18 or newer
- Python 3.12 or newer
- PostgreSQL running locally

## Local Setup

### 1. Backend

From the project root, activate the Python virtual environment and install dependencies:

```powershell
& ".venv/Scripts/Activate.ps1"
pip install django djangorestframework djangorestframework-simplejwt django-allauth social-auth-app-django django-redis psycopg2-binary argon2-cffi redis
```

Create the database if it does not already exist:

```sql
CREATE DATABASE "Streamify";
```

Run migrations and start the backend server:

```powershell
cd backend
python manage.py migrate
python manage.py runserver 8000 --noreload
```

### 2. Frontend

Install dependencies and start the Next.js dev server:

```powershell
cd frontend
npm install
npm run dev
```

The frontend runs on http://localhost:3000 and the backend runs on http://127.0.0.1:8000.

## Environment Variables

Keep API keys and other secrets in local environment files only.

- Frontend TMDB credentials belong in `frontend/.env`
- Do not commit secret values to GitHub

## Notes

- The backend is configured to use PostgreSQL by default.
- Redis is optional for local development because the cache falls back to an in-memory backend.
- The backend root URL is an API entry point, so visiting `/` returns a 404 unless a homepage route is added.

## License

No license has been added yet.

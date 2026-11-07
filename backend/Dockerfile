FROM node:20-slim AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build
FROM python:3.11-slim AS python-builder
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*
COPY backend/pyproject.toml ./backend/
WORKDIR /app/backend
RUN pip install --no-cache-dir --prefix=/install .
FROM python:3.11-slim
WORKDIR /app/backend
COPY --from=python-builder /install /usr/local
COPY backend/app/ ./app/
COPY --from=frontend-builder /app/frontend/dist/ ../frontend/dist/
EXPOSE 7860
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]

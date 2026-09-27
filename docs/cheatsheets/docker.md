# Docker Cheat Sheet

Quick reference for Docker essentials.

---

## Basic Commands

```bash
# Build image
docker build -t image-name .

# Run container
docker run image-name

# Run with port mapping
docker run -p 8080:80 image-name

# Run in background
docker run -d image-name

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# Remove image
docker rmi <image-id>
```

---

## Dockerfile

```dockerfile
# Base image
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source
COPY . .

# Expose port
EXPOSE 5173

# Run command
CMD ["npm", "run", "dev"]
```

---

## Docker Compose

```yaml
version: '3'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

---

## Docker Compose Commands

```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# Rebuild and start
docker-compose up --build

# View logs
docker-compose logs

# View logs for specific service
docker-compose logs app
```

---

## Volumes

```bash
# Create volume
docker volume create my-volume

# List volumes
docker volume ls

# Remove volume
docker volume rm my-volume
```

---

## Networks

```bash
# Create network
docker network create my-network

# List networks
docker network ls

# Connect container to network
docker network connect my-network container
```

---

## Common Mistakes

- ❌ Not setting WORKDIR (files end up in root)
- ❌ Not exposing ports (can't access from host)
- ❌ Not using .dockerignore (copies too many files)
- ❌ Using latest tag (not reproducible)
- ❌ Not mounting volumes for development (no hot reload)

# Multi-stage Dockerfile for building the Vite React app and serving with nginx
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package manifest first for better caching
COPY package.json package-lock.json* ./
RUN npm install --silent --no-audit --progress=false || npm install --silent

# Copy source and build
COPY . .
RUN npm run build

# Use nginx to serve the app
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 5173

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
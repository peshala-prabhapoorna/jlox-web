# Multi-stage Dockerfile for jLox web application

# Build stage
FROM debian:bookworm-slim AS builder

# Install required build tools
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    bash \
    curl \
    ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy source files
COPY . .

# Run the build script
RUN chmod +x build.sh sh/*.sh && \
    ./build.sh && \
    chmod -R 755 build/

# Download jlox.jar package
RUN mkdir -p assets/packages && \
    curl -k -L "https://github.com/peshala-prabhapoorna/jlox/releases/download/v1.0.0/jlox-1.0.0.jar" \
    -o "assets/packages/jlox.jar"

# Production stage
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy assets directory
COPY --from=builder /app/assets /usr/share/nginx/html/assets

# Expose port 80
EXPOSE 80

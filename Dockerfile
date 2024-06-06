# syntax=docker/dockerfile:1.4

# 1. For building the Parcel app
FROM node:lts AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files (better for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all other files
COPY . .

# Build the app using Parcel
RUN npm run build

# 2. For Nginx setup
FROM nginx:alpine

# Copy config nginx
COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Set working directory for static assets
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from the build stage
COPY --from=build /app/dist .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
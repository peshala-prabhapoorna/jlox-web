#!/bin/bash

# Check if deploy directory argument is provided
if [ $# -ne 1 ]; then
    echo "Error: Deploy directory not specified"
    echo "Usage: $0 <deploy_directory>"
    exit 1
fi

deploy_dir="$1"
package_url="https://github.com/peshala-prabhapoorna/jlox/releases/download/v0.2.0/jlox-0.2.0.jar"
assets_packages_dir="assets/packages"

# Check if build directory exists
if [ ! -d "build" ]; then
    echo "Error: build directory not found. Run build script first."
    exit 1
fi

# Check if deploy directory exists and is not empty
if [ -d "$deploy_dir" ] && [ "$(ls -A $deploy_dir)" ]; then
    read -p "Deploy directory '$deploy_dir' is not empty. Delete its contents? (y/N) " confirm
    if [[ $confirm =~ ^[Yy]$ ]]; then
        echo "Deleting contents of $deploy_dir"
        rm -rf "${deploy_dir:?}"/*
    else
        echo "Deployment cancelled"
        exit 1
    fi
fi

# Check if assets directory exists
if [ ! -d "assets" ]; then
    echo "Warning: assets directory not found. Creating it..."
    mkdir -p "$assets_packages_dir"
fi

# Create assets/packages directory if it doesn't exist
if [ ! -d "$assets_packages_dir" ]; then
    echo "Creating packages directory..."
    mkdir -p "$assets_packages_dir"
fi

echo "=== Downloading package ==="
# Download the package
echo "Downloading jlox package..."
if command -v curl &> /dev/null; then
    curl -L "$package_url" -o "$assets_packages_dir/jlox.jar"
elif command -v wget &> /dev/null; then
    wget -O "$assets_packages_dir/jlox.jar" "$package_url"
else
    echo "Error: Neither curl nor wget is installed. Cannot download package."
    exit 1
fi

if [ $? -ne 0 ]; then
    echo "Error: Failed to download package"
    exit 1
fi

echo "Package downloaded successfully"

echo "=== Starting deployment process ==="

# Create deploy directory if it doesn't exist
mkdir -p "$deploy_dir"

# Copy build contents to deploy directory
echo "Copying build files to $deploy_dir"
cp -r build/* "$deploy_dir"

# Copy assets if they exist
if [ -d "assets" ]; then
    echo "Copying assets to $deploy_dir"
    cp -r assets "$deploy_dir"
fi

echo "=== Deployment complete ==="
echo "Files deployed to: $deploy_dir"

# List deployed files for verification
echo "=== Deployed files ==="
ls -R "$deploy_dir"

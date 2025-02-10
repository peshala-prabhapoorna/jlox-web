#!/bin/bash

# Exit on any error
set -e

echo "Starting build process..."

# Execute CSS build
echo "=== Building CSS ==="
sh/build-css.sh
echo "CSS build complete"

# Execute JS build
echo "=== Building JavaScript ==="
sh/build-js.sh
echo "JavaScript build complete"

# Execute HTML build
echo "=== Building HTML ==="
sh/build-html.sh
echo "HTML build complete"

echo "Build process completed successfully!"

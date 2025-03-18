#!/bin/bash

# Script to build the project for GitHub Pages
echo "Building Lakbay for GitHub Pages..."

# Build the project with GitHub Pages configuration
npx vite build --base=/lakbay/

echo "Build complete! Files are in the dist/public directory."
echo "To test locally, you can run: npx serve -s dist/public"
echo "To deploy, push to your GitHub repository and GitHub Actions will handle the deployment."
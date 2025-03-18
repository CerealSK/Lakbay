# Deploying to GitHub Pages

This project has been configured to be deployed to GitHub Pages. Follow these steps to deploy your website:

## Prerequisites

1. You need a GitHub account.
2. Create a repository named `lakbay` on GitHub.

## Setup

1. Push your code to the GitHub repository:

```bash
# Initialize git repository (if not already done)
git init

# Add the remote repository 
git remote add origin https://github.com/YOUR_USERNAME/lakbay.git

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
```

2. GitHub Actions will automatically build and deploy your website once you push to the `main` branch.

## Configuration

- The deployment is configured in `.github/workflows/deploy.yml`.
- The website will be built with base path `/lakbay/`.
- The website will be deployed to the `gh-pages` branch.

## Customization

- Update the repository name in the GitHub Actions workflow if you change it.
- Update your GitHub username in the workflow file if needed.

## Manual Deployment

If you prefer to build and deploy manually:

1. Run the build command with GitHub Pages configuration:

```bash
npx vite build --base=/lakbay/
```

2. The build output will be in the `dist/public` directory.

3. You can then manually deploy this to GitHub Pages or any other static hosting service.

## Accessing Your Website

After deployment, your website will be available at:

```
https://YOUR_USERNAME.github.io/lakbay/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Troubleshooting

- If the deployment fails, check the GitHub Actions tab in your repository to see the error logs.
- Make sure GitHub Pages is enabled in your repository settings (Settings > Pages) and configured to use the `gh-pages` branch.
- Check if the base path (`/lakbay/`) is correctly set throughout your application.
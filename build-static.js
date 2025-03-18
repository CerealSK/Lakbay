import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(distDir, 'public');

// Create directories if they don't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

console.log('🔨 Building static website...');

// Clean previous build if it exists
try {
  if (fs.existsSync(publicDir)) {
    console.log('Cleaning previous build...');
    fs.rmSync(publicDir, { recursive: true, force: true });
  }
  
  // Ensure directories exist
  ensureDir(distDir);
  ensureDir(publicDir);
  
  // Build using the static configuration
  console.log('Building frontend with static configuration...');
  execSync('vite build --config github-pages.config.js', { stdio: 'inherit' });
  
  console.log('✅ Static build complete!');
  console.log('📂 Output is available in the dist/public directory');
  
  // Create a .nojekyll file to disable Jekyll processing on GitHub Pages
  const nojekyllPath = path.join(publicDir, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file to disable Jekyll processing');
  
  // Copy 404.html (same as index.html) for GitHub Pages SPA routing
  const indexPath = path.join(publicDir, 'index.html');
  const notFoundPath = path.join(publicDir, '404.html');
  
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('Created 404.html for SPA routing');
  }
  
  // Create a minimal robots.txt file
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, 'User-agent: *\nAllow: /\n');
  console.log('Created robots.txt file');
  
  // Print completion and testing instructions
  console.log('\n✨ Static build process complete! ✨');
  console.log('To test locally, run: npm run serve:static');
  console.log('To deploy to GitHub Pages:');
  console.log('1. Commit and push changes to GitHub');
  console.log('2. GitHub Actions will automatically deploy');
  console.log('   or manually run the GitHub Pages deployment workflow');
  
} catch (error) {
  console.error('❌ Build failed:', error);
  console.error(error.stack);
  process.exit(1);
}
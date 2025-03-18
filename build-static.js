import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔨 Building static website...');

// Build using the GitHub Pages config
try {
  console.log('Building frontend with static configuration...');
  execSync('vite build --config github-pages.config.js', { stdio: 'inherit' });
  
  console.log('✅ Static build complete!');
  console.log('📂 Output is available in the dist/public directory');
  
  // Create a .nojekyll file to disable Jekyll processing on GitHub Pages
  const nojekyllPath = path.join(__dirname, 'dist/public', '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file to disable Jekyll processing');
  
  // Copy 404.html (same as index.html) for GitHub Pages SPA routing
  const indexPath = path.join(__dirname, 'dist/public', 'index.html');
  const notFoundPath = path.join(__dirname, 'dist/public', '404.html');
  
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('Created 404.html for SPA routing');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
// copy-images.js
const fs = require('fs-extra');
const path = require('path');

const sourceDir = 'src/images';
const destDir = 'dist/images';

async function copyFiles() {
  try {
    await fs.ensureDir(destDir); // Ensure destination directory exists
    await fs.copy(sourceDir, destDir);
    console.log(`Successfully copied images from ${sourceDir} to ${destDir}`);
  } catch (err) {
    console.error('Error copying images:', err);
  }
}

copyFiles();

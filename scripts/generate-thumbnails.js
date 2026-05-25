/**
 * Generate thumbnail screenshots for all presentation slides
 * Usage: node scripts/generate-thumbnails.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '../public/thumbnails');
const SLIDES_FILE = path.join(__dirname, '../src/lib/content/slides.js');

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Read slides count from slides.js
function getSlidesCount() {
  const slidesContent = fs.readFileSync(SLIDES_FILE, 'utf8');
  const matches = slidesContent.match(/export const SLIDES = \[([\s\S]*?)\];/);
  if (!matches) {
    throw new Error('Could not parse SLIDES array');
  }

  // Count objects in array by counting opening braces at proper depth
  const arrayContent = matches[1];
  const slideObjects = arrayContent.match(/{\s*"id":/g);
  return slideObjects ? slideObjects.length : 0;
}

async function generateThumbnails() {
  const totalSlides = getSlidesCount();
  console.log(`Found ${totalSlides} slides to screenshot`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to standard presentation size
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  });

  for (let i = 0; i < totalSlides; i++) {
    console.log(`Generating thumbnail ${i + 1}/${totalSlides}...`);

    try {
      // Navigate to slide
      await page.goto(`${BASE_URL}?slide=${i}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait for animations to complete
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Take screenshot
      const screenshotPath = path.join(OUTPUT_DIR, `slide-${i}.png`);
      await page.screenshot({
        path: screenshotPath,
        type: 'png',
        fullPage: false
      });

      console.log(`✓ Saved: slide-${i}.png`);
    } catch (error) {
      console.error(`✗ Error on slide ${i}:`, error.message);
    }
  }

  await browser.close();
  console.log(`\n✓ Generated ${totalSlides} thumbnails in ${OUTPUT_DIR}`);
}

// Run the script
generateThumbnails().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

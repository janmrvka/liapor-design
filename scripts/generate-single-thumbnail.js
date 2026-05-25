/**
 * Generate thumbnail for a single slide
 * Usage: node scripts/generate-single-thumbnail.js <slideIndex>
 */

const puppeteer = require('puppeteer');
const path = require('path');

const slideIndex = parseInt(process.argv[2] || '0', 10);
const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(__dirname, '../public/thumbnails');

async function generateSingleThumbnail() {
  console.log(`Generating thumbnail for slide ${slideIndex}...`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1
  });

  try {
    await page.goto(`${BASE_URL}?slide=${slideIndex}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for animations
    await new Promise(resolve => setTimeout(resolve, 2000));

    const screenshotPath = path.join(OUTPUT_DIR, `slide-${slideIndex}.png`);
    await page.screenshot({
      path: screenshotPath,
      type: 'png',
      fullPage: false
    });

    console.log(`✓ Saved: slide-${slideIndex}.png`);
  } catch (error) {
    console.error(`✗ Error:`, error.message);
    process.exit(1);
  }

  await browser.close();
}

generateSingleThumbnail();

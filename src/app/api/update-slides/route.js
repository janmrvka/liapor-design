import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { slides } = await request.json();

    if (!slides || !Array.isArray(slides)) {
      return NextResponse.json(
        { error: 'Invalid slides data' },
        { status: 400 }
      );
    }

    // Path to slides.js file
    const slidesPath = path.join(process.cwd(), 'src/lib/content/slides.js');

    // Read the original file to preserve the header comment
    const originalContent = fs.readFileSync(slidesPath, 'utf8');

    // Extract the header comment (everything before "export const SLIDES")
    const headerMatch = originalContent.match(/^([\s\S]*?)(?=export const SLIDES)/);
    const header = headerMatch ? headerMatch[1] : `/**
 * KAMA 2026 Prezentace - Konfigurace slidů
 * Strategie pro transformaci zimní legendy v celoroční lovebrand.
 */

`;

    // Create new content with preserved header
    const newContent = `${header}export const SLIDES = ${JSON.stringify(slides, null, 2)};

// Info o prezentaci
console.log(\`✓ Prezentace načtena: \${SLIDES.length} slidů\`);
`;

    // Write the new content
    fs.writeFileSync(slidesPath, newContent, 'utf8');

    return NextResponse.json({
      success: true,
      message: 'Slides order updated successfully',
      count: slides.length,
    });
  } catch (error) {
    console.error('Error updating slides:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

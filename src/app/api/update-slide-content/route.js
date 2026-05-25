import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { changes } = await request.json();

    if (!changes || typeof changes !== 'object') {
      return NextResponse.json(
        { error: 'Invalid changes data' },
        { status: 400 }
      );
    }

    // Path to slides.js file
    const slidesPath = path.join(process.cwd(), 'src/lib/content/slides.js');

    // Read the current file
    const fileContent = fs.readFileSync(slidesPath, 'utf8');

    // Parse the SLIDES array
    const slidesMatch = fileContent.match(/export const SLIDES = (\[[\s\S]*?\]);/);
    if (!slidesMatch) {
      throw new Error('Could not parse SLIDES array');
    }

    let slides = JSON.parse(slidesMatch[1]);

    // Apply changes
    Object.keys(changes).forEach(slideId => {
      const slideIndex = slides.findIndex(s => s.id === slideId);
      if (slideIndex === -1) return;

      const slideChanges = changes[slideId];
      Object.keys(slideChanges).forEach(path => {
        const value = slideChanges[path];
        const pathParts = path.split('.');

        // Navigate to the correct property and update it
        let target = slides[slideIndex];
        for (let i = 0; i < pathParts.length - 1; i++) {
          target = target[pathParts[i]];
        }
        target[pathParts[pathParts.length - 1]] = value;
      });
    });

    // Extract header
    const headerMatch = fileContent.match(/^([\s\S]*?)(?=export const SLIDES)/);
    const header = headerMatch ? headerMatch[1] : '';

    // Write back
    const newContent = `${header}export const SLIDES = ${JSON.stringify(slides, null, 2)};

// Info o prezentaci
console.log(\`✓ Prezentace načtena: \${SLIDES.length} slidů\`);
`;

    fs.writeFileSync(slidesPath, newContent, 'utf8');

    return NextResponse.json({
      success: true,
      message: 'Content updated successfully',
      changesCount: Object.keys(changes).length,
    });
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

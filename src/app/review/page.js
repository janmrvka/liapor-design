'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Redirect page for direct access to review slides
 * URL: /review -> redirects to presentation starting at title-copy slide
 */
export default function ReviewPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main presentation with slide 53 (title-copy - KAMA je lovebrand)
    router.replace('/?slide=52');
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white text-xl">Načítám...</p>
    </div>
  );
}

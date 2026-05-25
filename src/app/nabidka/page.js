'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Redirect page for direct access to offer slide
 * URL: /nabidka -> redirects to presentation starting at offer-intro slide
 */
export default function NabidkaPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main presentation with slide 43 (offer-intro)
    router.replace('/?slide=43');
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white text-xl">Načítám nabídku...</p>
    </div>
  );
}

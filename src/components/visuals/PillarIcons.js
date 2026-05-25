/**
 * SVG Icons for the 6 Pillars
 * Each icon represents the essence of its pillar
 */

export const KulturaIcon = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Heart with sparkles - representing culture & authenticity */}
    <path
      d="M100 170C100 170 30 130 30 80C30 55 50 40 70 40C85 40 95 50 100 60C105 50 115 40 130 40C150 40 170 55 170 80C170 130 100 170 100 170Z"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.2"
    />
    {/* Sparkles */}
    <circle cx="50" cy="50" r="4" fill="currentColor" />
    <circle cx="150" cy="50" r="4" fill="currentColor" />
    <circle cx="100" cy="30" r="5" fill="currentColor" />
    <line x1="70" y1="25" x2="70" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="65" y1="30" x2="75" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="130" y1="25" x2="130" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="125" y1="30" x2="135" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const TymIcon = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Connected people forming a network */}
    <circle cx="100" cy="60" r="20" stroke="currentColor" strokeWidth="8" fill="currentColor" opacity="0.2" />
    <circle cx="50" cy="120" r="18" stroke="currentColor" strokeWidth="8" fill="currentColor" opacity="0.2" />
    <circle cx="150" cy="120" r="18" stroke="currentColor" strokeWidth="8" fill="currentColor" opacity="0.2" />
    <circle cx="75" cy="160" r="15" stroke="currentColor" strokeWidth="7" fill="currentColor" opacity="0.2" />
    <circle cx="125" cy="160" r="15" stroke="currentColor" strokeWidth="7" fill="currentColor" opacity="0.2" />
    {/* Connections */}
    <line x1="100" y1="80" x2="50" y2="105" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="100" y1="80" x2="150" y2="105" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="138" x2="75" y2="147" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="150" y1="138" x2="125" y2="147" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const KlientiIcon = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Handshake symbol - partnership */}
    <path
      d="M50 100L75 75L100 100L125 75L150 100"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M75 75L75 50L50 50L50 100"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M125 75L125 50L150 50L150 100"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.2"
    />
    {/* Trust circle */}
    <circle cx="100" cy="130" r="25" stroke="currentColor" strokeWidth="6" strokeDasharray="5 5" />
  </svg>
);

export const VystupyIcon = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Diamond/gem - representing craft excellence */}
    <path
      d="M100 30L140 80L100 170L60 80Z"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.2"
    />
    <line x1="60" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    <line x1="80" y1="80" x2="100" y2="170" stroke="currentColor" strokeWidth="6" opacity="0.5" />
    <line x1="120" y1="80" x2="100" y2="170" stroke="currentColor" strokeWidth="6" opacity="0.5" />
    {/* Shine effect */}
    <line x1="90" y1="20" x2="90" y2="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="110" y1="20" x2="110" y2="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="70" y1="50" x2="80" y2="60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <line x1="130" y1="50" x2="120" y2="60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const VysledkyIcon = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Growth chart with arrow */}
    <path
      d="M40 150L70 120L100 130L130 90L160 60"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrow head */}
    <path
      d="M160 60L145 65L150 80"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Data points */}
    <circle cx="40" cy="150" r="6" fill="currentColor" />
    <circle cx="70" cy="120" r="6" fill="currentColor" />
    <circle cx="100" cy="130" r="6" fill="currentColor" />
    <circle cx="130" cy="90" r="6" fill="currentColor" />
    <circle cx="160" cy="60" r="6" fill="currentColor" />
    {/* Value bars in background */}
    <rect x="50" y="100" width="15" height="60" fill="currentColor" opacity="0.15" rx="3" />
    <rect x="80" y="80" width="15" height="80" fill="currentColor" opacity="0.15" rx="3" />
    <rect x="110" y="90" width="15" height="70" fill="currentColor" opacity="0.15" rx="3" />
    <rect x="140" y="60" width="15" height="100" fill="currentColor" opacity="0.15" rx="3" />
  </svg>
);

export const AntIcon = ({ className = "w-32 h-32" }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Megaphone/announcement - strong brand voice */}
    <path
      d="M50 80L120 60L120 140L50 120Z"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.2"
    />
    <circle cx="120" cy="100" r="10" fill="currentColor" />
    <path
      d="M50 80L30 70L30 130L50 120"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      opacity="0.3"
    />
    {/* Sound waves */}
    <path
      d="M140 70C150 75 155 85 155 100C155 115 150 125 140 130"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M160 50C175 60 185 75 185 100C185 125 175 140 160 150"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export const pillarIconMap = {
  'WOW kultura': KulturaIcon,
  'WOW tým': TymIcon,
  'WOW klienti': KlientiIcon,
  'WOW výstupy': VystupyIcon,
  'WOW výsledky': VysledkyIcon,
  'WOW (ant)®': AntIcon,
};

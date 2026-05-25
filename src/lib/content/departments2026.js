/**
 * Department Plans 2026 Section Content
 * Specific action steps for each department to fulfill vision and pillars in 2026
 */

export const departments2026Slides = [
  // Slide - Obchod: Konkrétní kroky 2026
  {
    id: 'dept-2026-sales',
    template: 'ImageSlide',
    content: {
      // Sales strategy planning
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80',
      title: 'Obchod 2026: Konkrétní kroky',
      description: '• Revize klientského portfolia\n• WOW výstupy (nabídky, prezentace)\n• Prodej přidané hodnoty',
    },
    config: {
      backgroundColor: 'bg-ant-blue',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'right',
    },
  },

  // Slide - Vývoj: Konkrétní kroky 2026
  {
    id: 'dept-2026-dev',
    template: 'ImageSlide',
    content: {
      // Development planning session
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1600&q=80',
      title: 'Vývoj 2026: Konkrétní kroky',
      description: '• AI přebírá rutinu. Lidi řeší hodnotu.\n• QA, SLA a servis jako základ, ne nadstavba.\n• Neřešíme „stačí". Stavíme technologickou budoucnost.',
    },
    config: {
      backgroundColor: 'bg-ant-purple',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'left',
    },
  },

  // Slide - Marketing: Konkrétní kroky 2026
  {
    id: 'dept-2026-marketing',
    template: 'ImageSlide',
    content: {
      // Marketing campaign brainstorm
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&q=80',
      title: 'Marketing 2026: Konkrétní kroky',
      description: '• AI asistent pro každý projekt\n• Brand efektivita (recept, brandbook)\n• Rozvoj kanálů (SEO / GEO, UX správa)',
    },
    config: {
      backgroundColor: 'bg-ant-pink',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'right',
    },
  },
];

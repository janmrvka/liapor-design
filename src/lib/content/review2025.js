/**
 * 2025 Review Section Content
 * Slides 2-6: Goals, Results (WOW viz), Failures, Why we failed, Learning
 */

export const review2025Slides = [
  // Slide 2 - Naše cíle pro rok 2025
  {
    id: 'review-goals',
    template: 'NumbersSlide',
    content: {
      title: 'Naše cíle pro rok 2025',
      numbers: [
        {
          value: '+',
          label: 'Pozitivní cashflow',
        },
        {
          value: '55M',
          label: 'Obrat',
          note: '60M = WOW',
        },
      ],
    },
    config: {
      backgroundColor: 'bg-ant-blue',
      textColor: 'text-black',
      accentColor: 'text-black',
      hideProgress: true,
    },
  },

  // Slide 3 - Výsledky roku 2025 (Apple Rings)
  {
    id: 'review-success',
    template: 'FinancialGoalsSlide',
    content: {
      title: 'Výsledky roku 2025',
      goals: [
        {
          label: 'Pozitivní cashflow',
          target: '1',
          actual: '1',
          note: 'Splněno ✓',
          hideUnit: true, // Don't show "M" for cashflow
          showCheckmark: true, // Show ✓ instead of number
        },
        {
          label: 'Obrat',
          target: '55',
          actual: '53',
          note: 'z cílových 55M',
        },
      ],
    },
    config: {
      backgroundColor: 'bg-ant-green',
      textColor: 'text-black',
      accentColor: 'text-black', // Numbers in black for contrast on green
    },
  },

  // Slide 4 - Co se nepovedlo
  {
    id: 'review-failure',
    template: 'ManifestoSlide',
    content: {
      statement: '53M místo 55M. Projekty, kde jsme zůstali u „stačí". Energie bez přidané hodnoty.',
      subtitle: 'Co se v roce 2025 nepovedlo',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
    },
  },

  // Slide 5 - Proč jsme nesplnili cíle
  {
    id: 'review-why-failed',
    template: 'ImageSlide',
    content: {
      // Challenges, obstacles - reflective atmosphere
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
      title: 'Proč jsme nesplnili 55M',
      description: '• Neproplacené faktury\n• Prodej hodin',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      layout: 'split',
      imagePosition: 'right',
    },
  },

  // Slide 6 - Co nás to naučilo
  {
    id: 'review-learning',
    template: 'ManifestoSlide',
    content: {
      statement: 'Posunuli jsme se.',
      subtitle: 'Co nás to naučilo',
    },
    config: {
      backgroundColor: 'bg-white',
      textColor: 'text-black',
    },
  },
];

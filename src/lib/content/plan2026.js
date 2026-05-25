/**
 * 2026 Plan Section Content
 * Slides 23-24: Goals and financial targets for 2026
 */

export const plan2026Slides = [
  // Slide 24 - Rok 2026: Naše hlavní cíle
  {
    id: 'plan-goals',
    template: 'ImageSlide',
    content: {
      // Future vision - aspirational, forward-looking perspective
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85',
      title: 'Rok 2026: Naše hlavní cíle',
      subtitle: 'Kam chceme jako (ant) dojít',
      description: 'Co bude znamenat úspěch roku 2026.',
      animateImage: false, // Earth (no rotation)
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      layout: 'overlay',
      overlayOpacity: 0.7,
    },
  },

  // Slide 24 - Finanční cíle 2026
  {
    id: 'plan-financial',
    template: 'NumbersSlide',
    content: {
      title: 'Finanční cíle 2026',
      subtitle: 'Čísla v kontextu. Zisk jako svoboda. Udržitelnost místo tlaku.',
      numbers: [
        {
          value: '+',
          label: 'Pozitivní cashflow',
        },
        {
          value: '58M',
          label: 'Obrat',
        },
      ],
      hideBrandSticker: true,
    },
    config: {
      backgroundColor: 'bg-ant-green',
      textColor: 'text-black',
      accentColor: 'text-black',
      hideProgress: true,
    },
  },
];

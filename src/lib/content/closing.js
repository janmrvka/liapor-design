/**
 * Closing Section Content
 * Motivational conclusion and final call to action
 */

export const closingSlides = [
  // Slide - Jak poznáme, že jdeme správně
  {
    id: 'closing-validation',
    template: 'ManifestoSlide',
    content: {
      statement: 'Jaké otázky si budeme klást.\nKdy si řekneme „tohle už není ono".',
      subtitle: 'Jak poznáme, že jdeme správně',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
    },
  },

  // Slide - WOW CHECKER (Google Chat simulation - split layout)
  {
    id: 'closing-wow-checker',
    template: 'GoogleChatSlide',
    content: {
      title: 'WOW checker',
      subtitle: 'Sdílejte své WOW momenty na Google Chat',
      spaceName: 'WOW Checker',
      messages: [
        {
          author: 'Petr Zápotocký',
          initials: 'PZ',
          avatarColor: '#10b981',
          time: 'právě teď',
          text: '🎯 WOW moment: Tato prezentace\n\nCelou tuhle prezentaci jsem „vibecodnul" s AI. 45 slidů, animace, responzivita.\n\n✅ Jinde by to neprošlo\n✅ Reálný dopad\n✅ Hrdě se k tomu hlásím',
          reactions: [
            { emoji: '🔥', count: 12 },
            { emoji: '🤖', count: 8 },
            { emoji: '💪', count: 6 },
          ],
        },
      ],
      pinnedQuestions: [
        'Jinde by to neprošlo?',
        'Má to reálný dopad?',
        'Hlásíme se k tomu hrdě?',
      ],
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      layout: 'split',
    },
  },

  // Slide - Motivační shrnutí
  {
    id: 'closing-motivation',
    template: 'HeroSlide',
    content: {
      title: '2026\nrok změny',
      subtitle: 'Každý krok. Každé rozhodnutí. Každý projekt.',
      emphasizeSubtitle: true,
    },
    config: {
      backgroundColor: 'bg-ant-green',
      textColor: 'text-black',
      accentColor: 'text-black',
    },
  },

  // Slide - Začínáme hned teď (transition to announcements)
  {
    id: 'closing-starting-now',
    template: 'ImageSlide',
    content: {
      image: '/images/zaciname.jpg',
      title: 'Začínáme hned teď',
      subtitle: 'První kroky nové éry',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      layout: 'overlay',
      overlayOpacity: 0.55,
    },
  },

  // Slide - Nový vedoucí Obchodu
  {
    id: 'closing-new-sales-lead',
    template: 'ImageSlide',
    content: {
      image: '/images/michal-bouda.png',
      title: 'Michal Bouda',
      subtitle: 'Nový vedoucí Obchodu',
      description: 'od 2.2. 2026',
    },
    config: {
      backgroundColor: 'bg-ant-blue',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'left',
      imageContain: true,
    },
  },

  // Slide - Nový vedoucí Vývoje
  {
    id: 'closing-new-dev-lead',
    template: 'ImageSlide',
    content: {
      image: '/images/tomas-frank.png',
      title: 'Tomáš Frank',
      subtitle: 'Nový vedoucí Vývoje',
      description: 'od 2.2. 2026',
    },
    config: {
      backgroundColor: 'bg-ant-purple',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'right',
      imageContain: true,
    },
  },

  // Slide - AI a automatizace
  {
    id: 'closing-ai-automation',
    template: 'ManifestoSlide',
    content: {
      statement: '2026: Dedikovaný tým pro AI a automatizace.',
      subtitle: 'AI jako standard, ne nadstavba\nTým naslouchající potřebám napříč (ant)\nVyšší dopad. Efektivita. Hodnota.',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
    },
  },

  // Slide - Co mají lidé dělat (Call to action)
  {
    id: 'closing-action',
    template: 'ImageSlide',
    content: {
      image: '/images/provas.jpg',
      title: 'Co to znamená pro vás',
      description: 'Vize  •  Pilíře  •  Cíle  •  Úkoly',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      layout: 'overlay',
      overlayOpacity: 0.65,
    },
  },

  // Slide - Závěr
  {
    id: 'closing-final',
    template: 'StatementSlide',
    content: {
      statement: 'Směr máme.\nTeď ho jdeme žít.',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
    },
  },

  // Slide - Vize (reminder)
  {
    id: 'closing-vision',
    template: 'HeroSlide',
    content: {
      title: '„Stačí" nestačí.',
      subtitle: 'Jdeme na hranu.',
      emphasizeSubtitle: true,
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      accentColor: 'text-ant-green',
    },
  },

  // Slido Q&A (after main presentation)
  {
    id: 'closing-slido',
    template: 'SlidoSlide',
    content: {
      slidoUrl: 'https://wall.sli.do/event/ijn69GF8qKfjUuXDUcG3EA',
      title: 'Dotazy',
    },
    config: {
      backgroundColor: 'bg-white',
      textColor: 'text-black',
    },
  },
];

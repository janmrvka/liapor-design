/**
 * Vision Section Content
 * Slides 8-10: Core vision statement, what it means, what it isn't
 */

export const visionSlides = [
  // Slide 9 - Naše vize
  {
    id: 'vision-hero',
    template: 'HeroSlide',
    content: {
      title: '„Stačí" nestačí.',
      subtitle: 'Jdeme na hranu.',
      emphasizeSubtitle: true, // Make subtitle larger
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      accentColor: 'text-ant-green',
    },
  },

  // Slide 10 - Co ta vize znamená
  {
    id: 'vision-means',
    template: 'StatementSlide',
    content: {
      statement: 'Jak se rozhodujeme\nJak pracujeme\nJak se chováme',
    },
    config: {
      backgroundColor: 'bg-white',
      textColor: 'text-black',
    },
  },
];

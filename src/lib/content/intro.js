/**
 * Intro Section Content
 * Opening slides: Cover + Purpose + Context
 */

export const introSlides = [
  // Slide 0 - Cover
  {
    id: 'intro-cover',
    template: 'CoverSlide',
    content: {
      title: '(ant) 2025/2026',
      subtitle: '„Stačí" nestačí. Jdeme na hranu.',
      slidoCode: '#antQ12026',
      slidoUrl: 'https://wall.sli.do/event/ijn69GF8qKfjUuXDUcG3EA',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
      accentColor: 'text-ant-green',
    },
  },

  // Slide 1 - Proč se díváme zpět a dopředu
  {
    id: 'intro-context',
    template: 'StatementSlide',
    content: {
      statement: 'Ohlédneme se za rokem 2025.\nVystřelíme do roku 2026.',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
    },
  },
];

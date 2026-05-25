/**
 * Pillars Section Content
 * Slides 12-23: Each pillar has 2 slides (Definition + Practice with photo)
 */

export const pillarSlides = [
  // Slide 12 - WOW KULTURA (Definice)
  {
    id: 'pillar-kultura-def',
    template: 'PillarSlide',
    content: {
      title: 'WOW kultura',
      subtitle: 'Podporujeme opravdovost, osobní rozvoj a odvahu přicházet s nápady, které by jinde neprošly.',
    },
    config: {
      backgroundColor: 'bg-ant-brown',
      textColor: 'text-black',
    },
  },

  // Slide 13 - WOW KULTURA (V praxi) - VIDEO
  {
    id: 'pillar-kultura-prac',
    template: 'VideoSlide',
    content: {
      videoId: '0pf30fS5SPU', // YouTube video ID (autoplay, muted, looped)
      description: '• Jak se k sobě chováme\n• Jak pracujeme s chybou\n• Co u nás má a nemá místo',
    },
    config: {
      backgroundColor: 'bg-ant-brown',
      textColor: 'text-black',
      layout: 'split',
      videoPosition: 'right',
    },
  },

  // Slide 14 - WOW TÝM (Definice)
  {
    id: 'pillar-tym-def',
    template: 'PillarSlide',
    content: {
      title: 'WOW tým',
      subtitle: 'Nehledáme člověka na pozici. Vytváříme prostor pro talenty.',
    },
    config: {
      backgroundColor: 'bg-ant-purple',
      textColor: 'text-black',
    },
  },

  // Slide 15 - WOW TÝM (V praxi)
  {
    id: 'pillar-tym-prac',
    template: 'ImageSlide',
    content: {
      // ANT teambuilding photo
      image: '/images/ant-team.jpg',
      description: '• Role vznikají kolem lidí\n• Talent je víc než škatulka\n• Každý má přinášet něco navíc',
    },
    config: {
      backgroundColor: 'bg-ant-purple',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'left',
    },
  },

  // Slide 16 - WOW KLIENTI (Definice)
  {
    id: 'pillar-klienti-def',
    template: 'PillarSlide',
    content: {
      title: 'WOW klienti',
      subtitle: 'Spolupracujeme jen s těmi, kteří hrají rovinu a chtějí s námi na hranu.',
    },
    config: {
      backgroundColor: 'bg-ant-yellow',
      textColor: 'text-black',
    },
  },

  // Slide 17 - WOW KLIENTI (V praxi)
  {
    id: 'pillar-klienti-prac',
    template: 'ImageSlide',
    content: {
      // Client partnership - collaboration, trust
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80',
      description: '• Vybíráme si\n• Nehrajeme na kvantitu\n• Partnerství > zakázka',
    },
    config: {
      backgroundColor: 'bg-ant-yellow',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'right',
    },
  },

  // Slide 18 - WOW VÝSTUPY (Definice)
  {
    id: 'pillar-vystupy-def',
    template: 'PillarSlide',
    content: {
      title: 'WOW výstupy',
      subtitle: 'Tvoříme co nás baví a překračuje hranice očekávání.',
    },
    config: {
      backgroundColor: 'bg-ant-pink',
      textColor: 'text-black',
    },
  },

  // Slide 19 - WOW VÝSTUPY (V praxi) - VIDEO
  {
    id: 'pillar-vystupy-prac',
    template: 'VideoSlide',
    content: {
      videoId: 'mjmsQCWrJGI', // YouTube video ID (autoplay, muted, looped)
      description: '• Hrdost na výsledek\n• Jdeme za zadání\n• WOW začíná na hraně',
    },
    config: {
      backgroundColor: 'bg-ant-pink',
      textColor: 'text-black',
      layout: 'split',
      videoPosition: 'left',
      videoFit: 'width', // fill width, crop top/bottom
    },
  },

  // Slide 20 - WOW VÝSLEDKY (Definice)
  {
    id: 'pillar-vysledky-def',
    template: 'PillarSlide',
    content: {
      title: 'WOW výsledky',
      subtitle: 'Prodáváme přidanou hodnotu. Ta nám dává svobodu a prostor růst.',
    },
    config: {
      backgroundColor: 'bg-ant-blue',
      textColor: 'text-black',
    },
  },

  // Slide 21 - WOW VÝSLEDKY (V praxi)
  {
    id: 'pillar-vysledky-prac',
    template: 'ImageSlide',
    content: {
      // Freedom - space for growth, independence (mountain panorama)
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
      description: '• Neprodáváme hodiny\n• Zisk jako nástroj\n• Investice do lidí a nápadů',
    },
    config: {
      backgroundColor: 'bg-ant-blue',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'right',
    },
  },

  // Slide 22 - WOW (ant)® (Definice)
  {
    id: 'pillar-ant-def',
    template: 'PillarSlide',
    content: {
      title: 'WOW (ant)®',
      subtitle: 'Nejsme potichu. Budujeme silnou značku, kterou druzí následují.',
    },
    config: {
      backgroundColor: 'bg-ant-green',
      textColor: 'text-black',
    },
  },

  // Slide 23 - WOW (ant)® (V praxi)
  {
    id: 'pillar-ant-prac',
    template: 'ImageSlide',
    content: {
      // Brand visibility - conference, presentation, sharing
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80',
      description: '• Sdílíme\n• Inspirujeme\n• Ukazujeme, že to jde jinak',
    },
    config: {
      backgroundColor: 'bg-ant-green',
      textColor: 'text-black',
      layout: 'split',
      imagePosition: 'left',
    },
  },
];

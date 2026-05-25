/**
 * 2025 Events Section Content
 * Slides 7-12: Co se nám v roce 2025 povedlo napříč celou firmou
 */

export const events2025Slides = [
  // SLIDE A - Od exekuce ke strategii
  {
    id: 'success-strategy',
    template: 'ManifestoSlide',
    content: {
      statement: 'Přestali jsme jen „dělat". Začali jsme řídit.',
      subtitle: 'Marketingová strategie\nStrategické workshopy\ntl;dv jako konkrétní výstup\nVývoj a marketing jako partneři',
    },
    config: {
      backgroundColor: 'bg-white',
      textColor: 'text-black',
    },
  },

  // SLIDE B - Posun ve výstupech
  {
    id: 'success-outputs',
    template: 'ManifestoSlide',
    content: {
      statement: 'Výstupy, ke kterým se hlásíme.',
      subtitle: 'Posun v brandu\nKreativní tým\nVideo obsah pro sociální sítě\nIndividuální řešení (headless, ANTIX)',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
    },
  },

  // SLIDE C - AI jako standard
  {
    id: 'success-ai',
    template: 'ManifestoSlide',
    content: {
      statement: 'AI jsme přestali řešit. Začali jsme ji používat.',
      subtitle: 'AI v marketingu\nAI boost ve vývoji\nVibe coding aplikací\nAI meetupy',
    },
    config: {
      backgroundColor: 'bg-white',
      textColor: 'text-black',
    },
  },

  // SLIDE D - Automatizace a efektivita
  {
    id: 'success-automation',
    template: 'ManifestoSlide',
    content: {
      statement: 'Méně rutinní práce.',
      subtitle: 'Automatický SEO reporting\nn8n napříč firmou\nHackathony\nKapacitní plánování (Asana → vlastní app)',
    },
    config: {
      backgroundColor: 'bg-black',
      textColor: 'text-white',
    },
  },

  // SLIDE E - Růst, který dává smysl
  {
    id: 'success-growth',
    template: 'NumbersSlide',
    content: {
      title: 'Čísla jako důkaz',
      numbers: [
        {
          value: '4M+',
          label: 'Růst z 10k',
          note: 'brand zakázky',
        },
        {
          value: '+40k',
          label: 'Měsíčně do zisku',
          note: 'SEO',
        },
        {
          value: '+80%',
          label: 'ET na projektech',
          note: 'efektivita',
        },
      ],
    },
    config: {
      backgroundColor: 'bg-ant-green',
      textColor: 'text-black',
      accentColor: 'text-black',
      compactNumbers: true, // Smaller numbers to fit on one line
      hideProgress: true, // Hide Apple-style progress rings
    },
  },

  // SLIDE F - Úspěchy obchodu
  {
    id: 'success-sales',
    template: 'ManifestoSlide',
    content: {
      statement: 'Obchod, který dává smysl.',
      subtitle: 'Plníme kapacity dlouho dopředu\nGran Moravia, Livesport, Pegas\nOsekali jsme neproduktivní činnosti',
    },
    config: {
      backgroundColor: 'bg-white',
      textColor: 'text-black',
    },
  },
];

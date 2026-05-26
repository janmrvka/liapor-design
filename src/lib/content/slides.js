/**
 * KAMA 2026 Prezentace - Konfigurace slidů
 * Strategie pro transformaci zimní legendy v celoroční lovebrand.
 *
 * Design: Střídání tmavých a světlých slidů, brand stickery, barevné akcenty, fotky
 */

// === SLIDY PREZENTACE ===
export const SLIDES = [
  {
    "id": "title",
    "template": "ImageSlide",
    "content": {
      "image": "/images/slide_liapor-beton.webp",
      "titleLogo": "/logos/logo-liapor.jpg",
      "title": "Liapor",
      "subtitle": "Návrh designu - květen 2026",
      "description": "",
      "stickers": []
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0.7
    },
    "notes": ""
  },
  {
    "id": "ant-intro",
    "template": "VideoSlide",
    "content": {
      "video": "/images/Showreel_landscape.mp4"
    },
    "config": {
      "backgroundColor": "bg-black",
      "layout": "contain",
      "muted": true
    },
    "notes": "Krátké představení agentury (ant) - kdo jsme a co děláme."
  },
  {
    "id": "ant-references-white",
    "template": "LogoGridSlide",
    "content": {
      "title": "(WOW) je náš ikonický rukopis.",
      "subtitle": "WTF nápady. WOW výsledky. Už 25 let.\n50 expertů.\nStrategie. Kreativa. Performance. Weby. E-shopy.",
      "logos": [
        {
          "name": "SIEMENS",
          "image": "/logos/siemens.png",
          "noInvert": true
        },
        {
          "name": "Pluxee",
          "image": "/logos/pluxee.png",
          "noInvert": true
        },
        {
          "name": "Livesport",
          "image": "/logos/livesport.webp",
          "noInvert": true
        },
        {
          "name": "Gran Moravia",
          "image": "/logos/granmoravia.jpg",
          "noInvert": true,
          "scale": 1.43
        }
      ]
    },
    "config": {
      "backgroundColor": "bg-white",
      "textColor": "text-black",
      "largeLogos": true
    },
    "notes": "Reference agentury (ant) - rozšířený seznam klientů s logy. Bílé pozadí pro lepší viditelnost log."
  },
  {
    "id": "case-studies-intro",
    "template": "HeroSlide",
    "content": {
      "title": "Méně řečí. Více ukázek."
    },
    "config": {
      "backgroundColor": "bg-ant-yellow",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Přechod k případovým studiím - ukážeme konkrétní výsledky naší práce."
  },
  {
    "id": "product-transformation",
    "template": "LinksSlide",
    "content": {
      "title": "Základy pro design.",
      "subtitle": "Není to revoluce, ale evoluce.",
      "links": [
        {
          "label": "Liapor Graphic Standards",
          "url": "/liapor/Liapor_Graphic_Standards.pdf"
        }
      ],
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Východiska pro návrh designu - brand manuál a grafické standardy Liapor."
  },
  {
    "id": "ai-video-demo",
    "template": "ImageSlide",
    "content": {
      "image": "/images/cílové skupiny.png",
      "title": "",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1
    },
    "notes": "Cílové skupiny Liapor."
  },
  {
    "id": "ai-video-performance",
    "template": "CheckerSlide",
    "content": {
      "title": "Tržní strategie",
      "items": [
        "DE, CH, AT — Model \"Surovina a expertní konzultace\"",
        "CZ — Product first: Dům jedním tahem, zahradní dlažby, zdivo… Model \"Produkty i surovina\""
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": "Tržní strategie: DE/CH/AT = Application first. CZ = Český závod vyrábí z keramzitu i finální produkty."
  },
  {
    "id": "trocha-analytiky",
    "template": "HeroSlide",
    "content": {
      "title": "Trocha analytiky"
    },
    "config": {
      "backgroundColor": "bg-ant-yellow",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": ""
  },
  {
    "id": "de-desktop-mobil",
    "template": "ImageSlide",
    "content": {
      "image": "/images/DE desktop - mobil.png",
      "title": "Desktop / mobil  (DE + AT)",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1,
      "imageOffsetY": 20
    },
    "notes": ""
  },
  {
    "id": "cz-desktop-mobil",
    "template": "ImageSlide",
    "content": {
      "image": "/images/CZ desktop - mobil.png",
      "title": "Desktop / mobil (CZ)",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1,
      "imageOffsetY": 20
    },
    "notes": ""
  },
  {
    "id": "hotjar-analyza-de",
    "template": "ImageSlide",
    "content": {
      "image": "/images/ukázka analýzy hotjar - DE.png",
      "title": "Víme přesně, kam se dívají. A kde odcházejí.",
      "subtitle": "(DE)"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1,
      "imageOffsetY": 20
    },
    "notes": ""
  },
  {
    "id": "rozhovory-zeme",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Mluvili jsme přímo se zástupci zemí.",
      "subtitle": "DE, AT, CZ — každý trh trápí něco jiného.\nPtali jsme se. Poslechli jsme. Víme, kde to bolí."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "backgroundVariant": "none"
    },
    "notes": ""
  },
  {
    "id": "sumarizace-potreby",
    "template": "CheckerSlide",
    "content": {
      "title": "Sumarizace potřeb a závěrů.",
      "items": [
        "Co nejvíce jednotný design",
        "Jednotná stromová struktura",
        "Lépe a viditelněji prezentovat výhody materiálu",
        "Lépe a viditelněji prezentovat reference",
        "Jsme experti — poradíme vám",
        "Architekti a projektanti: pokročilá sekce ke stažení / dokumentace",
        "Lepší provázání aplikací, produktů a referencí",
        "Nezávazná konzultace — sběr leadů + expertní pohled Liaporu",
        "Zelená firma"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": ""
  },
  {
    "id": "contact-copy",
    "template": "ContactWowSlide",
    "content": {
      "title": "",
      "subtitle": "www.antstudio.cz",
      "clientLogo": "/client/kama-logo.svg"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": "Závěrečný slide. Děkujeme za pozornost a těšíme se na spolupráci."
  }
];

// Info o prezentaci
console.log(`✓ Prezentace načtena: ${SLIDES.length} slidů`);

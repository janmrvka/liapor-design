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
      "videoId": "OKChYYsXBbA"
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
      "title": "Základy projektu.",
      "subtitle": "Co jsme dostali. Co jsme zjistili. Z čeho vycházíme."
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
      "title": "Není to revoluce,\nale evoluce.",
      "subtitle": "Základy pro design.",
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
    "template": "ManifestoSlide",
    "content": {
      "statement": "Jeden materiál.\nDvě strategie.",
      "subtitle": "DE, CH, AT — surovina + expertní konzultace.\nCZ — hotové produkty: dům jedním tahem, dlažby, zdivo."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "backgroundVariant": "none"
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
    "id": "nejnavstevovanejsi-stranky",
    "template": "TableSlide",
    "content": {
      "title": "Nejnavštěvovanější stránky (DE)",
      "subtitle": "Top 15 stránek = 51 % veškeré návštěvnosti",
      "columns": ["#", "URL", "Překlad", "Návštěvy (celkem 66 971)"],
      "rows": [
        ["1", "/de/produkte/grundstoff.html", "Surovina", "5 298 (7,91 %)"],
        ["2", "/de/anwendungen/hochbau/schuettungen/…/hohlraumverfuellung.html", "Výplň dutin", "3 888 (5,81 %)"],
        ["3", "/de/anwendungen/hochbau.html", "Pozemní stavby", "3 759 (5,61 %)"],
        ["4", "/de/kontakt.html", "Kontakt", "3 009 (4,49 %)"],
        ["5", "/de/anwendungen/hochbau/schuettungen/…/thermobeton.html", "Termobeton", "2 803 (4,19 %)"],
        ["6", "/de/unternehmen/kurzprofil.html", "O firmě", "2 491 (3,72 %)"],
        ["7", "/de/downloads.html", "Ke stažení", "2 120 (3,17 %)"],
        ["8", "/de/unternehmen/aktuelles.html", "Aktuality", "1 984 (2,96 %)"],
        ["9", "/de/unternehmen/die-werke.html", "Závody / výrobny", "1 569 (2,34 %)"],
        ["10", "/de/anwendungen/hochbau/steine.html", "Tvarovky / bloky", "1 500 (2,24 %)"],
        ["11", "/de/anwendungen/hochbau/daemmbeton.html", "Lehký izolační beton", "1 437 (2,15 %)"],
        ["12", "/de/produkte/koernungen.html", "Granulace / frakce", "1 137 (1,70 %)"],
        ["13", "/de/anwendungen/hochbau/schuettungen/…/fundatherm.html", "Fundatherm (základy)", "1 135 (1,69 %)"],
        ["14", "/de/impressum.html", "Impressum", "1 119 (1,67 %)"],
        ["15", "/de/anwendungen/hochbau/daemmbeton/…/was-ist-gefuegedichter-lbr.html", "Co je hutný LB?", "1 097 (1,64 %)"]
      ],
      "footer": "Zákazníci hledají hlavně: surovinu, aplikace ve stavebnictví a kontakt."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white"
    },
    "notes": "Top 15 nejnavštěvovanějších stránek DE webu tvoří 51 % celkové návštěvnosti."
  },
  {
    "id": "nejnavstevovanejsi-stranky-at",
    "template": "TableSlide",
    "content": {
      "title": "Nejnavštěvovanější stránky (AT)",
      "subtitle": "Top 15 stránek = 33 % veškeré návštěvnosti",
      "columns": ["#", "URL", "Překlad", "Návštěvy (celkem 43 187)"],
      "rows": [
        ["1", "/at.html", "Úvodní stránka AT", "4 847 (11,22 %)"],
        ["2", "/at/produkte/grundstoff.html", "Surovina", "2 350 (5,44 %)"],
        ["3", "/at/anwendungen/hochbau/schuettungen/…/hohlraumverfuellung.html", "Výplň dutin", "2 016 (4,67 %)"],
        ["4", "/at/anwendungen/hochbau.html", "Pozemní stavby", "1 626 (3,77 %)"],
        ["5", "/at/anwendungen/hochbau/schuettungen/…/thermobeton.html", "Termobeton", "1 619 (3,75 %)"],
        ["6", "/at/kontakt.html", "Kontakt", "1 431 (3,31 %)"],
        ["7", "/at/anwendungen/hochbau/schuettungen/…/ausgleichsschuettung.html", "Vyrovnávací násyp", "1 334 (3,09 %)"],
        ["8", "/de/anwendungen/hochbau/schuettungen/…/fundatherm.html", "Fundatherm (základy)", "1 135 (2,63 %)"],
        ["9", "/at/downloads.html", "Ke stažení", "1 016 (2,35 %)"],
        ["10", "/en/products/raw-material.html", "Surovina (EN)", "938 (2,17 %)"],
        ["11", "/at/anwendungen/hochbau/steine/liaton-vollblock.html", "Liaton plný blok", "810 (1,88 %)"],
        ["12", "/at/anwendungen/hochbau/steine/liapor-ton-block.html", "Liapor-Ton blok", "792 (1,83 %)"],
        ["13", "/at/anwendungen/hochbau/steine.html", "Tvarovky / bloky", "780 (1,81 %)"],
        ["14", "/at/unternehmen/kurzprofil.html", "O firmě", "698 (1,62 %)"],
        ["15", "/at/anwendungen/hochbau/steine/liaphon-vollblock.html", "Liaphon plný blok", "593 (1,37 %)"]
      ],
      "footer": "AT kopíruje DE vzorec — surovina, stavební aplikace a kontakt dominují."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white"
    },
    "notes": "Top 15 nejnavštěvovanějších stránek AT webu tvoří 33 % celkové návštěvnosti."
  },
  {
    "id": "nejnavstevovanejsi-stranky-cz",
    "template": "TableSlide",
    "content": {
      "title": "Nejnavštěvovanější stránky (CZ)",
      "subtitle": "Top 15 stránek = 100 % sledované návštěvnosti",
      "columns": ["#", "URL", "Překlad", "Návštěvy (celkem 170 803)"],
      "rows": [
        ["1", "/", "Úvodní stránka", "37 324 (21,85 %)"],
        ["2", "/produkty/kamenivo/pro-stavebni-ucely/aplikace/podsyp-podlah", "Podsyp podlah", "12 280 (7,19 %)"],
        ["3", "/produkty/kamenivo/pro-stavebni-ucely/", "Kamenivo pro stavbu", "7 522 (4,40 %)"],
        ["4", "/produkty/", "Produkty", "7 252 (4,25 %)"],
        ["5", "/kontakt", "Kontakt", "6 890 (4,03 %)"],
        ["6", "/produkty/zdivo/", "Zdivo", "4 693 (2,75 %)"],
        ["7", "/ke-stazeni", "Ke stažení", "4 394 (2,57 %)"],
        ["8", "/produkty/liastone/", "Liastone", "3 817 (2,23 %)"],
        ["9", "/produkty/zdivo/pricky/", "Příčky", "3 500 (2,05 %)"],
        ["10", "/produkty/kamenivo/", "Kamenivo", "3 464 (2,03 %)"],
        ["11", "/produkty/beton/liapormix/", "Liapormix (beton)", "3 454 (2,02 %)"],
        ["12", "/produkty/kamenivo/pro-stavebni-ucely/aplikace/zasyp-stropu", "Zásyp stropu", "3 193 (1,87 %)"],
        ["13", "/produkty/djt/", "DJT produkty", "3 185 (1,86 %)"],
        ["14", "/produkty/liastone/betonove-dlazby/", "Betonové dlažby", "3 168 (1,85 %)"],
        ["15", "/produkty/zdivo/pohledove-zdivo/", "Pohledové zdivo", "3 168 (1,85 %)"]
      ],
      "footer": "CZ trh dominuje produktům — kamenivo, zdivo, dlažby. Úvodní stránka tvoří přes 20 % návštěv."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white"
    },
    "notes": "Top 15 nejnavštěvovanějších stránek CZ webu."
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

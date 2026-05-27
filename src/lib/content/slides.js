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
      "muted": false
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
    "id": "dnesni-agenda",
    "template": "HeroSlide",
    "content": {
      "title": "Dnešní agenda.",
      "subtitle": "Co nás čeká."
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
    "id": "co-jsme-zkoumali",
    "template": "CheckerSlide",
    "content": {
      "title": "Co jsme zkoumali.",
      "items": [
        "Trh a jeho geografická specifika — CZ a DACH",
        "Zákazníky a jejich rozdílné potřeby",
        "Konkurenci a stav odvětví",
        "Audit SEO/GEO — jak jsme dohledatelní pro zákazníky",
        "UX audit — jak se zákazníci chovají a kde se ztrácejí",
        "Stávající brand a jeho limity",
        "Technologické potřeby řešení (CMS) a správa obsahu"
      ],
      "footer": "Každé strategické i designové rozhodnutí v tomto projektu stojí na datech a reálném poznání — ne na dojmech.",
      "highlightFooter": true
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": ""
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
    "id": "ai-video-performance",
    "template": "CheckerSlide",
    "content": {
      "title": "Tržní strategie.",
      "items": [
        "DE, CH, AT — surovina + expertní konzultace (98 % B2B)",
        "CZ — hotové produkty: Dům jedním tahem, dlažby Liastone, zdivo + surovina (B2B + B2C)"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": "Tržní strategie: DE/CH/AT = Application first. CZ = Český závod vyrábí z keramzitu i finální produkty."
  },
  {
    "id": "cilove-skupiny",
    "template": "ImageSlide",
    "content": {
      "title": "Cílové skupiny.",
      "image": "/images/cilovky.png"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1,
      "imageOffsetY": 0
    },
    "notes": ""
  },
  {
    "id": "segmenty-zakazniku",
    "template": "TableSlide",
    "content": {
      "title": "Segmenty zákazníků.",
      "columns": ["Segment", "Kdo to je", "Proč přichází na web"],
      "rows": [
        ["S1 Výrobci stavebních hmot", "Firmy zpracovávající Liapor jako surovinu", "EPD, technické specifikace, certifikáty, DoP, podklady pro výběrová řízení"],
        ["S2 Obchod / Distributoři", "Velkoobchod, distributoři", "Informace o produktech, logistice a podmínkách spolupráce"],
        ["S3 Projektanti a architekti", "Navrhují stavby a specifikují materiály", "Technické podklady, BIM data, reference projektů"],
        ["S4 Stavební společnosti", "Realizují stavby", "Rychlé odpovědi, dostupnost produktů, návody na aplikaci"],
        ["S5 Zpracovatelé", "Provádějí aplikaci Liaporu přímo na stavbě", "Technologické postupy, aplikační listy"],
        ["S6 Speciální aplikace", "Průmyslové, infrastrukturní projekty", "Specifická řešení pro nestandardní použití"],
        ["S7 B2C", "Stavebníci, svépomocní stavitelé", "Srozumitelné vysvětlení, kde a jak produkt použít"],
        ["S8 Investoři / Developeři", "Rozhodují o materiálech na úrovni projektů", "Důvěryhodnost značky, reference, udržitelnost"]
      ],
      "footer": "Každá skupina hledá jiné informace, jiným způsobem a v jiné fázi rozhodování. Web musí tuto různorodost zvládnout — bez toho, aby působil chaoticky.",
      "link": {
        "label": "Celá analýza segmentů",
        "url": "https://docs.google.com/document/d/1n7M-UDf7cfocBSNMm-K4rZQKUicPqUglOxugfpAgkDA/edit?tab=t.0"
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white"
    },
    "notes": "Segmenty zákazníků Liapor — každý segment hledá jiné informace."
  },
  {
    "id": "konkurencni-prostredi",
    "template": "CheckerSlide",
    "content": {
      "title": "Kde hrajeme a s kým.",
      "subtitle": "Trhy se liší — stejně jako naši konkurenti.",
      "items": [
        "CZ — nejsilnější pozice. Konkurence omezená, přirozený náskok. Hlavní hrozba: nízká digitální viditelnost vlastní značky.",
        "DE + CH — silnější hřiště. Hlavní soupeř Leca (Saint-Gobain): globální hráč, silný brand, propracovaná digitální přítomnost. Seramis předbíhá ve speciálních aplikacích.",
        "Všude ztrácíme stejně — produkt je srovnatelný nebo lepší. Prohráváme na viditelnosti v Google a zejména v AI vyhledávačích."
      ],
      "footer": "Neřešíme produktový problém. Řešíme to, že zákazník nás nenajde dřív, než najde konkurenci.",
      "highlightFooter": true
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": "Konkurenční prostředí — CZ vs DE/CH, hlavní hrozba je viditelnost, ne produkt."
  },
  {
    "id": "audit-zacali-daty",
    "template": "CheckerSlide",
    "content": {
      "title": "Dobrý web nestačí. Musí být i nalezitelný.",
      "subtitle": "Než jsme navrhli jedinou stránku, potřebovali jsme data.",
      "items": [
        "Kde jsme? — Reálný stav viditelnosti v Google a AI vyhledávačích",
        "Kde jsou zákazníci? — Co a jak hledají napříč třemi trhy",
        "Jak to postavit? — Jaká struktura webu přinese největší návratnost"
      ],
      "footer": "Výsledek není dokument. Je to základ pro stavbu webu.",
      "highlightFooter": true
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": ""
  },
  {
    "id": "proc-ux-audit",
    "template": "CheckerSlide",
    "content": {
      "title": "Víme přesně, co zákazníky zajímá. A co je zdrží.",
      "subtitle": "UX audit odhalil, kde uživatelé odcházejí — a proč.",
      "items": [
        "Co je zajímá — a kde to na webu nenacházejí",
        "Kde se ztrácejí — stránky, ze kterých odcházejí bez akce",
        "Co je zbytečné — obsah, který nikdo nečte a jen přidává hluk"
      ],
      "footer": "Každé rozhodnutí o struktuře webu stojí na reálném chování — ne na dojmu.",
      "highlightFooter": true
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": ""
  },
  {
    "id": "proc-brand-audit",
    "template": "CheckerSlide",
    "content": {
      "title": "Brand. Emoce rozhodují. Až pak přichází logika.",
      "subtitle": "Zákazník si vybere značku, které věří — a teprve pak hledá důvody.",
      "items": [],
      "highlightFooter": false
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": ""
  },
  {
    "id": "web-ktery-nezestarne",
    "template": "CheckerSlide",
    "content": {
      "title": "Technologie. Web, který zítra nezestárne.",
      "subtitle": "Technologie se mění rychleji než cykly redesignu.",
      "items": [
        "AI přebírá roli vyhledávače — web musí být čitelný pro stroje i lidi",
        "Špatná technologická volba dnes znamená drahý redesign za tři roky"
      ],
      "highlightFooter": false
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": ""
  },
  {
    "id": "delici-seo-geo",
    "template": "HeroSlide",
    "content": {
      "title": "Nalezitelnost.",
      "subtitle": "SEO/GEO audit. Struktura a obsah jako strategický nástroj růstu."
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
    "id": "tri-trhy-analyza",
    "template": "CheckerSlide",
    "content": {
      "title": "Proč být dohledatelný dnes.",
      "subtitle": "",
      "items": [
        "AI přebírá roli prvního poradce — ChatGPT, Gemini, Perplexity doporučují to, co znají. Liapor zatím neznají.",
        "Zákazník si nejdřív hledá řešení online — rozhodnutí padne ještě před prvním kontaktem",
        "Google i AI upřednostňují autoritu — obsah, ne jen produkty"
      ],
      "footer": "SEO/GEO není technikálie — je to strategický kanál pro akvizici zákazníků.",
      "highlightFooter": true
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": "Proč je SEO/GEO strategicky důležité — manažerský pohled."
  },
  {
    "id": "kriticke-problemy-seo",
    "template": "CheckerSlide",
    "content": {
      "title": "Kritické problémy, které blokují viditelnost.",
      "subtitle": "Technické chyby, které jsou opravitelné — ale musíme je znát.",
      "items": [
        "77 % stránek .com má duplicitní meta title — Google je penalizuje, nedokáže rozlišit obsah",
        "259 stránek CH — kompletně duplicitní metadata",
        "Chybí Pillar Pages — klíčové segmenty jsou na pozici ~99 v Googlu",
        "AI nevidí sub-brandy — LeaFlor, LeaDrain, LeaPerl AI neznají; přitom LeaFlor pokrývá hydroponie (19 000 hledání/měs.), kde AI doporučuje konkurenci"
      ],
      "highlightFooter": false
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": "Kritické SEO problémy zjištěné auditem."
  },
  {
    "id": "penize-na-stole",
    "template": "CheckerSlide",
    "content": {
      "title": "Peníze na stole.",
      "subtitle": "Co data ukazují, ale web dosud neadresuje.",
      "items": [
        "Hydrokultura / LeaFlor: 19 000 hledání/měs. v DE — AI doporučuje konkurenci, ne nás",
        "Water Management (filtrace, retence, infiltrace): 4 700 hledání/měs. — na webu neexistuje",
        "Hotové produkty v DE (Mauerstein, Rasengitterstein): 800–3 000 hledání/měs. — SEO ignoruje",
        "AI FAQ: strukturované Q&A = přímá cesta do odpovědí ChatGPT, Gemini, Perplexity"
      ],
      "footer": "Skvělý podklad pro strategii obsahu pro všechny trhy.",
      "highlightFooter": true
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": "Příležitosti identifikované SEO auditem."
  },
  {
    "id": "co-jsme-dodali",
    "template": "CheckerSlide",
    "content": {
      "title": "Co jsme dodali.",
      "subtitle": "Tři trhy. Tři struktury. Strategie pro tvorbu obsahu na minimálně 2 roky dopředu.",
      "items": [
        "Analýza klíčových slov — 4 485 slov napříč CZ, DE a CH. Clustery, záměry hledání, sezónnost, konkurenční pozice.",
        "Architektura webu — ~250 stránek pro liapor.cz, liapor.de a liapor.ch. URL struktura, interní prolinkování a nová pojmenování stránek — srozumitelná pro zákazníka i pro AI."
      ],
      "featuredLink": {
        "label": "Draft struktury webu CZ/DE",
        "url": "https://film-steel-15619116.figma.site/de"
      },
      "links": [
        {
          "label": "Stromová struktura CZ",
          "url": "https://docs.google.com/spreadsheets/d/1nFBQiMwo7EQVg2nmKHVnaXYEq001IF0Lmw-s6aIYa6Q/edit?gid=2095026485#gid=2095026485"
        },
        {
          "label": "Stromová struktura DE / CH",
          "url": "https://docs.google.com/spreadsheets/d/1moTGzGxCX_g2TQ3SWCJPAj53ErXks-Re/edit?gid=184560933#gid=184560933"
        }
      ],
      "highlightFooter": false
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": ""
  },
  {
    "id": "seo-dalsi-kroky",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Domluvit se na jednotném průniku stromové struktury.",
      "subtitle": "Každá země si pak zapne svoje potřebné.\n\nVidíte nějaké blockery?",
      "sticker": {
        "name": "HOW",
        "position": "top-right",
        "rotation": 12
      }
    },
    "config": {
      "backgroundColor": "bg-ant-brown",
      "textColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Akční krok + otázka na blockers."
  },
  {
    "id": "seo-linky",
    "template": "LinksSlide",
    "content": {
      "title": "Podklady.",
      "links": [
        {
          "label": "Full AI/SEO audit",
          "description": "Kompletní audit nalezitelnosti pro DE/EN",
          "url": "https://www.relevantni.cz/audit/ai-seo-audit-liapor-de-en"
        },
        {
          "label": "Analýza klíčových slov",
          "description": "4 500 klíčových slov napříč trhy",
          "url": "https://docs.google.com/spreadsheets/d/1PfqWUBRRpIA0EgR45L_CCj8F6xjvwoLY/edit?gid=377340385#gid=377340385"
        },
        {
          "label": "Stromová struktura CZ",
          "description": "Návrh struktury webu pro český trh",
          "url": "https://docs.google.com/spreadsheets/d/1nFBQiMwo7EQVg2nmKHVnaXYEq001IF0Lmw-s6aIYa6Q/edit?gid=2095026485#gid=2095026485"
        },
        {
          "label": "Stromová struktura DE / CH",
          "description": "Návrh struktury webu pro německý a švýcarský trh",
          "url": "https://docs.google.com/spreadsheets/d/1moTGzGxCX_g2TQ3SWCJPAj53ErXks-Re/edit?gid=184560933#gid=184560933"
        }
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": "Odkazy na audity a struktury."
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
      "image": "/images/cilove-skupiny.png",
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
    "id": "trocha-analytiky",
    "template": "HeroSlide",
    "content": {
      "title": "UX audit.",
      "subtitle": "Víme přesně, kde zákazníci odcházejí — a proč."
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
    "id": "design-z-dat",
    "template": "CheckerSlide",
    "content": {
      "title": "Design z dat,\nne z dojmů.",
      "subtitle": "Nový web stavíme na tom, jak se zákazníci skutečně chovají.",
      "items": [
        "Analytika — co funguje, co ne, kde se ztrácí pozornost",
        "Heatmapy — kam se kliká, co se ignoruje",
        "Session recordings — reálné chování uživatelů krok za krokem"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "accentLine": true
    },
    "notes": ""
  },
  {
    "id": "desktop-mobil-porovnani",
    "template": "ImageSlide",
    "content": {
      "title": "Desktop vs. mobil.",
      "images": [
        { "src": "/images/de-desktop-mobil.png", "label": "DE + AT", "note": "Výrazně vyšší podíl desktopu — B2B cílovka pracující u počítače." },
        { "src": "/images/cz-desktop-mobil.png", "label": "CZ", "note": "Vyšší podíl mobilu — silnější B2C segment a přímí spotřebitelé." }
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "compare"
    },
    "notes": ""
  },
  {
    "id": "broken-shop-link",
    "template": "ImageSlide",
    "content": {
      "title": "Nefunkční odkaz na e-shop na švýcarském webu.",
      "images": [
        { "src": "/images/broken-link-1.png", "label": "" },
        { "src": "/images/broken-link-2.png", "label": "" }
      ],
      "note": "⚠️ Teď funkční."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "compare"
    },
    "notes": ""
  },
  {
    "id": "drop-off-reference",
    "template": "ImageSlide",
    "content": {
      "title": "Zákazníci odcházejí před klíčovým obsahem.",
      "images": [
        { "src": "/images/chyba-2.png", "label": "" },
        { "src": "/images/chyba-3.png", "label": "" }
      ],
      "note": "Míra opuštění klesá z 85 % na 46 % v sekcích referencí produktů."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "compare"
    },
    "notes": ""
  },
  {
    "id": "novinky",
    "template": "ImageSlide",
    "content": {
      "title": "Novinky.",
      "image": "/images/novinky.png",
      "subtitle": "Rozhodli jsme se novinky na novém webu neuvádět."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1,
      "imageOffsetY": 0
    },
    "notes": ""
  },
  {
    "id": "mapa-prodejni-mista",
    "template": "ImageSlide",
    "content": {
      "title": "Mapa prodejních míst.",
      "image": "/images/mapa-czliapor.png",
      "subtitle": "Uživatelé se občas pokoušejí s mapou interagovat. Na novém webu bude klikatelná a interaktivní."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1,
      "imageOffsetY": 0
    },
    "notes": ""
  },
  {
    "id": "ke-stazeni",
    "template": "ImageSlide",
    "content": {
      "title": "Ke stažení.",
      "image": "/images/kestazeni.png",
      "subtitle": "Nejstahovanější položky umístit výš — blíže uživateli."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1,
      "imageOffsetY": 0
    },
    "notes": ""
  },
  {
    "id": "hledaji-mutaci",
    "template": "ImageSlide",
    "content": {
      "title": "Jsme tu správně?",
      "image": "/images/hledajimutaci.png",
      "subtitle": "Na švýcarském webu klikají na mapu — hledají švýcarskou mutaci. Web jim to neumožňuje snadno najít."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 1,
      "imageOffsetY": 0
    },
    "notes": ""
  },
  {
    "id": "cz-trasa",
    "template": "ImageSlide",
    "content": {
      "title": "Typická trasa uživatele (CZ).",
      "image": "/images/cztrasa.png",
      "description": "Úvod → produkty → …\nAplikace → aplikace → …\nProdukt → kontakt na stránce\nProdukt → kontakt (stávající zákazník)\nProdukt → kalkulátor\nProdukt → ke stažení"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "split",
      "imagePosition": "left",
      "imageContain": true
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
      "textColor": "text-white",
      "colWidths": ["4%", "38%", "38%", "20%"]
    }
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
      "textColor": "text-white",
      "colWidths": ["4%", "38%", "38%", "20%"]
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
      "textColor": "text-white",
      "colWidths": ["4%", "38%", "38%", "20%"]
    },
    "notes": "Top 15 nejnavštěvovanějších stránek CZ webu."
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
      "accentColor": "text-ant-green",
      "accentLine": true
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

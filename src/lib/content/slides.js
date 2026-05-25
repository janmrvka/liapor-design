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
      "image": "/images/kama-outdoor.webp",
      "titleLogo": "/logos/logo-liapor.jpg",
      "title": "Liapor",
      "subtitle": "Aus Ton Natürlich Nachhaltig",
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
      "videoId": "oIem16oRPMI"
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
    "id": "ant-references",
    "template": "LogoGridSlide",
    "content": {
      "title": "Nejsme teoretici.",
      "subtitle": "Jsme partneři pro fashion, který chce růst.",
      "logos": [
        {
          "name": "Evona",
          "image": "/images/evona.jpg",
          "noInvert": true,
          "description": "Z 0,5M → 5M+ měsíčně.\n7 let + spolu."
        },
        {
          "name": "Simpo",
          "image": "/images/simpo.png",
          "noInvert": true,
          "description": "Z 0 Kč → 1M+ měsíčně.\nNová značka, která prodává."
        },
        {
          "name": "Hannah",
          "image": "/images/hannah.png",
          "noInvert": true,
          "description": "CRO, které funguje.\nVíc konverzí z každé návštěvy."
        },
        {
          "name": "Zoot",
          "image": "/images/zoot.png",
          "noInvert": true,
          "description": "Zahraniční expanze.\nKampaně, které překračují hranice."
        }
      ],
      "sticker": {
        "name": "YES",
        "position": "bottom-right",
        "rotation": -8
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "largeLogos": true
    },
    "notes": "Reference agentury (ant) - fashion značky, se kterými spolupracujeme s konkrétními výsledky."
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
    "template": "BeforeAfterSlide",
    "content": {
      "title": "Z produktové fotky do lifestyle vizuálu.",
      "subtitle": "Více obsahu za stejné peníze díky AI.",
      "beforeImage": "/images/produktova-fotka-pred.png",
      "afterImage": "/images/ai-po.png",
      "beforeLabel": "PŘED",
      "afterLabel": "PO",
      "sticker": {
        "name": "WOW",
        "position": "bottom-right",
        "rotation": -8
      }
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "layout": "horizontal"
    },
    "notes": "Ukázka transformace produktové fotky na AI lifestyle vizuály - foto i video. Z jedné fotky vytvoříme více kontextů. Více obsahu za stejné peníze díky AI."
  },
  {
    "id": "ai-video-demo",
    "template": "VideoSlide",
    "content": {
      "video": "/images/evona-video.mp4",
      "title": "A stejně tak i video.",
      "subtitle": "Z produktové fotky do lifestyle videa díky AI."
    },
    "config": {
      "backgroundColor": "bg-black",
      "layout": "contain",
      "muted": true
    },
    "notes": "Ukázka AI video obsahu vytvořeného z produktové fotky - Evona."
  },
  {
    "id": "ai-video-performance",
    "template": "BeforeAfterSlide",
    "content": {
      "title": "AI videa vs. klasická videa",
      "subtitle": "Až 5× vyšší engagement při nižších nákladech",
      "beforeImage": "/images/vysledky1.png",
      "afterImage": "/images/vysledky2.png",
      "beforeLabel": "AI VIDEO",
      "afterLabel": "KLASICKÉ VIDEO"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "imageMaxHeight": "35vh",
      "imagePadding": "p-2"
    },
    "notes": "Porovnání výsledků AI videí vs klasických videí - demonstrace až 3x vyššího engagementu při použití AI obsahu. vysledky1.png = AI VIDEO (nahoře), vysledky2.png = KLASICKÉ VIDEO (dole)."
  },
  {
    "id": "ai-influencer-demo",
    "template": "ImageSlide",
    "content": {
      "image": "/images/ai-influ-evona.png",
      "title": "AI influencer přizpůsobený vaší značce.",
      "subtitle": "Upravte si ho podle cílové skupiny a oblékněte do vašich produktů."
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "layout": "overlay",
      "overlayOpacity": 0,
      "imageScale": 0.9,
      "imageOffsetY": 50
    },
    "notes": "Ukázka AI influencera - vytvoření virtuálního ambasadora značky přizpůsobeného cílové skupině, na kterého lze aplikovat produktové fotografie podle potřeby."
  },
  {
    "id": "social-media-impact",
    "template": "NumbersSlide",
    "content": {
      "title": "Reálný dopad na sociálních sítích.",
      "subtitle": "Neuvěřitelný dosah a podpora brandu.",
      "previewVideo": "/images/velxara.mp4",
      "numbers": [
        {
          "value": "3,2 tis.",
          "label": "Liků",
          "note": "Organický dosah",
          "link": "https://www.facebook.com/share/r/1FHPnnvazk/"
        },
        {
          "value": "94",
          "label": "Sdílení",
          "note": "Virální potenciál",
          "link": "https://www.facebook.com/share/r/1FHPnnvazk/"
        }
      ]
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black",
      "hideProgress": false
    },
    "notes": "Ukázka reálných výsledků na sociálních sítích - náhledový obrázek Facebook příspěvku s vlkem, kliknutím na karty se uživatel dostane k celému příspěvku."
  },
  {
    "id": "product-page-optimization",
    "template": "ImageSlide",
    "content": {
      "image": "/images/liftor-stul.png",
      "title": "Detail rozhoduje.",
      "subtitle": "Optimalizace produktové stránky pro maximální konverzi"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0.3
    },
    "notes": "Ukázka detailní práce na optimalizaci produktové stránky - každý detail má vliv na úspěšnost kampaní. Zobrazuje finální podobu produktové stránky s optimalizovaným layoutem, copy, vizuály a CTA prvky pro maximalizaci konverzí."
  },
  {
    "id": "video-gallery",
    "template": "VideoGallerySlide",
    "content": {
      "title": "Reálný obsah je král.",
      "videos": [
        "/images/liftor1.mp4",
        "/images/liftor4.mp4",
        "/images/liftor2.mp4",
        "/images/liftor3.mp4"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "muted": true
    },
    "notes": "Ukázka AI-generovaných videí z produktových fotografií - postupné automatické přehrávání."
  },
  {
    "id": "campaign-results",
    "template": "NumbersSlide",
    "content": {
      "title": "Výsledky kampaně.",
      "subtitle": "Google Ads / Meta Ads - růst, který mluví za vše",
      "numbers": [
        {
          "value": "50 000+ Kč",
          "label": "💰 Denní investice",
          "note": "Růst z jednotek tisíc → 50k+ / den",
          "progress": 100,
          "progressColor": "#000000"
        },
        {
          "value": "10+ ks",
          "label": "📦 Denní prodeje",
          "note": "Růst z jednotek → desítky kusů / den",
          "progress": 100,
          "progressColor": "#000000"
        },
        {
          "value": "💬",
          "label": "Reakce klienta",
          "note": "„Těším se na dnešní spendy\"",
          "progress": 100,
          "progressColor": "#000000"
        }
      ],
      "hideBrandSticker": false
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Výsledky kampaní - růst z jednotek tisíc denně na 75k+ Kč/den, prodeje z jednotek ks na desítky denně. Klient píše: Těším se na dnešní spendy."
  },
  {
    "id": "co-vime-intro",
    "template": "HeroSlide",
    "content": {
      "title": "Co víme.",
      "subtitle": "Chápeme váš problém líp než ostatní.",
      "sticker": {
        "name": "WTF",
        "position": "bottom-right",
        "rotation": -8
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "backgroundVariant": "none"
    },
    "notes": "Přechod do sekce analýzy - ukážeme, že rozumíme byznysu KAMA. Sticker WTF upozorňuje na krátkou sezónu."
  },
  {
    "id": "struktura-byznysu",
    "template": "NumbersSlide",
    "content": {
      "title": "Jak dnes KAMA vydělává.",
      "subtitle": "Realita bez příkras.",
      "numbers": [
        {
          "value": "55%",
          "label": "B2B",
          "note": "celkového obratu",
          "progress": 55,
          "progressColor": "#5bffc4"
        },
        {
          "value": "30%",
          "label": "B2C",
          "note": "celkového obratu (e-shop)",
          "progress": 30,
          "progressColor": "#dad4ff"
        },
        {
          "value": "15%",
          "label": "Zakázky",
          "note": "celkového obratu",
          "progress": 15,
          "progressColor": "#d7edff"
        }
      ],
      "hideBrandSticker": true
    },
    "config": {
      "backgroundColor": "bg-ant-brown",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Celkový poměr diverzifikace: B2C 30%, B2B 55%, Zakázky 15%. CZ vs zahraničí: 60-70% vs 30-40%. U B2C je to 1:10 CZ vs zahraničí."
  },
  {
    "id": "b2c-detail",
    "template": "NumbersSlide",
    "content": {
      "title": "B2C e-shop v číslech.",
      "numbers": [
        {
          "value": "90%",
          "label": "E-shop",
          "note": "B2C prodejů online",
          "progress": 90,
          "progressColor": "#5bffc4"
        },
        {
          "value": "10%",
          "label": "Prodejna",
          "note": "B2C prodejů offline",
          "progress": 10,
          "progressColor": "#dad4ff"
        }
      ],
      "hideBrandSticker": true
    },
    "config": {
      "backgroundColor": "bg-ant-purple",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Roční obrat e-shopu B2C 10-20 milionů Kč. Naše e-shopy mají i násobek – víme, jak škálovat."
  },
  {
    "id": "monthly-revenue",
    "template": "BarChartSlide",
    "content": {
      "title": "Sezónní realita v číslech",
      "subtitle": "Měsíční obrat ukazuje jasný vzorec - jsme zimní značka",
      "data": [
        {
          "label": "Duben–Srpen",
          "value": 100000,
          "color": "#ff6b6b",
          "emoji": "☀️"
        },
        {
          "label": "Září",
          "value": 300000,
          "color": "#ffa07a",
          "emoji": "🍂"
        },
        {
          "label": "Říjen",
          "value": 1000000,
          "color": "#ffd93d",
          "emoji": "🍂"
        },
        {
          "label": "Listopad",
          "value": 3000000,
          "color": "#5bffc4",
          "emoji": "❄️"
        },
        {
          "label": "Prosinec",
          "value": 5000000,
          "color": "#5bffc4",
          "emoji": "❄️"
        },
        {
          "label": "Leden",
          "value": 1500000,
          "color": "#95e1d3",
          "emoji": "❄️"
        },
        {
          "label": "Únor",
          "value": 500000,
          "color": "#dad4ff",
          "emoji": "❄️"
        },
        {
          "label": "Březen",
          "value": 300000,
          "color": "#ffa07a",
          "emoji": "🍂"
        }
      ],
      "insights": [
        "💡 80% obratu za 4 měsíce z cca 12 mil. Kč"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "#5bffc4"
    },
    "notes": "Graf měsíčního obratu jasně ukazuje sezónnost. Prosinec je peak s 5M Kč, léto téměř nic. To musíme změnit."
  },
  {
    "id": "co-vime-sila",
    "template": "CheckerSlide",
    "content": {
      "title": "KAMA = lovebrand.",
      "items": [
        "Kvalita a TOP materiály",
        "Rodinný příběh Pertlových",
        "Dražší, funkční, dlouhodobý produkt",
        "Krásné, etické, transparentní a udržitelné",
        "Výroba výhradně v České republice",
        "Ekologicky certifikované materiály",
        "Sponzoring vrcholových sportovců i mladých talentů"
      ],
      "footer": "Ale byznys stojí na krátké zimní sezóně.",
      "highlightFooter": true
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "KAMA je silná značka, lovebrand, kvalita, TOP materiály. Ale byznys stojí na krátké zimní sezóně, vzorech a horách."
  },
  {
    "id": "komunikace-dnes-intro",
    "template": "HeroSlide",
    "content": {
      "title": "Jak komunikujeme dnes.",
      "ctas": [
        {
          "text": "Kampaně KAMA",
          "subtext": "Ukazujeme hlavně produkty.",
          "link": "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&search_type=page&sort_data[direction]=desc&sort_data[mode]=total_impressions&view_all_page_id=147633114858"
        },
        {
          "text": "Kampaně Evona",
          "subtext": "Ukázka aktivní práce s kreativou.",
          "link": "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CZ&is_targeted_country=false&media_type=all&search_type=page&sort_data[direction]=desc&sort_data[mode]=total_impressions&view_all_page_id=128052257231782"
        }
      ],
      "image": "/images/dnes.png"
    },
    "config": {
      "backgroundColor": "bg-ant-brown",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none",
      "compactTitle": true
    },
    "notes": "Aktuální komunikace KAMA - zaměření na produkty, materiály. Chybí emoce, příběh, kontext použití."
  },
  {
    "id": "co-potrebujeme",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Největší výzvy.",
      "subtitle": "Jak zvýšit obrat?\nJak změnit vnímání KAMA = \"vzory na hory\"?\nJak zaujmout mladší klientelu?\nJak zvýšit obrat mimo sezónu?",
      "sticker": {
        "name": "HOW",
        "position": "bottom-right",
        "rotation": -8
      }
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "backgroundImage": "/images/vyzvy.webp?v=1770471964767"
    },
    "notes": "Jak z lovebrandu na zimu udělat značku, kterou lidi nosí celý rok – a kupují opakovaně."
  },
  {
    "id": "jak-to-zmenit",
    "template": "HeroSlide",
    "content": {
      "title": "Jak to změnit?",
      "sticker": {
        "name": "HOW",
        "position": "bottom-right",
        "rotation": -8
      }
    },
    "config": {
      "backgroundColor": "#FFFDA0",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Přechodový slide - otázka jak změnit stávající stav a posunout značku dopředu."
  },
  {
    "id": "nejdriv-vas-pozname",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Nejdříve Vás poznáme.",
      "subtitle": "Proto začneme audity a analýzami.\n\nŽádné střelby od boku.\nŽádné plýtvání rozpočtem.\nData nám ukážou, kde leží největší příležitosti.",
      "sticker": {
        "name": "WOW",
        "position": "bottom-right",
        "rotation": -8
      }
    },
    "config": {
      "backgroundColor": "bg-ant-purple",
      "textColor": "text-black"
    },
    "notes": "Než začneme investovat, musíme vědět, kam míříme. Audity odhalí skryté příležitosti a ušetří zbytečné náklady."
  },
  {
    "id": "audity-detail",
    "template": "CheckerSlide",
    "content": {
      "title": "Co uděláme?",
      "subtitle": "Detailní prověrka.",
      "items": [
        "📊 Audit brandu – říkáme CO, ne PROČ",
        "🎨 Audit kreativy – kde hledáme WOW efekt",
        "💰 Audit PPC/SOC kampaní – co funguje a co žere peníze",
        "🔍 Audit SEO/GEO – co si o vás myslí Google a AI",
        "👁️ Audit UX/UI – zvýšíme úspěšnost e-shopu",
        "📈 Audit analytiky – měříme správné věci správně?"
      ],
      "footer": "Z dat na strategii. Ze strategie na výsledky."
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Kompletní prověrka všech kanálů. Brand, kreativa, výkonnostní kampaně (SOC, PPC, porovnávače), UX/UI, SEO i analytika. Odhalíme, co funguje a co je zbytečný výdaj."
  },
  {
    "id": "produktova-analyza",
    "template": "CheckerSlide",
    "content": {
      "title": "Co pro vás zjistíme?",
      "subtitle": "",
      "items": [
        "🔍 Co lidé skutečně hledají – existující poptávka",
        "📱 Které produkty táhnou na sociálních sítích",
        "👥 Kdo jsou vaše skutečné persony – ne jen odhady",
        "💬 Proč cílovka kupuje právě KAMU (uživatelský výzkum)",
        "🎯 Co řeší zákaznická podpora nejčastěji",
        "🛒 Jak vypadá ideální košík a jak k němu zákazníky dovést"
      ],
      "footer": "Data pomáhají řídit výrobu, kampaně i produktový vývoj."
    },
    "config": {
      "backgroundColor": "bg-ant-blue",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Produktová analýza pomocí vyhledávání, social insights, persony, uživatelský výzkum, analýza zákaznické podpory, optimalizace košíku. Data nám ukážou nejen jak prodávat, ale i co vyrábět."
  },
  {
    "id": "prostor-intro",
    "template": "HeroSlide",
    "content": {
      "title": "Kde je prostor?",
      "subtitle": "Brand není jen logo. Je to DNA firmy."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "backgroundVariant": "none"
    },
    "notes": "Silný brand není hezké logo, ale jasný důvod, proč si tě zákazník vybere, zapamatuje a zaplatí ti víc než konkurenci."
  },
  {
    "id": "dykeno-case-study",
    "template": "ImageGallerySlide",
    "content": {
      "title": "Ukázka brandu Dykeno",
      "images": [
        "/images/Dyk1.png?v=20260209",
        "/images/Dyk2.png?v=20260209",
        "/images/Dyk3.png?v=20260209"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "columns": 3,
      "aspectRatio": "auto",
      "objectFit": "contain",
      "fullHeight": true,
      "imageScale": 0.7,
      "titleFontSize": "3rem",
      "titleMarginTop": "30px",
      "marginTop": "-30px"
    },
    "notes": "Ukázka brand práce pro Dykeno - pracovní oblečení a nástroje. Bannery demonstrují brand positioning."
  },
  {
    "id": "ant-brand-transformation",
    "template": "BeforeAfterSlide",
    "content": {
      "title": "Jak pomohl nový brand nám?",
      "beforeImage": "/images/ant1.png",
      "afterImage": "/images/ant2.png",
      "beforeLabel": "PŘED",
      "afterLabel": "PO"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "horizontal"
    },
    "notes": "Ukázka transformace brand identity agentury ant - před a po rebrandingu."
  },
  {
    "id": "emoce-pribeh",
    "template": "ImageSlide",
    "content": {
      "image": "/images/kama/lookbook1.jpg",
      "title": "Generace pro generace.",
      "subtitle": "Silný rodinný příběh.",
      "description": "Maminka ji měla ráda. Kupovala ji mně.\nJá ji kupuju svým dětem."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "split",
      "imagePosition": "left"
    },
    "notes": "Je to značka, kterou měla ráda už moje maminka – česká, poctivá, nejlepší materiály, krásné vzory. Kupovala ji mně, já s ní mám skvělou zkušenost, tak ji dnes kupuju svým dětem."
  },
  {
    "id": "aktivity-prilezitosti",
    "template": "CheckerSlide",
    "content": {
      "title": "KAMA pro každý den.",
      "subtitle": "Nejen na hory. Všude, kde žijete.",
      "items": [
        "🏙️ Do práce a do města – MHD, auto, pochůzky",
        "🚶 Každodenní aktivity – procházky, venčení psa",
        "🏔️ Outdoor – turistika, běh, cyklistika, ferraty",
        "✈️ Cestování – city breaky, víkendové výlety",
        "👨‍👩‍👧 Rodinný čas – hřiště, výlety, posezení venku",
        "🧘 Sport & relax – joga, nordic walking, treking"
      ],
      "footer": "Les, město, kombinace. Merino funguje všude."
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "KAMA produkty nejsou jen na hory. Ukážeme všechny příležitosti: do práce, město, MHD, každodenní nošení, turistika, běh, outdoor aktivity, cestování, rodinné výlety, venčení psa. Merino je univerzální materiál pro všechny životní situace."
  },
  {
    "id": "influenceri-ugc",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Zapojení UGC a ambasadorů.",
      "subtitle": "Olympionici, ambasadoři, reální zákazníci.\nAutentický obsah vs. katalogové fotky.\nZapojení komunity = důvěra.",
      "sticker": {
        "name": "HOT",
        "position": "top-right",
        "rotation": 12
      }
    },
    "config": {
      "backgroundColor": "bg-ant-pink",
      "textColor": "text-black"
    },
    "notes": "Máme ambasadory a olympioniky. V roce 2024 spolupráce s influencery. UGC obsah buduje důvěru lépe než katalogové fotky."
  },
  {
    "id": "video-gallery-2",
    "template": "VideoGallerySlide",
    "content": {
      "title": "Autentický obsah, který oslovuje",
      "subtitle": "",
      "videos": [
        "/images/boty.mp4",
        "/images/pata.mp4",
        "/images/north.mp4"
      ],
      "links": [
        "https://www.instagram.com/goldieinspired.ugc/reel/DIAoASWR1aj/",
        "https://www.instagram.com/reel/DQ5CWhPkg8X/",
        "https://www.instagram.com/reel/DM8DpesssAR/"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "muted": true
    },
    "notes": "Ukázka AI-generovaných videí z produktových fotografií - postupné automatické přehrávání."
  },
  {
    "id": "ugc-hooky-3",
    "template": "CheckerSlide",
    "content": {
      "title": "UGC hooky, které fungují.",
      "subtitle": "Recenze",
      "items": [
        "\"Nosím to už tři roky.\"",
        "\"Kupovala jsem to s obavami, ale…\"",
        "\"Mám ho už několik let.\"",
        "\"Pořád funguje, jak má.\"",
        "\"Bála jsem se, že se to při praní..\""
      ],
      "footer": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": "Příklady hooků: Recenze, Anti-fast-fashion, Počasí/teplota, Cost per wear. Napárovat na produktové a výkonové kampaně."
  },
  {
    "id": "ugc-hooky",
    "template": "CheckerSlide",
    "content": {
      "title": "UGC hooky, které fungují.",
      "subtitle": "Anti-fast-fashion framing",
      "items": [
        "\"Už mě nebaví kupovat oblečení každý rok znovu.\"",
        "\"Levné věci mě ve finále stojí víc.\"",
        "\"Nechci řešit, že mi je zima.\""
      ],
      "footer": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": "Příklady hooků: Recenze, Anti-fast-fashion, Počasí/teplota, Cost per wear. Napárovat na produktové a výkonové kampaně."
  },
  {
    "id": "jak-ziskat-fotky",
    "template": "HeroSlide",
    "content": {
      "title": "Chybí kreativa? Nevadí.",
      "subtitle": "Inspirace, testy, výsledky."
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Jak rychle získat fotky pro testování UGC obsahu, když nemáme vlastní materiály."
  },
  {
    "id": "modelka-slide",
    "template": "ImageSlide",
    "content": {
      "image": "/images/modelka.png",
      "title": "Vybereme tvář, která nejlépe rezonuje s cílovkou",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "imagePosition": "center",
      "overlayOpacity": 0,
      "imageScale": 0.9
    },
    "notes": "Ukázka modelky - inspirace pro kreativu."
  },
  {
    "id": "scenare-slide",
    "template": "ImageSlide",
    "content": {
      "image": "/images/3fotky.png",
      "title": "Volíme situace, ve kterých produkt dává smysl.",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "imagePosition": "center",
      "overlayOpacity": 0
    },
    "notes": "Různé scénáře použití produktů KAMA - 3 situace."
  },
  {
    "id": "scenare-slide-2",
    "template": "ImageSlide",
    "content": {
      "image": "/images/kancl.png",
      "title": "… nebo v kanceláři.",
      "subtitle": ""
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "imagePosition": "center",
      "overlayOpacity": 0,
      "imageScale": 0.95
    },
    "notes": "Různé scénáře použití produktů KAMA - 3 situace."
  },
  {
    "id": "scenare-slide-3",
    "template": "ImageGallerySlide",
    "content": {
      "title": "Ukázky bannerové kreativy",
      "subtitle": "",
      "images": [
        "/images/banner1.png",
        "/images/banner2.png",
        "/images/banner3.png"
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "flex",
      "objectFit": "cover",
      "imageScale": 1,
      "gap": "3"
    },
    "notes": "Tři bannery zobrazující různé scénáře použití produktů KAMA."
  },
  {
    "id": "statika-sety",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Jedna kreativa.\nVíce sdělení.",
      "subtitle": "Na meeting. Na rande. I ven se psem.\nRáno chlad. Odpoledne pohoda.\nPro dnešek, zítra i jednou pro naše děti.\nVyrobeno v Česku.",
      "sticker": {
        "name": "WOW",
        "position": "bottom-right",
        "rotation": -8
      }
    },
    "config": {
      "backgroundColor": "bg-ant-purple",
      "textColor": "text-black"
    },
    "notes": "Ukázka pro statiku v praxi - jedna kreativa, více typů sdělení. Sety pro muže, děti, ženy. Propojené s UGC."
  },
  {
    "id": "ai-zrychleni",
    "template": "CheckerSlide",
    "content": {
      "title": "AI nenahrazuje. AI rozšiřuje.",
      "subtitle": "Máte skvělé fotky? Výborně. Teď z nich uděláme 4×víc obsahu.",
      "items": [
        "Jedna fotka → 10 kontextů. Kancelář, kavárna, park, metro.",
        "Jeden produkt → 5 úhlů. Detail, lifestyle, akce, atmosféra.",
        "Jedno focení → obsah na celý kvartál.",
        "Reálné fotky tvoří základ. AI ho chytře multiplikuje."
      ],
      "footer": "Důležitá podmínka? AI musí být k nerozeznání od reality. Pravidlo 3:1 — tři reálné, jedna AI.",
      "highlightFooter": true
    },
    "config": {
      "backgroundColor": "bg-ant-blue",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "AI není náhrada za reálné fotky, ale chytrý nástroj pro rozšíření obsahu. Pravidlo 3:1 = 3 reálné fotky, 1 AI variace. AI umožňuje rychle testovat různé kontexty a situace při zachování realistického vzhledu."
  },
  {
    "id": "care-faze",
    "template": "ManifestoSlide",
    "content": {
      "statement": "Zapojit více fází: Care.",
      "subtitle": "KAMA Repair Service – opravíme, co se roztrhne.\nJak správně pečovat o produkt.\nNení to svetr na 3 měsíce.",
      "sticker": {
        "name": "FIX",
        "position": "top-right",
        "rotation": 15
      }
    },
    "config": {
      "backgroundColor": "bg-ant-brown",
      "textColor": "text-black"
    },
    "notes": "Patagonia nabízí opravy - obhájí cenu. Jak správně pečovat o produkt - praní, čištění, údržba. Toto obhájí prémiovou cenu."
  },
  {
    "id": "kids-future",
    "template": "HeroSlide",
    "content": {
      "title": "Věrnost se buduje\nod plenek.",
      "subtitle": "Kids Merino = Vstupní brána do rodinného rozpočtu.",
      "bannerCopy": "\"Kupovala mi ji maminka.\nTeď ji kupuju svým dětem.\""
    },
    "config": {
      "backgroundColor": "bg-ant-pink",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none",
      "backgroundImage": "/images/baby.png",
      "backgroundImageScale": 0.7
    },
    "notes": "Kdo je náš budoucí zákazník? Dnešní děti. Značky jako Salted ukazují, že merino pro děti je obrovský trend. Je to vstupní brána do rodinného rozpočtu. Přes děti získáme maminky."
  },
  {
    "id": "b2b-treasure",
    "template": "ImageSlide",
    "content": {
      "image": "/images/obchod.jpg",
      "title": "B2B: Skrytý poklad.",
      "subtitle": "55 % byznysu",
      "description": "Díky B2C podpoříme i B2B."
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "split",
      "imagePosition": "left"
    },
    "notes": "Polovina našeho obratu je B2B. A přesto se k němu chováme macešsky."
  },
  {
    "id": "offer-intro",
    "template": "StatementSlide",
    "content": {
      "statement": "KAMA",
      "subtitle": "Příběh, který roste.",
      "description": "Nápady, které baví, rezonují a přinášejí výsledky.",
      "footer": "Nabídka platí od 10.2.2026 do 10.3.2026"
    },
    "config": {
      "backgroundColor": "bg-ant-yellow",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Úvodní slide nabídky - umístěný za B2B slidem."
  },
  {
    "id": "offer-phase-1",
    "template": "NumbersSlide",
    "content": {
      "title": "Fáze I.",
      "subtitle": "Audity, které ovlivní největší část výsledků",
      "numbers": [
        {
          "value": "8 tis. Kč",
          "label": "Audit sociálních sítí",
          "note": "Analýza současného stavu, identifikace příležitostí"
        },
        {
          "value": "15 tis. Kč",
          "label": "Audit PPC kampaní",
          "note": "Zhodnocení efektivity PPC kampaní"
        },
        {
          "value": "15 tis. Kč",
          "label": "Audit kreativy a podkladů",
          "note": "Audit designu, copy, sumarizace podkladů, příprava zadání"
        }
      ],
      "footer": "Realizace auditů: max 14 dní | Následně možné převzetí kampaní a upřesnění náročnosti převzetí kampaní\nNabídka platí od 10.2.2026 do 10.3.2026"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "layout": "grid",
      "compactNumbers": true
    },
    "notes": "První fáze nabídky - audity základních kanálů."
  },
  {
    "id": "offer-phase-2",
    "template": "StatementSlide",
    "content": {
      "statement": "Fáze II.",
      "subtitle": "Úprava náročnosti převzetí kampaní",
      "description": "Na základě výsledků auditů z Fáze I. a po společné konzultaci upravíme náročnost převzetí kampaní.\n\nJsme si vědomi, že bude potřeba jiná náročnost na jaro, léto, podzim i zimu. Zároveň předpokládáme, že kredity se v zimním období využívaly neefektivně, ale to potvrdí až audity.",
      "footer": "Nabídka platí od 10.2.2026 do 10.3.2026"
    },
    "config": {
      "backgroundColor": "bg-ant-purple",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Druhá fáze - vysvětlení úpravy náročnosti převzetí kampaní na základě výsledků auditů."
  },
  {
    "id": "offer-phase-3",
    "template": "NumbersSlide",
    "content": {
      "title": "Fáze III.",
      "subtitle": "Audity pro dlouhodobý efekt",
      "numbers": [
        {
          "value": "25 tis. Kč",
          "label": "Audit SEO/GEO",
          "note": "Organické vyhledávání a lokální optimalizace, AI vyhledávače, EEAT"
        },
        {
          "value": "20 tis. Kč",
          "label": "Audit UX",
          "note": "Uživatelská zkušenost a cesta zákazníka"
        },
        {
          "value": "8 tis. Kč",
          "label": "Audit analytiky",
          "note": "Měření, tracking a reporty"
        }
      ],
      "footer": "Realizace auditů: max 20 dní\nNabídka platí od 10.2.2026 do 10.3.2026"
    },
    "config": {
      "backgroundColor": "bg-ant-blue",
      "textColor": "text-black",
      "accentColor": "text-black",
      "layout": "grid",
      "compactNumbers": true
    },
    "notes": "Třetí fáze nabídky - pokročilé audity."
  },
  {
    "id": "offer-phase-4",
    "template": "CheckerSlide",
    "content": {
      "title": "Fáze IV.",
      "subtitle": "Co budeme řešit dále",
      "items": [
        "Analýza klíčových slov",
        "Definice person",
        "Uživatelský výzkum",
        "Brand a komunikační strategie",
        "Produktová analýza",
        "Ideální košík"
      ]
    },
    "config": {
      "backgroundColor": "bg-ant-pink",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Čtvrtá fáze nabídky - další možné oblasti pro spolupráci."
  },
  {
    "id": "proc-ant",
    "template": "CheckerSlide",
    "content": {
      "title": "Proč (ant)?",
      "subtitle": "Nejsme jen agentura. Jsme partneři.",
      "items": [
        "25 let zkušeností s českými značkami",
        "Fashion DNA: EVONA, SIMPO, HANNAH a další",
        "Full-service: Analýzy → Strategie → Kreativa → Performance",
        "Rozumíme výrobě i prodeji v ČR"
      ],
      "footer": "WTF nápady. WOW výsledky."
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black"
    },
    "notes": "Proč právě my? 25 let na trhu, fashion know-how (SIMPO, EVONA, HANNAH), full-service od strategie po performance. Rozumíme českému trhu i výrobě textilu."
  },
  {
    "id": "co-ziskate",
    "template": "NumbersSlide",
    "content": {
      "title": "Co s námi získáte?",
      "subtitle": "Měřitelné výsledky, ne sliby.",
      "numbers": [
        {
          "value": "12",
          "label": "Měsíců",
          "note": "celoroční relevance značky",
          "progress": 100,
          "progressColor": "#5bffc4"
        },
        {
          "value": "3×",
          "label": "Více obsahu",
          "note": "(wow) kreativa, která zasáhne",
          "progress": 100,
          "progressColor": "#dad4ff"
        },
        {
          "value": "1",
          "label": "Tým",
          "note": "strategie + kreativa + performance",
          "progress": 100,
          "progressColor": "#ffe2eb"
        }
      ],
      "hideBrandSticker": false
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": "Celoroční relevance značky. 3× více obsahu díky AI strategii. Jeden tým pro všechno – žádné ztráty v překladu mezi agenturami."
  },
  {
    "id": "cta",
    "template": "HeroSlide",
    "content": {
      "title": "Máme tradici.",
      "subtitle": "Teď potřebujeme odvahu."
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black",
      "backgroundVariant": "none"
    },
    "notes": "Call to action. Tady je prostor pro diskuzi."
  },
  {
    "id": "contact",
    "template": "ContactWowSlide",
    "content": {
      "title": "Udělejme to spolu.",
      "subtitle": "www.antstudio.cz",
      "clientLogo": "/client/kama-logo.svg"
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    },
    "notes": "Závěrečný slide. Děkujeme za pozornost a těšíme se na spolupráci."
  },
  {
    "id": "title-copy",
    "template": "ImageSlide",
    "content": {
      "image": "/images/kama-outdoor.webp",
      "titleLogo": "/logos/kama a slogan-new.png",
      "title": "(ant)",
      "subtitle": "Audity dokončeny — přichází čas na změnu.",
      "description": "Víme, kde jsou peníze. Víme, jak je vrátit zpět.",
      "stickers": [
        {
          "image": "/images/wow_je_nase_proc_-_bile-removebg-preview.png",
          "position": "bottom-right",
          "rotation": -8,
          "size": "xl"
        }
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "layout": "overlay",
      "overlayOpacity": 0.7
    },
    "notes": "Audity jsou za námi. Víme přesně, kde peníze mizí a jak je vrátit. Teď přichází čas na změnu."
  },
  {
    "id": "audit-links",
    "template": "LinksSlide",
    "content": {
      "title": "Audity",
      "subtitle": "Odhalili jsme, kde peníze mizí a jak je vrátit zpět.",
      "links": [
        {
          "label": "PPC audit",
          "description": "Analýza Google Ads kampaní, kredity, výkon a plýtvání",
          "url": "https://docs.google.com/document/d/1gA_AwsVZYBlrZl5h3t6DAdeglqnjl12ooOGBODwh4kg/edit?usp=sharing"
        },
        {
          "label": "Audit sociálních sítí",
          "description": "Analýza výkonu, obsahu a příležitostí na sociálních sítích",
          "url": "https://docs.google.com/document/d/1ult-MRgnHKDsTGcqCIHnSaM1XrrgeYm4Qs8n5shSLZI/edit?tab=t.0"
        },
        {
          "label": "Audit kreativy",
          "description": "Hodnocení bannerů, videí a kreativní strategie",
          "url": "https://docs.google.com/document/d/1E4kQ92BuJixhOf24TOY9zXjKsjo5hGxmlwMmHjFLZ4w/edit?tab=t.0"
        }
      ]
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green"
    }
  },
  {
    "id": "current-performance",
    "template": "NumbersSlide",
    "content": {
      "title": "Kde jsme dnes.",
      "subtitle": "Čísla mluví jasně. Ale říkají i to, kde je prostor.",
      "numbers": [
        {
          "value": "13,6 mil. Kč",
          "label": "Roční obrat",
          "note": "Aktuální výkonnost e-shopu",
          "progress": 100,
          "progressColor": "#5bffc4"
        },
        {
          "value": "17 %",
          "label": "PNO",
          "note": "2,3 mil. Kč / rok na práci a kredity",
          "progress": 17,
          "progressColor": "#ff6b6b"
        },
        {
          "value": "⚠️",
          "label": "Brandová poptávka",
          "note": "Sbíráme lidi, kteří nás už znají. Akvizice nových zákazníků chybí.",
          "progress": 100,
          "progressColor": "#ffd93d"
        }
      ],
      "footerWarning": "Bez akvizice roste jen sezóna – ne značka.",
      "hideBrandSticker": true
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "compactNumbers": true
    },
    "notes": "Aktuální výkonnost: obrat 13,6 mil. Kč, PNO 17 % = 2,3 mil. Kč náklady. Hlavní problém: kampaně sbírají pouze brandovou poptávku (lidé, kteří KAMU znají). Akvizice nových zákazníků téměř nulová – to je největší příležitost pro růst."
  },
  {
    "id": "wasted-spend",
    "template": "NumbersSlide",
    "content": {
      "title": "Co nám uniká.",
      "subtitle": "Google Ads audit odhalí konkrétní ztráty.",
      "numbers": [
        {
          "value": "420 tis. Kč",
          "label": "Vyhozené kredity",
          "note": "20 produktů utrácí 20 % z 2,1 mil. Kč kreditů – s nulovým obratem",
          "progress": 20,
          "progressColor": "#ff6b6b"
        },
        {
          "value": "75 tis. Kč",
          "label": "Práce v mimosezóně",
          "note": "Plná sazba za správu kampaní, které v létě nevyžadují péči",
          "progress": 100,
          "progressColor": "#ff6b6b"
        }
      ],
      "footerWarning": "Audit odhalí, kde přesně peníze mizí. A jak je vrátit zpět.",
      "hideBrandSticker": true
    },
    "config": {
      "backgroundColor": "bg-black",
      "textColor": "text-white",
      "accentColor": "text-ant-green",
      "compactNumbers": true
    },
    "notes": "20 produktů v Google Ads utrácí ~20 % kreditů (420 tis. Kč) s nulovým obratem. Práce v mimosezóně za 75 tis. Kč je vyhozená. Celkem ~495 tis. Kč ztraceno ročně špatnou optimalizací. Toto je přesně to, co audit odhalí a napraví."
  },
  {
    "id": "growth-potential",
    "template": "NumbersSlide",
    "content": {
      "title": "Investice do růstu.",
      "subtitle": "Ne do stagnace.",
      "numbers": [
        {
          "value": "+4,4 mil. Kč",
          "label": "Nárůst obratu +30 %",
          "note": "Obrat roste na 18 mil. Kč",
          "progress": 100,
          "progressColor": "#000000"
        },
        {
          "value": "+1,3 mil. Kč",
          "label": "Čistý zisk — palivo pro růst",
          "note": "Každá koruna zpět do značky, ne do stagnace",
          "progress": 30,
          "progressColor": "#000000"
        }
      ],
      "hideBrandSticker": true
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black",
      "compactNumbers": true,
      "hideProgress": false
    },
    "notes": "Zvýšení PNO na 30 % = investice ~4,8 mil. Kč při obratu 16 mil. Ale obrat roste na 16–18 mil. Kč. Čistý příjem KAMY se zvyšuje o 2–4 mil. Kč ročně. Navíc: nová klientská základna, celoroční prodeje místo sezónního výkyvu, silnější pozice pro B2B."
  },
  {
    "id": "nabidka-spoluprace",
    "template": "LinksSlide",
    "content": {
      "title": "Nabídka spolupráce.",
      "subtitle": "Rozpočty závisí na množství kreativy. Klíčové je teď rozhodnout, jaký poměr investujeme zpět do onlinu.",
      "note": "Zvažte a zahrňte do rozpočtu všechny náklady i na správu shopu — abychom mohli dlouhodobě růst.",
      "links": [
        {
          "label": "Návrh řešení",
          "description": "Teď je nejdůležitější určit poměr investice pro dlouhodobý růst",
          "url": "https://docs.google.com/spreadsheets/d/1hiU3Oc3PJ_yAgqZwi6_Q4M4Tzs6h4ZqapQ54dYUNg6E/edit?gid=0#gid=0"
        },
        {
          "label": "Dosavadní výsledky",
          "description": "Přehled období 04/25 – 02/26 — jak to bylo doposud",
          "url": "https://docs.google.com/spreadsheets/d/1hiU3Oc3PJ_yAgqZwi6_Q4M4Tzs6h4ZqapQ54dYUNg6E/edit?gid=804619318#gid=804619318"
        }
      ]
    },
    "config": {
      "backgroundColor": "bg-ant-green",
      "textColor": "text-black",
      "accentColor": "text-black"
    }
  },
  {
    "id": "contact-copy",
    "template": "ContactWowSlide",
    "content": {
      "title": "Udělejme to spolu.",
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

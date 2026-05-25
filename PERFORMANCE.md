# Performance Optimizations

Tento dokument popisuje implementované optimalizace pro rychlejší načítání prezentace.

## Implementované optimalizace

### 1. Next.js Configuration
- **Image Optimization**: WebP a AVIF formáty pro menší velikost souborů
- **Bundle Optimization**: Optimalizace importů Framer Motion a Lucide React
- **Compression**: Gzip komprese pro všechny assety
- **Source Maps**: Vypnuté v produkci pro rychlejší build

### 2. Image Loading
- **Eager Loading**: Obrázky na aktuálním slidu se načítají okamžitě
- **Priority Loading**: Důležité obrázky mají vysokou prioritu
- **Loading Attributes**: Správné `loading` atributy pro optimální načítání

### 3. Media Preloading
- **Adjacent Slides**: Preload obrázků a videí ze sousedních slidů
- **Smart Preloading**: Preload 2 slidů dopředu pro plynulejší navigaci
- **Resource Hints**: Link preload s vysokou prioritou pro kritické assety

### 4. Resource Hints
- **DNS Prefetch**: Předčasné DNS lookup pro externí domény
- **Preconnect**: Předčasné připojení k Adobe Fonts
- **Font Preload**: Preload hlavního fontu pro rychlejší rendering textu

### 5. Motion Optimization
- **GPU Acceleration**: Použití `transform` a `opacity` pro hardware acceleration
- **Reduced Motion**: Respektování user preference pro redukované animace
- **Optimized Transitions**: Kratší, plynulejší transitions

## Doporučení pro další optimalizace

### Obrázky
Největší PNG soubory, které by měly být optimalizované:
- `kancl.png` (7.5MB) → doporučený cíl: 1-2MB
- `hf_20260120_082450_dda7455f-3e43-4db8-9f33-ebeefc2b3af3.png` (7.4MB) → doporučený cíl: 1-2MB
- `wow *.png` (6.3MB) → doporučený cíl: 1-1.5MB
- `ant-team.jpg` (4.4MB) → doporučený cíl: 800KB-1MB

### Nástroje pro optimalizaci
```bash
# ImageOptim (Mac)
# https://imageoptim.com/

# TinyPNG (Online)
# https://tinypng.com/

# Sharp (CLI)
npm install -g sharp-cli
sharp input.png -o output.webp --webp

# Squoosh (Web App)
# https://squoosh.app/
```

### Video komprese
Pokud máte velká videa, doporučujeme:
```bash
# FFmpeg komprese s H.265
ffmpeg -i input.mp4 -c:v libx265 -crf 28 -preset medium output.mp4
```

## Měření výkonu

### Lighthouse
```bash
npm run build
npm start
# Otevřete Chrome DevTools → Lighthouse → Run audit
```

### Bundle Analysis
Pro analýzu velikosti bundle:
```bash
npm install --save-dev @next/bundle-analyzer
# Přidejte do next.config.js
```

## Výsledky

Očekávané zlepšení:
- **First Contentful Paint (FCP)**: 0.5-1s
- **Largest Contentful Paint (LCP)**: 1-2s
- **Time to Interactive (TTI)**: 2-3s
- **Bundle Size**: Snížení o 20-30% díky tree-shaking

## Cache Strategy

- **Obrázky**: 1 rok cache (immutable assets)
- **JS/CSS**: Hash-based filenames pro cache busting
- **Preload links**: Dynamicky mazané při změně slidu

## Browser Support

Optimalizace fungují v:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

Fallback pro starší prohlížeče:
- WebP → PNG/JPG
- AVIF → WebP → PNG/JPG

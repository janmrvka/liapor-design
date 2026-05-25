/**
 * Klientská konfigurace prezentace
 *
 * Tento soubor obsahuje veškeré údaje specifické pro klienta.
 * Pro nového klienta stačí zkopírovat projekt a upravit tento soubor.
 */

export const CLIENT_CONFIG = {
  // === ZÁKLADNÍ INFORMACE O AGENTUŘE ===
  agency: {
    name: '(ant)',
    fullName: '(ant)',
    tagline: 'Digitální agentura',
    logo: {
      light: '/logo/ant-logo-black.svg',  // pro světlé pozadí
      dark: '/logo/ant-logo-green.svg',   // pro tmavé pozadí
    },
    website: 'https://www.antstudio.cz',
    email: 'info@antstudio.cz',
  },

  // === INFORMACE O KLIENTOVI ===
  client: {
    name: 'KAMA',
    fullName: 'KAMA - název společnosti',
    logo: '/client/logo.svg',             // logo klienta (volitelné)
    industry: '',                          // odvětví klienta
    website: '',
  },

  // === PREZENTACE ===
  presentation: {
    title: 'Nabídka spolupráce',
    subtitle: 'Digitální řešení pro váš byznys',
    date: new Date().toLocaleDateString('cs-CZ'),
  },

  // === KONTAKTNÍ OSOBY ===
  contacts: [
    {
      name: 'Jan Novák',
      role: 'Account Manager',
      email: 'jan.novak@antstudio.cz',
      phone: '+420 123 456 789',
      photo: '/client/contacts/jan.jpg',
    },
  ],

  // === NABÍZENÉ SLUŽBY ===
  services: [
    {
      id: 'web',
      name: 'Webové stránky',
      description: 'Moderní a rychlé weby na míru',
      icon: '🌐',
    },
    {
      id: 'eshop',
      name: 'E-commerce',
      description: 'Eshopy a online prodej',
      icon: '🛒',
    },
    {
      id: 'marketing',
      name: 'Online marketing',
      description: 'PPC, SEO, sociální sítě',
      icon: '📈',
    },
    {
      id: 'design',
      name: 'UX/UI Design',
      description: 'Uživatelsky přívětivé rozhraní',
      icon: '🎨',
    },
  ],

  // === REFERENCE (ukázkové projekty) ===
  references: [
    {
      name: 'Projekt 1',
      description: 'Popis projektu',
      image: '/client/references/project1.jpg',
      url: '',
    },
  ],

  // === CENOVÁ NABÍDKA ===
  pricing: {
    currency: 'CZK',
    items: [
      {
        name: 'Položka 1',
        description: 'Popis položky',
        price: 0,
      },
    ],
    total: 0,
    validUntil: '',
    notes: '',
  },

  // === VIZUÁLNÍ STYL (přepsání výchozích barev) ===
  theme: {
    // Hlavní barvy (ponechat prázdné = použije se výchozí (ant) styl)
    primaryColor: '',        // např. '#5bffc4' pro (ant) zelenou
    accentColor: '',
    // Pozadí slidů
    defaultBackground: 'bg-black',
    defaultTextColor: 'text-white',
  },
};

// Helper pro snadný přístup
export const getAgency = () => CLIENT_CONFIG.agency;
export const getClient = () => CLIENT_CONFIG.client;
export const getPresentation = () => CLIENT_CONFIG.presentation;
export const getContacts = () => CLIENT_CONFIG.contacts;
export const getServices = () => CLIENT_CONFIG.services;
export const getReferences = () => CLIENT_CONFIG.references;
export const getPricing = () => CLIENT_CONFIG.pricing;
export const getTheme = () => CLIENT_CONFIG.theme;

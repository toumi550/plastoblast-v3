const allProducts = [
  {
    id: 1,
    name: 'AJ120',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.jpg',
    image2: 'assets/images/products/boite-jonction-aj120(2)-camera-cctv-dahua-hikvision.jpg',
    altText: 'Boîte de jonction AJ120',
    description: 'Boîte pour caméras dôme / bullet, étanche.',
    features: [
      'Boîte pour caméras dôme / bullet, étanche',
      'Plage de diamètres : 25–90 mm',
      '150 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique  AJ 120MM.pdf',
    specs: {
      dimensions: '40 x 125 x 45 mm',
      poids: '101 g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 25–90 mm'
    }
  },
  {
    id: 2,
    name: 'AJ140',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj140-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/boite-jonction-aj140(2)-camera-cctv-dahua-hikvision.png',
    altText: 'Boîte de jonction AJ140',
    description: 'Boîte pour caméras dôme / bullet, étanche.',
    features: [
      'Boîte pour caméras dôme / bullet, étanche',
      'Plage de diamètres : 30–110 mm',
      '100 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique AJ 140MM.pdf',
    specs: {
      dimensions: '70 x 140 x 50 mm',
      poids: '133 g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 30–110 mm'
    }
  },
  {
    id: 3,
    name: 'SJ110',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-sj110-camera-cctv-dome-bullet-dahua-hikvision.png',
    image2: 'assets/images/products/boite-jonction-sj110(2)-camera-cctv-dome-bullet-dahua-hikvision.jpg',
    altText: 'Boîte de jonction SJ110',
    description: 'Boîte pour caméras dôme / bullet, étanche.',
    features: [
      'Boîte pour caméras dôme / bullet, étanche',
      'Plage de diamètres : 28–90 mm',
      '200 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique SJ 110MM.pdf',
    specs: {
      dimensions: '50 x 113 x 45 mm',
      poids: '56 g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 28–90 mm'
    }
  },
  {
    id: 4,
    name: 'BJ110 VANDAL',
    category: 'boites',
    image: 'assets/images/products/BJ110 VANDAL 1.png',
    image2: 'assets/images/products/BJ110 VANDAL 2.png',
    altText: 'Boîte de jonction BJ110 VANDAL - Boîte de jonction étanche pour caméras',
    description: 'Boîte de jonction étanche pour caméras dôme et bullet, protection anti-vandalisme.',
    features: [
      'Boîte pour caméras dôme / bullet, étanche',
      'Plage de fixation : 45–110 mm',
      '50 pièces / carton',
      'Protection anti-vandalisme',
      'Installation facile et sécurisée'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique BJ110.pdf',
    specs: {
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      fixation: '45–110 mm',
      usage: 'Intérieur / extérieur',
      protection: 'Anti-vandalisme'
    }
  },
  {
    id: 5,
    name: 'BJ110 VANDAL +',
    category: 'boites',
    image: 'assets/images/products/BJ110 VANDAL+.png',
    image2: 'assets/images/products/BJ110%20VANDAL%20%2B%202.png',
    altText: 'Boîte de jonction BJ110 VANDAL + - Boîte jonction étanche avec presse étoupe',
    description: 'Boîte de jonction étanche pour caméras avec presse étoupe PG9, protection renforcée.',
    features: [
      'Boîte pour caméras dôme / bullet, étanche',
      'Plage de fixation : 45–110 mm',
      'Avec presse étoupe PG9',
      '50 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique BJ110.pdf',
    specs: {
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      fixation: '45–110 mm',
      usage: 'Intérieur / extérieur'
    }
  },
  {
    id: 6,
    name: 'WS15D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws15d-15cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS15D',
    description: 'Support droit de 15 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '150 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 7,
    name: 'WS15E',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-externe-ws15e-15cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS15E',
    description: 'Support angle externe de 15 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '150 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 8,
    name: 'WS15L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws15l-15cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS15L',
    description: 'Support en L de 15 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '150 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 9,
    name: 'WS30D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws30d-30cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS30D',
    description: 'Support droit de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '36 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 10,
    name: 'WS30L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws30l-30cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS30L',
    description: 'Support en L de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '36 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 11,
    name: 'WS30F',
    category: 'supports',
    image: 'assets/images/products/support-mural-poteau-ws30f-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30F',
    description: 'Support fixation poteau de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '30 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 12,
    name: 'WS30E',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-externe-ws30e-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30E',
    description: 'Support angle externe de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 13,
    name: 'WS30T',
    category: 'supports',
    image: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30T',
    description: 'Support télescopique de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '30 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 14,
    name: 'WS30D+T',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-telescopique-ws30d-plus-t-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30D+T',
    description: 'Support droit + télescopique de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '30 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 15,
    name: 'WS30T90°',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-droit-ws30t90-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30T90°',
    description: 'Support angle droit de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 16,
    name: 'WS50D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws50d-50cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50D',
    description: 'Support droit de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '25 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 17,
    name: 'WS50L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws50l-50cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS50L',
    description: 'Support en L de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '25 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 18,
    name: 'WS50F',
    category: 'supports',
    image: 'assets/images/products/support-mural-poteau-ws50f-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50F',
    description: 'Support fixation poteau de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '25 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 19,
    name: 'WS50E',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-externe-ws50e-50cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50E',
    description: 'Support angle externe de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '20 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 20,
    name: 'WS50T',
    category: 'supports',
    image: 'assets/images/products/support-mural-telescopique-ws50t-50cm-installations-pro-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50T',
    description: 'Support télescopique de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '20 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 21,
    name: 'WS50T90°',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-droit-ws50t90deg-50cm-installations-pro-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50T90°',
    description: 'Support angle droit de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '20 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 22,
    name: 'WS50D+T',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-telescopique-ws50d-plus-t-50cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50D+T',
    description: 'Support droit + télescopique de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '20 pièces / carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 23,
    name: 'WS80D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws80d-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS80D',
    description: 'Support droit de 80 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '800 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 24,
    name: 'WS80L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws80l-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS80L',
    description: 'Support en L de 80 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '800 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 25,
    name: 'WS100D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws80d-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS100D',
    description: 'Support droit de 100 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '1000 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 26,
    name: 'WS100L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws80l-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS100L',
    description: 'Support en L de 100 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '1000 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 27,
    name: 'TUBES IRO 16 MM',
    category: 'iro',
    image: 'assets/images/products/tube-iro.jfif',
    altText: 'Tube IRO 16 mm',
    description: 'Tube IRO 16 mm en barre de 3 m.',
    features: [
      'Barre de 3 m',
      '10 barres par fardeau'
    ],
    ficheTechnique: 'assets/downloads/IRO fiche tchenique.pdf',
    specs: { diamètre: '16 mm', longueur: '3 m', conditionnement: '10 barres / fardeau' }
  },
  {
    id: 28,
    name: 'TUBES IRO 20 MM',
    category: 'iro',
    image: 'assets/images/products/tube-iro.jfif',
    altText: 'Tube IRO 20 mm',
    description: 'Tube IRO 20 mm en barre de 3 m.',
    features: [
      'Barre de 3 m',
      '10 barres par fardeau'
    ],
    ficheTechnique: 'assets/downloads/IRO fiche tchenique.pdf',
    specs: { diamètre: '20 mm', longueur: '3 m', conditionnement: '10 barres / fardeau' }
  },
  {
    id: 29,
    name: 'TUBES IRO 25 MM',
    category: 'iro',
    image: 'assets/images/products/tube-iro.jfif',
    altText: 'Tube IRO 25 mm',
    description: 'Tube IRO 25 mm en barre de 3 m.',
    features: [
      'Barre de 3 m',
      '10 barres par fardeau'
    ],
    ficheTechnique: 'assets/downloads/IRO fiche tchenique.pdf',
    specs: { diamètre: '25 mm', longueur: '3 m', conditionnement: '10 barres / fardeau' }
  },
  {
    id: 30,
    name: 'TÉ IRO',
    category: 'iro',
    image: 'assets/images/products/te-iro.jfif',
    altText: 'Té IRO',
    description: 'Té disponible en diamètre 16, 20 et 25 mm.',
    features: [
      'Té disponible en diamètre 16, 20, 25 mm'
    ],
    ficheTechnique: 'assets/downloads/IRO fiche tchenique.pdf',
    specs: { diamètre: '16 / 20 / 25 mm', usage: 'Raccordement en T' }
  },
  {
    id: 31,
    name: 'COUDE 45°',
    category: 'iro',
    image: 'assets/images/products/coude-equerre-90-deg-pour-tube-iro-de-16.jpg',
    altText: 'Coude 45° IRO',
    description: 'Coude 45° disponible en diamètre 16, 20 et 25 mm.',
    features: [
      'Coude 45° disponible en diamètre 16, 20, 25 mm'
    ],
    ficheTechnique: 'assets/downloads/IRO fiche tchenique.pdf',
    specs: { diamètre: '16 / 20 / 25 mm', usage: 'Déviation à 45°' }
  },
  {
    id: 32,
    name: 'COUDE À ANGLE DOUX',
    category: 'iro',
    image: 'assets/images/products/coude-angle-doux.webp',
    altText: 'Coude à angle doux IRO',
    description: 'Coude à angle doux disponible en diamètre 16, 20 et 25 mm.',
    features: [
      'Coude à angle doux disponible en 16, 20, 25 mm'
    ],
    ficheTechnique: 'assets/downloads/IRO fiche tchenique.pdf',
    specs: { diamètre: '16 / 20 / 25 mm', usage: 'Courbure douce' }
  },
  {
    id: 33,
    name: 'CONNECTEURS IRO',
    category: 'iro',
    image: 'assets/images/products/connecteurs.jpg',
    altText: 'Connecteurs IRO',
    description: 'Connecteurs disponibles en diamètre 16, 20 et 25 mm.',
    features: [
      'Connecteurs disponibles en diamètre 16, 20, 25 mm'
    ],
    ficheTechnique: 'assets/downloads/IRO fiche tchenique.pdf',
    specs: { diamètre: '16 / 20 / 25 mm', usage: 'Raccordement droit' }
  }
];

// Catégories disponibles
const categories = [
  {
    id: 'boites',
    name: 'Boîtes de Jonction',
    description: 'Gamme de boîtes de jonction étanches et robustes pour protéger les connexions CCTV en intérieur comme en extérieur.',
    image: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.jpg',
    count: allProducts.filter(p => p.category === 'boites').length,
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>`
  },
  {
    id: 'supports',
    name: 'Supports Muraux',
    description: 'Un accessoire indispensable pour l\'installation de caméras de surveillance. Conçu avec un plastique ABS de haute résistance, il allie robustesse, légèreté et durabilité pour un usage intérieur et extérieur.',
    image: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.png',
    count: allProducts.filter(p => p.category === 'supports').length,
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
    </svg>`
  },
  {
    id: 'iro',
    name: 'TUBES IRO',
    description: 'Tubes IRO et accessoires de raccordement pour le cheminement propre et durable des installations électriques.',
    image: 'assets/images/products/tube-iro.jfif',
    count: allProducts.filter(p => p.category === 'iro').length,
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 7h10a3 3 0 0 1 0 6H6a3 3 0 0 0 0 6h14"/>
      <circle cx="18" cy="7" r="2"/>
      <circle cx="6" cy="19" r="2"/>
    </svg>`
  }
];

// Variables globales
let currentCategory = null;
let filteredProducts = [];
let searchTerm = '';

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
  initProductsPage();
  initEventListeners();
});

function initProductsPage() {
  // Vérifier si on arrive avec des paramètres URL
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  if (categoryParam && categories.find(cat => cat.id === categoryParam)) {
    showCategoryProducts(categoryParam);
  } else {
    showCategories();
  }
}

function initEventListeners() {
  // Bouton retour aux catégories
  const backToCategoriesBtn = document.getElementById('backToCategoriesBtn');
  if (backToCategoriesBtn) {
    backToCategoriesBtn.addEventListener('click', showCategories);
  }
  
  // Recherche
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
  
  // Gestion de l'historique du navigateur
  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.category) {
      showCategoryProducts(e.state.category);
    } else {
      showCategories();
    }
  });
}

function showCategories() {
  const pageHeader = document.querySelector('.page-header');
  const categoriesSection = document.querySelector('.categories-section');
  const productsSection = document.getElementById('productsSection');
  const categoriesGrid = document.getElementById('categoriesGrid');
  
  // Afficher la section page-header et catégories, masquer la section produits
  pageHeader.style.display = 'block';
  categoriesSection.style.display = 'block';
  productsSection.style.display = 'none';
  productsSection.classList.remove('active');
  
  // Mettre à jour l'URL
  const newUrl = window.location.pathname;
  history.pushState(null, '', newUrl);
  
  // Générer les cartes de catégories
  categoriesGrid.innerHTML = '';
  categories.forEach(category => {
    const categoryCard = createCategoryCard(category);
    categoriesGrid.appendChild(categoryCard);
  });
  
  currentCategory = null;
}

function showCategoryProducts(categoryId) {
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) return;
  
  const pageHeader = document.querySelector('.page-header');
  const categoriesSection = document.querySelector('.categories-section');
  const productsSection = document.getElementById('productsSection');
  const productsTitle = document.getElementById('productsTitle');
  const productsSubtitle = document.getElementById('productsSubtitle');
  const productsGrid = document.getElementById('productsGrid');
  const searchInput = document.getElementById('searchInput');
  
  // Masquer seulement la section catégories, garder le header et afficher la section produits
  pageHeader.style.display = 'none';
  categoriesSection.style.display = 'none';
  productsSection.style.display = 'block';
  productsSection.classList.add('active');
  
  // Mettre à jour les titres
  productsTitle.textContent = category.name;
  productsSubtitle.textContent = category.description;
  
  // Réinitialiser la recherche
  searchInput.value = '';
  searchInput.placeholder = `Rechercher dans ${category.name}...`;
  searchTerm = '';
  
  // Mettre à jour l'URL
  const newUrl = `${window.location.pathname}?category=${categoryId}`;
  history.pushState({ category: categoryId }, '', newUrl);
  
  // Filtrer et afficher les produits
  currentCategory = categoryId;
  filterAndDisplayProducts();
}

function createCategoryCard(category) {
  const card = document.createElement('div');
  card.className = 'category-card scroll-reveal';
  card.addEventListener('click', () => showCategoryProducts(category.id));
  
  card.innerHTML = `
    <div class="category-image">
      <img 
        src="${category.image}" 
        alt="Image pour ${category.name}"
        onerror="this.src='assets/images/placeholder-product.jpg'"
      >
    </div>
    <div class="category-content">
      <div class="category-header">
        <div class="category-icon">${category.icon}</div>
        <h3 class="category-title">${category.name}</h3>
      </div>
      <p class="category-description">${category.description}</p>
      <p class="category-count">${category.count} produits disponibles</p>
    </div>
  `;
  
  return card;
}

function filterAndDisplayProducts() {
  if (!currentCategory) return;
  
  // Filtrer les produits par catégorie
  let categoryProducts = allProducts.filter(product => product.category === currentCategory);
  
  // Appliquer le filtre de recherche si nécessaire
  if (searchTerm) {
    categoryProducts = categoryProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }
  
  filteredProducts = categoryProducts;
  displayProducts(filteredProducts);
}

function displayProducts(products) {
  const productsGrid = document.getElementById('productsGrid');
  productsGrid.innerHTML = '';
  
  if (products.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-products">
        <p>Aucun produit trouvé pour cette recherche.</p>
      </div>
    `;
    return;
  }
  
  products.forEach((product, index) => {
    const productCard = createProductCard(product, index);
    productsGrid.appendChild(productCard);
  });
}

function createProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'product-card scroll-reveal';
  card.setAttribute('data-category', product.category);
  card.style.animationDelay = `${index * 0.1}s`;
  const carouselId = `carousel-${product.id}-${index}`;
  const hasCarousel = product.category === 'boites' && product.image2;
  const hasZoom = product.category !== 'supports';
  const imageContent = hasCarousel ? `
        <div class="product-carousel" id="${carouselId}">
          <div class="carousel-images">
            <img
              src="${product.image}"
              alt="${product.altText || product.name}"
              class="product-image active"
              loading="lazy"
              onerror="this.src='assets/images/placeholder-product.jpg'"
            >
            <img
              src="${product.image2}"
              alt="${product.altText || product.name}"
              class="product-image"
              loading="lazy"
              onerror="this.src='assets/images/placeholder-product.jpg'"
            >
          </div>
          <button type="button" class="carousel-btn carousel-prev" aria-label="Image précédente">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button type="button" class="carousel-btn carousel-next" aria-label="Image suivante">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div class="carousel-indicators">
            <button type="button" class="indicator active" aria-label="Voir la photo 1"></button>
            <button type="button" class="indicator" aria-label="Voir la photo 2"></button>
          </div>
          <span class="product-image-zoom-label">Agrandir</span>
        </div>
      ` : hasZoom ? `
        <button type="button" class="product-image-button" aria-label="Agrandir l'image de ${product.name}">
          <img
            src="${product.image}"
            alt="${product.altText || product.name}"
            class="product-image active"
            loading="lazy"
            onerror="this.src='assets/images/placeholder-product.jpg'"
          >
          <span class="product-image-zoom-label">Agrandir</span>
        </button>
      ` : `
        <div class="product-image-button product-static-image" aria-label="Image du produit ${product.name}">
          <img
            src="${product.image}"
            alt="${product.altText || product.name}"
            class="product-image active"
            loading="lazy"
            onerror="this.src='assets/images/placeholder-product.jpg'"
          >
        </div>
      `;
  
  card.innerHTML = `
    <div class="product-header-green">
      <h3 class="product-name-header">${product.name}</h3>
    </div>
    <div class="product-body-mockup">
      <div class="product-image-section">
        ${imageContent}
      </div>
    </div>
    <div class="product-description-bottom">
      ${product.features.join('<br>')}
    </div>
    <div class="product-actions-row">
      <a href="product-detail.html?category=${product.category}&id=${product.id}" class="product-secondary-btn">
        Voir le détail
      </a>
      ${product.ficheTechnique ? `
      <a href="${product.ficheTechnique}" class="product-fiche-btn" target="_blank" rel="noopener noreferrer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        Fiche technique
      </a>
      ` : ''}
    </div>
  `;

  const imageButton = card.querySelector('.product-image-button');
  if (imageButton && hasZoom && !hasCarousel) {
    imageButton.addEventListener('click', () => openProductImageModal(product.image, product.altText || product.name));
  }

  if (hasCarousel) {
    const carousel = card.querySelector(`#${carouselId}`);
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.indicator');
    const imageArea = carousel.querySelector('.carousel-images');

    prevButton.addEventListener('click', event => {
      event.stopPropagation();
      changeCarouselImage(carouselId, -1);
    });

    nextButton.addEventListener('click', event => {
      event.stopPropagation();
      changeCarouselImage(carouselId, 1);
    });

    indicators.forEach((indicator, indicatorIndex) => {
      indicator.addEventListener('click', event => {
        event.stopPropagation();
        goToCarouselImage(carouselId, indicatorIndex);
      });
    });

    imageArea.addEventListener('click', () => {
      const activeImage = carousel.querySelector('.product-image.active');
      if (activeImage) {
        openProductImageModal(activeImage.src, activeImage.alt);
      }
    });
  }
  
  return card;
}

let productImageModal = null;

function ensureProductImageModal() {
  if (productImageModal) {
    return productImageModal;
  }

  productImageModal = document.createElement('div');
  productImageModal.className = 'product-image-modal';
  productImageModal.innerHTML = `
    <div class="product-image-modal-backdrop"></div>
    <div class="product-image-modal-content">
      <button type="button" class="product-image-modal-close" aria-label="Fermer l'image">
        ×
      </button>
      <img class="product-image-modal-image" src="" alt="">
    </div>
  `;

  document.body.appendChild(productImageModal);

  const closeModal = () => {
    productImageModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  productImageModal.querySelector('.product-image-modal-backdrop').addEventListener('click', closeModal);
  productImageModal.querySelector('.product-image-modal-close').addEventListener('click', closeModal);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && productImageModal.classList.contains('active')) {
      closeModal();
    }
  });

  return productImageModal;
}

function openProductImageModal(src, alt) {
  const modal = ensureProductImageModal();
  const modalImage = modal.querySelector('.product-image-modal-image');
  modalImage.src = src;
  modalImage.alt = alt;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handleSearch(e) {
  searchTerm = e.target.value.trim();
  filterAndDisplayProducts();
}

function viewProductDetails(category, productId) {
  window.location.href = `product-detail.html?category=${category}&id=${productId}`;
}

// Initialiser le scroll reveal pour les nouveaux éléments
function initScrollRevealForNewElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);
  
  // Observer tous les nouveaux éléments avec la classe scroll-reveal
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
    observer.observe(el);
  });
}

// Réinitialiser le scroll reveal après chaque changement de contenu
const originalDisplayProducts = displayProducts;
displayProducts = function(products) {
  originalDisplayProducts(products);
  setTimeout(initScrollRevealForNewElements, 100);
};

const originalShowCategories = showCategories;
showCategories = function() {
  originalShowCategories();
  setTimeout(initScrollRevealForNewElements, 100);
};

// Fonctions de navigation du carrousel
function changeCarouselImage(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  
  const images = carousel.querySelectorAll('.product-image');
  const indicators = carousel.querySelectorAll('.indicator');
  let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  
  images[currentIndex].classList.remove('active');
  indicators[currentIndex].classList.remove('active');
  
  currentIndex = (currentIndex + direction + images.length) % images.length;
  
  images[currentIndex].classList.add('active');
  indicators[currentIndex].classList.add('active');
}

function goToCarouselImage(carouselId, index) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  const images = carousel.querySelectorAll('.product-image');
  const indicators = carousel.querySelectorAll('.indicator');

  images.forEach(img => img.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));

  if (!images[index] || !indicators[index]) return;

  images[index].classList.add('active');
  indicators[index].classList.add('active');
}

// Export pour utilisation globale
window.ProductsApp = {
  allProducts,
  categories,
  showCategories,
  showCategoryProducts,
  viewProductDetails
};

// Export des fonctions carousel pour utilisation globale
window.changeCarouselImage = changeCarouselImage;
window.goToCarouselImage = goToCarouselImage;

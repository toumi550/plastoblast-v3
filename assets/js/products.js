// Données complètes des produits
const allProducts = [
  {
    id: 1,
    name: 'AJ 120',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.jpg',
    image2: 'assets/images/products/boite-jonction-aj120(2)-camera-cctv-dahua-hikvision.jpg',
    altText: 'Boîte de jonction AJ 120',
    description: 'Boîte de jonction étanche pour caméras dome et bullet, conçue pour une installation propre en intérieur comme en extérieur.',
    features: [
      'Étanche intérieur/extérieur',
      '150 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique  AJ 120MM.pdf',
    specs: {
      dimensions: '40mm(H)x125mm(L)x45mm(P)',
      poids: '101g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 25mm à 90mm'
    }
  },
  {
    id: 2,
    name: 'AJ 140',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj140-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/boite-jonction-aj140(2)-camera-cctv-dahua-hikvision.png',
    altText: 'Boîte de jonction AJ 140',
    description: 'Boîte de jonction grand format, étanche et robuste, adaptée aux installations CCTV nécessitant plus de volume interne.',
    features: [
      'Grand volume interne',
      '100 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique AJ 140MM.pdf',
    specs: {
      dimensions: '70mm(H)x140mm(L)x50mm(P)',
      poids: '133g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 30mm à 110mm'
    }
  },
  {
    id: 3,
    name: 'SJ 110',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-sj110-camera-cctv-dome-bullet-dahua-hikvision.png',
    image2: 'assets/images/products/boite-jonction-sj110(2)-camera-cctv-dome-bullet-dahua-hikvision.jpg',
    altText: 'Boîte de jonction SJ 110',
    description: 'Boîte de jonction compacte et étanche, idéale pour les caméras dôme et bullet sur façades et plafonds.',
    features: [
      'Format compact',
      '200 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique SJ 110MM.pdf',
    specs: {
      dimensions: '50mm(H)x113mm(L)x45mm(P)',
      poids: '56g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 28mm à 90mm'
    }
  },
  {
    id: 4,
    name: 'BJ 110 VANDAL',
    category: 'boites',
    image: 'assets/images/products/BJ110 VANDAL.png',
    image2: 'assets/images/products/BJ110 VANDAL+.png',
    altText: 'Boîte de jonction BJ 110 Vandal',
    description: 'Boîte de jonction renforcée anti-vandale pour zones sensibles et environnements exposés.',
    features: [
      'Conception anti-vandale',
      'Usage extérieur/intérieur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique BJ110.pdf',
    specs: {
      matériau: 'Plastique (PP), anti-UV, anti-choc, anti-vandale',
      compatibilité: 'Caméras dome anti-vandale'
    }
  },
  {
    id: 5,
    name: 'Support mural WS15D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws15d-15cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-droit-ws15d-15cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS15D',
    description: 'Support droit de 15 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '150 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 6,
    name: 'Support mural WS15E',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-externe-ws15e-15cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-angle-externe-ws15e-15cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS15E',
    description: 'Support angle externe de 15 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '150 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 7,
    name: 'Support mural WS15L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws15l-15cm-camera-cctv-dahua-hikvision.jpg',
    image2: 'assets/images/products/support-mural-l-ws15l-15cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS15L',
    description: 'Support en L de 15 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '150 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 8,
    name: 'Support mural WS30D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws30d-30cm-camera-cctv-dahua-hikvision.jpg',
    image2: 'assets/images/products/support-mural-droit-ws30d-30cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS30D',
    description: 'Support droit de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '36 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 9,
    name: 'Support mural WS30L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws30l-30cm-camera-cctv-dahua-hikvision.jpg',
    image2: 'assets/images/products/support-mural-l-ws30l-30cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS30L',
    description: 'Support en L de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '36 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 10,
    name: 'Support mural WS30F',
    category: 'supports',
    image: 'assets/images/products/support-mural-poteau-ws30f-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-poteau-ws30f-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30F',
    description: 'Support fixation poteau de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '30 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 11,
    name: 'Support mural WS30E',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-externe-ws30e-30cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-angle-externe-ws30e-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30E',
    description: 'Support angle externe de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 12,
    name: 'Support mural WS30T',
    category: 'supports',
    image: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30T',
    description: 'Support télescopique de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '30 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 13,
    name: 'Support mural WS30D+T',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-telescopique-ws30d-plus-t-30cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-droit-telescopique-ws30d-plus-t-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30D+T',
    description: 'Support droit + télescopique de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '30 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 14,
    name: 'Support mural WS30T90°',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-droit-ws30t90-30cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-angle-droit-ws30t90-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30T90°',
    description: 'Support angle droit de 30 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '50 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 15,
    name: 'Support mural WS50D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws50d-50cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-droit-ws50d-50cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50D',
    description: 'Support droit de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '25 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 16,
    name: 'Support mural WS50L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws50l-50cm-camera-cctv-dahua-hikvision.jpg',
    image2: 'assets/images/products/support-mural-l-ws50l-50cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS50L',
    description: 'Support en L de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '25 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 17,
    name: 'Support mural WS50F',
    category: 'supports',
    image: 'assets/images/products/support-mural-poteau-ws50f-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-poteau-ws50f-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50F',
    description: 'Support fixation poteau de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '25 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 18,
    name: 'Support mural WS50E',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-externe-ws50e-50cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-angle-externe-ws50e-50cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50E',
    description: 'Support angle externe de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 19,
    name: 'Support mural WS50T',
    category: 'supports',
    image: 'assets/images/products/support-mural-telescopique-ws50t-50cm-installations-pro-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-telescopique-ws50t-50cm-installations-pro-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50T',
    description: 'Support télescopique de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 20,
    name: 'Support mural WS50T90°',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-droit-ws50t90deg-50cm-installations-pro-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-angle-droit-ws50t90deg-50cm-installations-pro-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50T90°',
    description: 'Support angle droit de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 21,
    name: 'Support mural WS50D+T',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-telescopique-ws50d-plus-t-50cm-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-droit-telescopique-ws50d-plus-t-50cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50D+T',
    description: 'Support droit + télescopique de 50 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur',
      '20 Pièces/carton'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '500 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 22,
    name: 'Support mural WS80D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws80d-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-droit-ws80d-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS80D',
    description: 'Support droit de 80 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '800 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 23,
    name: 'Support mural WS80L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws80l-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-l-ws80l-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS80L',
    description: 'Support en L de 80 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '800 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 24,
    name: 'Support mural WS100D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws80d-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-droit-ws80d-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS100D',
    description: 'Support droit de 100 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '1000 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
  },
  {
    id: 25,
    name: 'Support mural WS100L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws80l-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    image2: 'assets/images/products/support-mural-l-ws80l-80cm-extra-long-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS100L',
    description: 'Support en L de 100 cm pour installation CCTV.',
    features: [
      'Tube 2 mm d\'épaisseur'
    ],
    ficheTechnique: 'assets/downloads/Fiche Technique wall support.pdf',
    specs: { longueur: '1000 mm', matériau: 'Plastique ABS renforcé', couleur: 'Blanc' }
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
        onerror="this.src='/assets/images/placeholder-product.jpg'"
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
  
  // Générer un ID unique pour cette description
  const descriptionId = `desc-${product.id}-${index}`;
  
  card.innerHTML = `
    <div class="product-header-green">
      <h3 class="product-name-header">${product.name}</h3>
    </div>
    <div class="product-body-mockup">
      <div class="product-image-section">
        <div class="product-carousel" id="carousel-${product.id}-${index}">
          <div class="carousel-images">
            <img
              src="${product.image}"
              alt="${product.altText || product.name} - Image 1"
              class="product-image active"
              loading="lazy"
              onerror="this.src='/assets/images/placeholder-product.jpg'"
            >
            <img
              src="${product.image2 || product.image}"
              alt="${product.altText || product.name} - Image 2"
              class="product-image"
              loading="lazy"
              onerror="this.src='/assets/images/placeholder-product.jpg'"
            >
          </div>
          <button class="carousel-btn carousel-prev" onclick="changeCarouselImage('carousel-${product.id}-${index}', -1)" aria-label="Image précédente">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="carousel-btn carousel-next" onclick="changeCarouselImage('carousel-${product.id}-${index}', 1)" aria-label="Image suivante">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div class="carousel-indicators">
            <span class="indicator active" onclick="goToCarouselImage('carousel-${product.id}-${index}', 0)"></span>
            <span class="indicator" onclick="goToCarouselImage('carousel-${product.id}-${index}', 1)"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="product-description-bottom">
      ${product.features.slice(-2).join('<br>')}
    </div>
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
  `;
  
  return card;
}

function handleSearch(e) {
  searchTerm = e.target.value.trim();
  filterAndDisplayProducts();
}

function viewProductDetails(category, productId) {
  // Rediriger vers la page de détail du produit
  window.location.href = `product-detail.html?category=${category}&id=${productId}`;
}

// Fonction pour basculer l'affichage de la description
function toggleDescription(descriptionId) {
  const description = document.getElementById(descriptionId);
  const toggle = description.nextElementSibling;
  
  if (description.classList.contains('truncated')) {
    description.classList.remove('truncated');
    description.classList.add('expanded');
    toggle.textContent = 'Voir moins';
  } else {
    description.classList.remove('expanded');
    description.classList.add('truncated');
    toggle.textContent = 'Voir plus';
  }
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
  indicators.forEach(ind => ind.classList.remove('active'));
  
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

// Données complètes des produits
const allProducts = [
  // Boîtes de jonction
  {
    id: 1,
    name: 'CBOX-AJ120',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.webp',
    image2: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.webp',
    altText: 'Boîte de jonction CBOX-AJ120, résistante et étanche pour caméras dôme ou bullet.',
    description: 'La CBOX-AJ120 PlastoBlast, est une boîte de jonction hautement résistante et étanche, avec un design ergonomique conçue pour accueillir des caméras dôme ou bullet. Sa conception étanche et son esthétique en font une boîte de jonction très compacte, parfaite pour les installations discrètes en intérieur comme en extérieur. Protection étanche garantie contre les intempéries et l\'humidité.',
    features: [
      'Compatibilité quasi universelle',
      'Haute résistance',
      '150 Pièces/carton',
      'Plastique PP anti-UV',
      'Installation facilitée'
    ],
    specs: {
      dimensions: '40mm(H)x125mm(L)x45mm(P)',
      poids: '101g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Rayon de fixation 25mm à 90mm'
    }
  },
  {
    id: 2,
    name: 'AJ-140',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj140-camera-cctv-dahua-hikvision.webp',
    image2: 'assets/images/products/boite-jonction-aj140-camera-cctv-dahua-hikvision.webp',
    altText: 'Boîte de jonction grand format AJ-140.',
    description: 'La CBOX-AJ140 PlastoBlast, est une boîte de jonction hautement résistante et étanche, conçue pour accueillir des caméras dôme ou IP/PoE. Sa conception robuste et étanche avec son esthétique sobre en font un choix idéal pour les installations discrètes, en intérieur comme en extérieur. Protection étanche certifiée contre les conditions météorologiques extrêmes.',
    features: [
      'Compatibilité universelle',
      'Haute résistance',
      '100 Pièces/carton',
      'Plastique PP anti-UV',
      'Installation facilitée'
    ],
    specs: {
      dimensions: '70mm(H)x140mm(L)x50mm(P)',
      poids: '133g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 30mm à 110mm'
    }
  },
  {
    id: 3,
    name: 'SJ-110',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-sj110-camera-cctv-dome-bullet-dahua-hikvision.webp',
    image2: 'assets/images/products/boite-jonction-sj110-camera-cctv-dome-bullet-dahua-hikvision.webp',
    altText: 'Boîte de jonction compacte SJ-110.',
    description: 'La CBOX-SJ110 PlastoBlast, est une boîte de jonction hautement résistante et étanche, conçue pour accueillir des caméras dôme ou Bullet. Sa conception robuste et étanche avec son esthétique sobre en font un choix idéal pour les installations discrètes, en intérieur comme en extérieur. Étanchéité optimale pour une protection durable contre l\'humidité et les intempéries.',
    features: [
      'Compatibilité universelle',
      'Haute résistance',
      '200 Pièces/carton',
      'Plastique PP anti-UV',
      'Installation facilitée'
    ],
    specs: {
      dimensions: '50mm(H)x113mm(L)x45mm(Pr)',
      poids: '56g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 28mm à 90mm'
    }
  },
  // Supports muraux
  {
    id: 4,
    name: 'WS15-D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws15d-15cm-camera-cctv-dahua-hikvision.webp',
    image2: 'assets/images/products/support-mural-droit-ws15d-15cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural droit WS15-D',
    description: 'Support mural WS15-D - Support droit de 15cm pour caméras de surveillance. Conception étanche avec protection intégrée contre les infiltrations d\'eau et l\'humidité, garantissant une installation durable en extérieur.',
    features: [
      'Longueur 15cm',
      'Installation murale',
      '50 Pièces/carton',
      'Alliage résistant',
      'Finition anti-corrosion',
      'Tube 2 mm d\'épaisseur'
    ],
    specs: {
      longueur: '150 mm',
      matériau: 'Plastique ABS renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 5,
    name: 'WS30-L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws30l-30cm-camera-cctv-dahua-hikvision.webp',
    image2: 'assets/images/products/support-mural-l-ws30l-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural WS30-L',
    description: 'Support mural WS30-L - Support en L de 30cm pour installation flexible. Design étanche avec joints d\'étanchéité renforcés pour une protection maximale contre l\'humidité et les conditions météorologiques difficiles.',
    features: [
      'Forme en L',
      'Longueur 30cm',
      '36 Pièces/carton',
      'Grande stabilité',
      'Installation polyvalente',
      'Tube 2 mm d\'épaisseur'
    ],
    specs: {
      longueur: '300 mm',
      matériau: 'Plastique ABS renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 6,
    name: 'WS30-T',
    category: 'supports',
    image: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.webp',
    image2: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural WS30-T',
    description: 'Support mural WS30-T - Support télescopique de 30cm pour réglage précis. Mécanisme télescopique étanche avec protection contre les infiltrations d\'eau dans les articulations, assurant un fonctionnement optimal même en conditions humides.',
    features: [
      'Longueur réglable',
      'Fixation solide',
      '36 Pièces/carton',
      'Ajustement précis',
      'Installation facile',
      'Tube 2 mm d\'épaisseur'
    ],
    specs: {
      longueur: '300 mm',
      matériau: 'Plastique ABS renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 7,
    name: 'WS30-T90°',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-droit-ws30t90-30cm-camera-cctv-dahua-hikvision.webp',
    image2: 'assets/images/products/support-mural-angle-droit-ws30t90-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural WS30-T90°',
    description: 'Support mural WS30-T90° - Support à angle droit de 30cm pour installation en coin. Construction étanche avec joints d\'étanchéité spéciaux aux angles pour une protection complète contre l\'humidité et les infiltrations d\'eau.',
    features: [
      'Angle 90°',
      'Montage en coin',
      '30 Pièces/carton',
      'Stabilité optimale',
      'Design compact',
      'Tube 2 mm d\'épaisseur'
    ],
    specs: {
      longueur: '300 mm',
      matériau: 'Plastique ABS renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 8,
    name: 'WS50-D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws50d-50cm-camera-cctv-dahua-hikvision.webp',
    image2: 'assets/images/products/support-mural-droit-ws50d-50cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural WS50-D',
    description: 'Support mural WS50-D - Support droit de 50cm pour installations longues portées. Conception étanche avec protection renforcée sur toute la longueur, garantissant une résistance optimale aux intempéries et à l\'humidité même sur de longues distances.',
    features: [
      'Longueur 50cm',
      'Renforts internes',
      '25 Pièces/carton',
      'Résistance accrue',
      'Installation murale',
      'Tube 2 mm d\'épaisseur'
    ],
    specs: {
      longueur: '500 mm',
      matériau: 'Plastique ABS renforcé',
      couleur: 'Blanc'
    }
  }
];

// Catégories disponibles
const categories = [
  {
    id: 'boites',
    name: 'Boîtes de Jonction',
    description: 'Découvrez notre gamme de boîtes de jonction étanches pour vos installations extérieures.',
    image: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.webp',
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
    image: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.webp',
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
  card.style.animationDelay = `${index * 0.1}s`;
  
  // Générer un ID unique pour cette description
  const descriptionId = `desc-${product.id}-${index}`;
  
  card.innerHTML = `
    <div class="product-image-container">
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
      <div class="product-overlay">
        <button class="btn-icon" onclick="viewProductDetails('${product.category}', ${product.id})" aria-label="Voir les détails de ${product.name}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="product-content">
      <h3 class="product-title">${product.name}</h3>
      <div class="product-description truncated" id="${descriptionId}">
        ${product.description}
      </div>
      <span class="description-toggle" onclick="toggleDescription('${descriptionId}')">
        Voir plus
      </span>
      <div class="product-features">
        ${product.features.slice(0, 3).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
      </div>
      <div class="product-specs">
        <div class="spec-item">
          <span class="spec-label">Dimensions:</span>
          <span class="spec-value">${product.specs.dimensions || product.specs.longueur}</span>
        </div>
      </div>
      <div class="product-actions">
        <button 
          class="btn-secondary"
          onclick="viewProductDetails('${product.category}', ${product.id})"
          aria-label="Voir les détails de ${product.name}"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          Détails
        </button>
        <a 
          href="assets/downloads/fiches-techniques/${product.category}/${product.name}.pdf"
          class="btn-download"
          download
          aria-label="Télécharger la fiche technique de ${product.name}"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Fiche technique
        </a>
      </div>
    </div>
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
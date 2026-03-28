// Données des produits
const products = [
  {
    id: 1,
    name: 'AJ120',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.jpg',
    altText: 'Boîte de jonction AJ120',
    description: 'Boîte pour caméras dôme / bullet, étanche.',
    features: ['Plage de diamètres : 25–90 mm', '150 pièces / carton'],
    specs: { dimensions: '40×125×45 mm', poids: '101 g', matériau: 'Plastique PP anti-UV' }
  },
  {
    id: 2,
    name: 'AJ140',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj140-camera-cctv-dahua-hikvision.png',
    altText: 'Boîte de jonction AJ140',
    description: 'Boîte pour caméras dôme / bullet, étanche.',
    features: ['Plage de diamètres : 30–110 mm', '100 pièces / carton'],
    specs: { dimensions: '70×140×50 mm', poids: '133 g' }
  },
  {
    id: 3,
    name: 'SJ110',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-sj110-camera-cctv-dome-bullet-dahua-hikvision.png',
    altText: 'Boîte de jonction SJ110',
    description: 'Boîte pour caméras dôme / bullet, étanche.',
    features: ['Plage de diamètres : 28–90 mm', '200 pièces / carton'],
    specs: { dimensions: '50×113×45 mm', poids: '56 g' }
  },
  {
    id: 4,
    name: 'BJ110 VANDAL',
    category: 'boites',
    image: 'assets/images/products/BJ110 VANDAL.png',
    altText: 'Boîte de jonction BJ110 VANDAL',
    description: 'Boîte pour caméras dôme / bullet, étanche.',
    features: ['Plage de fixation : 45–110 mm', '50 pièces / carton'],
    specs: { matériau: 'Plastique PP anti-UV', fixation: '45–110 mm' }
  },
  {
    id: 5,
    name: 'BJ110 VANDAL +',
    category: 'boites',
    image: 'assets/images/products/BJ110 VANDAL +.png',
    altText: 'Boîte de jonction BJ110 VANDAL +',
    description: 'Boîte pour caméras dôme / bullet, étanche avec presse étoupe PG9.',
    features: ['Plage de fixation : 45–110 mm', '40 pièces / carton'],
    specs: { matériau: 'Plastique PP anti-UV', fixation: '45–110 mm' }
  },
  {
    id: 13,
    name: 'WS30T',
    category: 'supports',
    image: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30T',
    description: 'Support télescopique de 30 cm pour installation CCTV.',
    features: ['Tube 2 mm d\'épaisseur', '30 pièces / carton'],
    specs: { longueur: '300 mm', matériau: 'Plastique ABS renforcé' }
  },
  {
    id: 28,
    name: 'TUBES IRO 20 MM',
    category: 'iro',
    image: 'assets/images/products/tube iro.jfif',
    altText: 'Tube IRO 20 mm',
    description: 'Tube IRO 20 mm en barre de 3 m.',
    features: ['Barre de 3 m', '10 barres par fardeau'],
    specs: { diamètre: '20 mm', longueur: '3 m' }
  }
];

// Variables globales
let isInitialized = false;

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
  if (isInitialized) return;
  
  initMobileMenu();
  initFeaturedProducts();
  initScrollReveal();
  initSmoothScrolling();
  initHeroCarousel();
  
  isInitialized = true;
});

// Menu mobile
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!mobileMenuBtn || !mobileMenu) return;
  
  const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
  const closeIcon = mobileMenuBtn.querySelector('.close-icon');
  
  if (!menuIcon || !closeIcon) return;
  
  mobileMenuBtn.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
      mobileMenu.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    } else {
      mobileMenu.classList.add('active');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }
  });
  
  const mobileMenuItems = mobileMenu.querySelectorAll('.mobile-menu-item');
  mobileMenuItems.forEach(item => {
    item.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
  
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
}

// Produits vedettes
function initFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container || container.hasAttribute('data-initialized')) return;
  
  const featuredProducts = products.slice(0, 6);
  
  container.innerHTML = '';
  featuredProducts.forEach((product, index) => {
    const card = createProductCard(product, index);
    container.appendChild(card);
  });
  
  container.setAttribute('data-initialized', 'true');
}

function createProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'product-card scroll-reveal';
  card.style.animationDelay = `${index * 0.1}s`;
  
  card.innerHTML = `
    <div class="relative overflow-hidden">
      <img
        src="${product.image}"
        alt="${product.altText || product.name}"
        class="product-image"
        loading="lazy"
        onerror="this.src='assets/images/placeholder-product.svg'"
      >
    </div>
    <div class="product-content">
      <h3 class="product-title">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <a
        href="product-detail.html?category=${product.category}&id=${product.id}"
        class="inline-flex items-center gap-2 text-primary-green hover:text-primary-green-dark font-medium transition-colors"
        style="color: var(--primary-green); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 500; transition: color 0.3s ease;"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        Voir les détails
      </a>
    </div>
  `;
  
  return card;
}

// Scroll reveal
function initScrollReveal() {
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
  
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
}

// Smooth scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Carrousel désactivé
function initHeroCarousel() {
  console.log('PlastoBlast: Carrousel désactivé - image statique utilisée');
}

function stopCarousel() {}
function startCarousel() {}

// Utilitaires
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimisation scroll
const optimizedScrollHandler = debounce(() => {}, 10);
window.addEventListener('scroll', optimizedScrollHandler);

// Optimisation resize
const optimizedResize = debounce(() => {
  console.log('PlastoBlast: Redimensionnement optimisé');
}, 250);
window.addEventListener('resize', optimizedResize);

// Préchargement images
function preloadImages() {
  const importantImages = ['assets/images/logo-plastoblast.webp'];
  importantImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}
window.addEventListener('load', preloadImages);

// Gestion erreurs images
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG' && !e.target.src.includes('placeholder-product.svg') && !e.target.hasAttribute('data-fallback-applied')) {
    e.target.src = 'assets/images/placeholder-product.svg';
    e.target.setAttribute('data-fallback-applied', 'true');
  }
}, true);

// Nettoyage
window.addEventListener('beforeunload', function() {
  console.log('PlastoBlast: Nettoyage des ressources');
  stopCarousel();
  isInitialized = false;
});

window.addEventListener('pagehide', function() {
  console.log('PlastoBlast: Nettoyage lors de la navigation');
  stopCarousel();
  isInitialized = false;
});

// Visibilité page
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('PlastoBlast: Page cachée');
  } else {
    console.log('PlastoBlast: Page visible');
  }
});

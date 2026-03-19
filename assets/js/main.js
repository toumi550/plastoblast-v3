// Données des produits
const products = [
  {
    id: 1,
    name: 'CBOX-AJ120',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.jpg',
    altText: 'Boîte de jonction CBOX-AJ120',
    description: 'Boîte de jonction hautement résistante et étanche pour caméras dôme ou bullet.',
    features: ['Compatibilité quasi universelle', 'Haute résistance', 'Étanche', 'Plastique PP anti-UV'],
    specs: { dimensions: '40×125×45mm', poids: '101g', matériau: 'Plastique PP anti-UV' }
  },
  {
    id: 2,
    name: 'AJ-140',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj140-camera-cctv-dahua-hikvision.png',
    altText: 'Boîte de jonction AJ-140',
    description: 'Boîte de jonction grand format pour caméras dôme ou IP/PoE.',
    features: ['Compatibilité universelle', 'Haute résistance', 'Étanche'],
    specs: { dimensions: '70×140×50mm', poids: '133g' }
  },
  {
    id: 3,
    name: 'SJ-110',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-sj110-camera-cctv-dome-bullet-dahua-hikvision.png',
    altText: 'Boîte de jonction SJ-110',
    description: 'Boîte de jonction compacte pour caméras dôme ou Bullet.',
    features: ['Compatibilité universelle', 'Haute résistance', 'Étanche'],
    specs: { dimensions: '50×113×45mm', poids: '56g' }
  },
  {
    id: 4,
    name: 'WS15-D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws15d-15cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS15-D',
    description: 'Support mural droit de 15cm pour caméras de surveillance.',
    features: ['Longueur 15cm', 'Alliage résistant', 'Étanche'],
    specs: { longueur: '150mm', matériau: 'Plastique ABS renforcé' }
  },
  {
    id: 5,
    name: 'WS30-L',
    category: 'supports',
    image: 'assets/images/products/support-mural-l-ws30l-30cm-camera-cctv-dahua-hikvision.jpg',
    altText: 'Support mural WS30-L',
    description: 'Support mural en L de 30cm pour installation flexible.',
    features: ['Forme en L', 'Longueur 30cm', 'Grande stabilité'],
    specs: { longueur: '300mm', matériau: 'Plastique ABS renforcé' }
  },
  {
    id: 6,
    name: 'WS30-T',
    category: 'supports',
    image: 'assets/images/products/support-mural-telescopique-ws30t-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30-T',
    description: 'Support mural télescopique de 30cm pour réglage précis.',
    features: ['Longueur réglable', 'Fixation solide', 'Ajustement précis'],
    specs: { longueur: '300mm', matériau: 'Plastique ABS renforcé' }
  },
  {
    id: 7,
    name: 'WS30-T90°',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-droit-ws30t90-30cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS30-T90°',
    description: 'Support mural à angle droit de 30cm pour installation en coin.',
    features: ['Angle 90°', 'Montage en coin', 'Stabilité optimale'],
    specs: { longueur: '300mm', matériau: 'Plastique ABS renforcé' }
  },
  {
    id: 8,
    name: 'WS50-D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws50d-50cm-camera-cctv-dahua-hikvision.png',
    altText: 'Support mural WS50-D',
    description: 'Support mural droit de 50cm pour installations longues portées.',
    features: ['Longueur 50cm', 'Renforts internes', 'Résistance accrue'],
    specs: { longueur: '500mm', matériau: 'Plastique ABS renforcé' }
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

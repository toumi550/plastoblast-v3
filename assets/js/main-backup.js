// Données des produits (reprises du site React)
const products = [
  // Boîtes de jonction
  {
    id: 1,
    name: 'CBOX-AJ120',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-aj120-camera-cctv-dahua-hikvision.webp',
    altText: 'Boîte de jonction CBOX-AJ120, résistante et étanche pour caméras dôme ou bullet.',
    description: 'La CBOX-AJ120 PlastoBlast, est une boîte de jonction hautement résistante et étanche, avec un design ergonomique conçue pour accueillir des caméras dôme ou bullet.',
    features: [
      'Compatibilité quasi universelle',
      'Haute résistance',
      'Étanche',
      'Plastique PP anti-UV',
      'Installation facilitée',
      '150 Pièces/carton'
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
    altText: 'Boîte de jonction grand format AJ-140.',
    description: 'La CBOX-AJ140 PlastoBlast, est une boîte de jonction hautement résistante et étanche, conçue pour accueillir des caméras dôme ou IP/PoE.',
    features: [
      'Compatibilité universelle',
      'Haute résistance',
      'Étanche',
      'Plastique PP anti-UV',
      'Installation facilitée',
      '100 Pièces/carton'
    ],
    specs: {
      dimensions: '70mm(H)x140mm(L)x50mm(P)',
      poids: '133g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 30mm à 110mm'
    }
  },
  {
    id: 4,
    name: 'WS15-D',
    category: 'supports',
    image: 'assets/images/products/support-mural-droit-ws15d-15cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural droit WS15-D de 15cm en alliage pour caméras de surveillance CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural droit WS15-D de 15cm pour caméras de surveillance. Idéal pour Dahua et Hikvision. Conception étanche avec protection intégrée contre les infiltrations d\'eau et l\'humidité, garantissant une installation durable en extérieur.',
    features: [
      'Longueur 15cm',
      'Installation murale',
      'Alliage résistant',
      'Étanche',
      'Finition anti-corrosion',
      'Tube 2 mm d\'épaisseur',
      '50 Pièces/carton'
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
    altText: 'Support mural en L WS30-L de 30cm pour installation flexible de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural en L WS30-L de 30cm pour installation flexible. Convient aux caméras Dahua et Hikvision.',
    features: [
      'Forme en L',
      'Longueur 30cm',
      'Grande stabilité',
      'Étanche',
      'Installation polyvalente',
      'Tube 2 mm d\'épaisseur',
      '36 Pièces/carton'
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
    altText: 'Support mural télescopique WS30-T de 30cm pour réglage précis de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural télescopique WS30-T de 30cm pour réglage précis. Adapté pour Dahua et Hikvision.',
    features: [
      'Longueur réglable',
      'Fixation solide',
      'Ajustement précis',
      'Étanche',
      'Installation facile',
      'Tube 2 mm d\'épaisseur',
      '36 Pièces/carton'
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
    altText: 'Support mural droit WS50-D de 50cm en alliage renforcé pour installations longues portées de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural droit WS50-D de 50cm pour installations longues portées. Parfait pour Dahua et Hikvision.',
    features: [
      'Longueur 50cm',
      'Renforts internes',
      'Résistance accrue',
      'Étanche',
      'Installation murale',
      'Tube 2 mm d\'épaisseur',
      '25 Pièces/carton'
    ],
    specs: {
      longueur: '500 mm',
      matériau: 'Plastique ABS renforcé',
      couleur: 'Blanc'
    }
  },
  {
    id: 3,
    name: 'SJ-110',
    category: 'boites',
    image: 'assets/images/products/boite-jonction-sj110-camera-cctv-dome-bullet-dahua-hikvision.webp',
    altText: 'Boîte de jonction compacte SJ-110.',
    description: 'La CBOX-SJ110 PlastoBlast, est une boîte de jonction hautement résistante et étanche, conçue pour accueillir des caméras dôme ou Bullet.',
    features: [
      'Compatibilité universelle',
      'Haute résistance',
      'Étanche',
      'Plastique PP anti-UV',
      'Installation facilitée',
      '200 Pièces/carton'
    ],
    specs: {
      dimensions: '50mm(H)x113mm(L)x45mm(Pr)',
      poids: '56g',
      matériau: 'Plastique (PP), anti-UV, anti-choc',
      compatibilité: 'Plage de diamètres 28mm à 90mm'
    }
  },
  {
    id: 7,
    name: 'WS30-T90°',
    category: 'supports',
    image: 'assets/images/products/support-mural-angle-droit-ws30t90-30cm-camera-cctv-dahua-hikvision.webp',
    altText: 'Support mural à angle droit WS30-T90° de 30cm pour installation en coin de caméras CCTV, compatible Dahua et Hikvision.',
    description: 'Support mural à angle droit WS30-T90° de 30cm pour installation en coin. Idéal pour caméras Dahua et Hikvision.',
    features: [
      'Angle 90°',
      'Montage en coin',
      'Stabilité optimale',
      'Étanche',
      'Design compact',
      'Tube 2 mm d\'épaisseur',
      '30 Pièces/carton'
    ],
    specs: {
      longueur: '300 mm',
      matériau: 'Plastique ABS renforcé',
      couleur: 'Blanc'
    }
  }
];

// Variables globales pour l'application
let isInitialized = false;
let performanceOptimized = true;

// Throttle function pour optimiser les performances
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // Éviter les multiples initialisations
  if (isInitialized) {
    // console.warn('PlastoBlast: Tentative de double initialisation évitée');
    return;
  }
  
  // console.log('PlastoBlast: Initialisation en cours...');
  
  try {
    initMobileMenu();
    initFeaturedProducts();
    initScrollReveal();
    initSmoothScrolling();
    initHeroCarousel();
    // console.log('PlastoBlast: Initialisation terminée avec succès');
  } catch (error) {
    // console.error('PlastoBlast: Erreur lors de l\'initialisation:', error);
  }
});

// === MENU MOBILE ===
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!mobileMenuBtn || !mobileMenu) {
    // console.log('Menu mobile non trouvé, ignoré');
    return;
  }
  
  const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
  const closeIcon = mobileMenuBtn.querySelector('.close-icon');
  
  if (!menuIcon || !closeIcon) {
    // console.log('Icônes de menu non trouvées, ignoré');
    return;
  }
  
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
  
  // Fermer le menu quand on clique sur un lien
  const mobileMenuItems = mobileMenu.querySelectorAll('.mobile-menu-item');
  mobileMenuItems.forEach(item => {
    item.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
  
  // Fermer le menu quand on clique en dehors
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
}

// === HERO SECTION ===
// La nouvelle section hero est maintenant statique et moderne

// === PRODUITS VEDETTES ===
function initFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) {
    // console.warn('PlastoBlast: Container featuredProducts non trouvé');
    return;
  }
  
  // Éviter les initialisations multiples
  if (container.hasAttribute('data-initialized')) {
    // console.log('PlastoBlast: Produits vedettes déjà initialisés');
    return;
  }
  
  // console.log('PlastoBlast: Initialisation des produits vedettes');
  
  try {
    const products = this.getFeaturedProducts();
    
    if (!products || products.length === 0) {
      // console.warn('PlastoBlast: Aucun produit vedette trouvé');
      return;
    }
    
    container.innerHTML = '';
    
    products.forEach(product => {
      try {
        const productCard = this.createProductCard(product);
        container.appendChild(productCard);
      } catch (error) {
        // console.error('PlastoBlast: Erreur lors de la création de la carte produit:', error, product);
      }
    });
    
    this.featuredProductsInitialized = true;
    // console.log(`PlastoBlast: ${featuredProducts.length} produits vedettes ajoutés`);
  } catch (error) {
    // console.error('PlastoBlast: Erreur lors de l\'initialisation des produits vedettes:', error);
  }
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
        onerror="this.src='/assets/images/placeholder-product.jpg'"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

// === SCROLL REVEAL ===
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
  
  // Observer tous les éléments avec la classe scroll-reveal
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
}

// === SMOOTH SCROLLING ===
function initSmoothScrolling() {
  // Gérer les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// === NAVIGATION ACTIVE ===
// Navigation simplifiée - les liens pointent maintenant vers des pages séparées

// === UTILITAIRES ===
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

// Optimisation des performances pour le scroll
const optimizedScrollHandler = debounce(() => {
  // Logique de scroll optimisée si nécessaire
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Optimisation des événements de redimensionnement
const optimizedResize = debounce(() => {
  // Logique de redimensionnement si nécessaire
  console.log('PlastoBlast: Redimensionnement optimisé');
}, 250);

window.addEventListener('resize', optimizedResize);

// Préchargement des images importantes
function preloadImages() {
  const importantImages = [
    'assets/images/logo-plastoblast.webp'
  ];
  
  importantImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Lancer le préchargement après le chargement initial
window.addEventListener('load', preloadImages);

// Gestion des erreurs d'images
document.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG' && !e.target.src.includes('placeholder-product.svg') && !e.target.hasAttribute('data-fallback-applied')) {
    // console.warn('PlastoBlast: Image non trouvée:', e.target.src);
    e.target.src = 'assets/images/placeholder-product.svg';
    // Marquer l'image pour éviter les boucles infinies
    e.target.setAttribute('data-fallback-applied', 'true');
  }
}, true);

// Nettoyage lors du déchargement de la page
window.addEventListener('beforeunload', function() {
  console.log('PlastoBlast: Nettoyage des ressources avant déchargement');
  if (typeof stopCarousel === 'function') {
    stopCarousel();
  }
  isInitialized = false;
  isCarouselRunning = false;
});

window.addEventListener('pagehide', function() {
  console.log('PlastoBlast: Nettoyage des ressources lors de la navigation');
  if (typeof stopCarousel === 'function') {
    stopCarousel();
  }
  isInitialized = false;
  isCarouselRunning = false;
});

// Gestion de la visibilité de la page pour optimiser les performances
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Page cachée - optimiser les performances
    console.log('PlastoBlast: Page cachée, optimisation des performances');
  } else {
    // Page visible - reprendre les animations si nécessaire
    console.log('PlastoBlast: Page visible, reprise normale');
  }
});

// Carrousel Hero - Désactivé (image statique utilisée)
function initHeroCarousel() {
  // Carrousel désactivé - utilisation d'une image statique
  console.log('PlastoBlast: Carrousel désactivé - image statique utilisée');
}
      
      // Pour les images très larges (ratio > 1.5)
      if (ratio > 1.5) {
        newWidth = Math.min(width * 0.8, maxWidth);
        newHeight = newWidth / ratio;
        
        // Assurer une hauteur minimale pour les images très larges
        if (newHeight < minHeight) {
          newHeight = minHeight;
          newWidth = newHeight * ratio;
          if (newWidth > maxWidth) {
            newWidth = maxWidth;
            newHeight = newWidth / ratio;
          }
        }
      }
      // Pour les images carrées ou légèrement rectangulaires (0.8 <= ratio <= 1.5)
      else if (ratio >= 0.8) {
        newWidth = Math.min(width, maxWidth);
        newHeight = Math.min(height, maxHeight);
        
        // Préserver le ratio en ajustant la dimension qui dépasse
        if (newWidth / newHeight > ratio) {
          newWidth = newHeight * ratio;
        } else {
          newHeight = newWidth / ratio;
        }
      }
      // Pour les images hautes (ratio < 0.8)
      else {
        newHeight = Math.min(height * 0.9, maxHeight);
        newWidth = newHeight * ratio;
        
        // Assurer une largeur minimale pour les images hautes
        if (newWidth < minWidth) {
          newWidth = minWidth;
          newHeight = newWidth / ratio;
          if (newHeight > maxHeight) {
            newHeight = maxHeight;
            newWidth = newHeight * ratio;
          }
        }
      }
      
      // Appliquer les contraintes absolues
      newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
      newHeight = Math.max(minHeight, Math.min(newHeight, maxHeight));
      
      // Ajouter une classe d'animation temporaire
      const currentSlideElement = slides[slideIndex];
      if (currentSlideElement) {
        currentSlideElement.classList.add('adapting');
        setTimeout(() => {
          currentSlideElement.classList.remove('adapting');
        }, 600);
      }
      
      // Appliquer les nouvelles dimensions avec une transition fluide
      carousel.style.width = `${newWidth}px`;
      carousel.style.height = `${newHeight}px`;
      carouselContainer.style.height = `${newHeight}px`;
      
      // Adapter aussi l'effet de glow si présent
      const glowElement = document.querySelector('.hero-image-glow');
      if (glowElement) {
        glowElement.style.width = `${newWidth + 40}px`;
        glowElement.style.height = `${newHeight + 40}px`;
      }
      
      console.log(`PlastoBlast: Cadre adapté pour l'image ${slideIndex + 1}: ${newWidth}x${newHeight}px (ratio: ${ratio.toFixed(2)}, type: ${ratio > 1.5 ? 'large' : ratio >= 0.8 ? 'carrée' : 'haute'})`);
    }
  }

  // Fonction pour charger et analyser les dimensions des images
  function loadImageDimensions() {
    slides.forEach((slide, index) => {
      const img = slide.querySelector('img');
      if (img) {
        // Si l'image est déjà chargée
        if (img.complete && img.naturalWidth > 0) {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
          const ratio = width / height;
          imageDimensions[index] = { width, height, ratio };
          imagesLoaded++;
          
          // Si c'est la première image, adapter immédiatement le cadre
          if (index === 0) {
            adaptFrameToImage(0);
          }
        } else {
          // Attendre que l'image se charge
          img.addEventListener('load', function() {
            const width = this.naturalWidth;
            const height = this.naturalHeight;
            const ratio = width / height;
            imageDimensions[index] = { width, height, ratio };
            imagesLoaded++;
            
            // Si c'est la première image, adapter immédiatement le cadre
            if (index === 0) {
              adaptFrameToImage(0);
            }
            
            // console.log(`PlastoBlast: Image ${index + 1} chargée: ${width}x${height}px (ratio: ${ratio.toFixed(2)})`);
          });
        }
      }
    });
  }

  // Fonction pour aller à une slide spécifique
  function goToSlide(slideIndex) {
    // console.log(`PlastoBlast: goToSlide appelée avec index ${slideIndex}`);
    
    // Valider l'index
    if (slideIndex < 0 || slideIndex >= slides.length) {
      // console.warn(`PlastoBlast: Index de slide invalide: ${slideIndex}`);
      return;
    }
    
    // Éviter les transitions inutiles
    if (slideIndex === currentSlide) {
      // console.log(`PlastoBlast: Déjà sur la slide ${slideIndex}, transition ignorée`);
      return;
    }
    
    // Retirer la classe active de tous les éléments
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Ajouter la classe active aux éléments correspondants
    slides[slideIndex].classList.add('active');
    indicators[slideIndex].classList.add('active');
    
    // Déplacer le track avec une transition fluide
    const translateX = -slideIndex * 10; // 10% par slide pour 10 slides
    track.style.transform = `translateX(${translateX}%)`;
    
    // Adapter le cadre aux dimensions de la nouvelle image avec un délai pour la transition
    setTimeout(() => {
      adaptFrameToImage(slideIndex);
    }, 100);
    
    currentSlide = slideIndex;
    
    // console.log(`PlastoBlast: Transition vers la slide ${slideIndex + 1}/${slides.length}`);
  }

  // Fonction pour aller à la slide suivante
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  }

  // Exposer adaptFrameToImage globalement
  window.adaptFrameToImage = adaptFrameToImage;

  // Redémarrer le carrousel
  function restartCarousel() {
    stopCarousel();
    startCarousel();
  }

  // Ajouter les événements aux indicateurs
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
      restartCarousel(); // Redémarrer le timer après interaction manuelle
    });
  });

  // Pause au survol du carrousel
  if (carousel) {
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
  }

  // Gestion de la visibilité de la page
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopCarousel();
    } else {
      startCarousel();
    }
  });

  // Assigner la fonction goToSlide à la variable globale
  globalGoToSlide = goToSlide;
  
  // Charger les dimensions des images
  loadImageDimensions();
  
  // Démarrer le carrousel
  startCarousel();
  
  // console.log('PlastoBlast: Carrousel hero initialisé avec adaptation dynamique');
  // console.log('PlastoBlast: globalGoToSlide assignée:', typeof globalGoToSlide);
  
  // Exposer les fonctions pour usage externe
  return {
    goToSlide,
    nextSlide,
    startCarousel,
    stopCarousel,
    restartCarousel
  };
}

// Export pour utilisation dans d'autres fichiers
window.PlastoblastApp = {
  products,
  initMobileMenu,
  initFeaturedProducts,
  initScrollReveal,
  initSmoothScrolling,
  initHeroCarousel
};
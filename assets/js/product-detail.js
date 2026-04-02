// Gestion de la page de détail produit
document.addEventListener('DOMContentLoaded', function() {
    initProductDetail();
});

let currentProduct = null;
let currentCategory = null;

function initProductDetail() {
    // Récupérer les paramètres URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');
    const productId = parseInt(urlParams.get('id'));
    
    if (!categoryId || !productId) {
        showErrorState();
        return;
    }
    
    // Charger le produit
    loadProduct(categoryId, productId);
    
    // Initialiser les événements
    initEventListeners();
}

function loadProduct(categoryId, productId) {
    const allProducts = window.ProductsApp?.allProducts || window.PlastoblastApp?.products || [];
    
    const product = allProducts.find(p => p.id === productId && p.category === categoryId);
    
    if (!product) {
        showErrorState();
        return;
    }
    
    currentProduct = product;
    currentCategory = categoryId;
    
    // Afficher les informations du produit
    displayProduct(product);
    
    // Charger les produits similaires
    loadRelatedProducts(categoryId, productId);
    
    // Mettre à jour le breadcrumb
    updateBreadcrumb(categoryId, product.name);
}

function displayProduct(product) {
    // Image principale
    const productImage = document.getElementById('productImage');
    productImage.src = product.image;
    productImage.alt = product.altText || product.name;
    
    // Titre et catégorie
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productCategoryBadge').textContent = getCategoryName(product.category);
    
    // Description
    document.getElementById('productDescription').textContent = product.description;
    
    // Caractéristiques
    const featuresList = document.getElementById('productFeatures');
    featuresList.innerHTML = '';
    
    product.features.forEach(feature => {
        const li = document.createElement('li');
        
        // Toutes les caractéristiques utilisent le même style
        li.innerHTML = `<span class="feature-tag">${feature}</span>`;
        
        featuresList.appendChild(li);
    });
    
    displaySpecs(product.specs);
    updateCompatibilitySection(product);
    
    // Bouton WhatsApp
    const whatsappBtn = document.getElementById('whatsappBtn');
    const message = `Bonjour Plastoblast,

Je suis intéressé par le produit : ${product.name}

Pourriez-vous me fournir :
- Un devis détaillé
- Les conditions de vente en gros
- Les délais de livraison
- La disponibilité en stock

Merci de me recontacter rapidement.`;
    
    whatsappBtn.href = `https://wa.me/213559371692?text=${encodeURIComponent(message)}`;
    
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.href = `mailto:djemoi.mahdi.salim@plastoblast-dz.com?subject=${encodeURIComponent(`Demande d'information - ${product.name}`)}`;
    }
    
    // Mettre à jour le titre de la page
    document.title = `${product.name} - Plastoblast | Accessoires CCTV Professionnels`;
    
    // Mettre à jour la meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', `${product.name} - ${product.description.substring(0, 150)}...`);
    }
}

function displaySpecs(specs) {
    const specsGrid = document.getElementById('specsGrid');
    specsGrid.innerHTML = '';
    
    Object.entries(specs).forEach(([key, value]) => {
        // Ignorer la propriété "charge"
        if (key === 'charge') return;
        
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label">${formatSpecLabel(key)}:</span>
            <span class="spec-value">${value}</span>
        `;
        specsGrid.appendChild(specItem);
    });
}

function formatSpecLabel(key) {
    const labels = {
        'dimensions': 'Dimensions',
        'poids': 'Poids',
        'matériau': 'Matériau',
        'compatibilité': 'Compatibilité',
        'longueur': 'Longueur',
        'couleur': 'Couleur',
        'fixation': 'Plage de fixation',
        'diamètre': 'Diamètre',
        'conditionnement': 'Conditionnement',
        'usage': 'Usage'
    };
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

function getCategoryName(categoryId) {
    const categories = {
        'boites': 'Boîtes de Jonction',
        'supports': 'Supports Muraux',
        'iro': 'Tubes IRO'
    };
    return categories[categoryId] || categoryId;
}

function updateCompatibilitySection(product) {
    const compatibilityTitle = document.querySelector('.compatibility-section .section-title');
    const compatibilityItems = document.querySelectorAll('.compatibility-item');

    if (!compatibilityTitle || compatibilityItems.length < 3) {
        return;
    }

    if (product.category === 'iro') {
        compatibilityTitle.textContent = 'Applications recommandées';
        compatibilityItems[0].querySelector('h4').textContent = 'Cheminement des câbles';
        compatibilityItems[0].querySelector('p').textContent = 'Conçu pour le passage propre et durable des réseaux électriques et de sécurité.';
        compatibilityItems[1].querySelector('h4').textContent = 'Accessoires assortis';
        compatibilityItems[1].querySelector('p').textContent = 'Compatible avec les tés, coudes et connecteurs de la gamme IRO Plastoblast.';
        compatibilityItems[2].querySelector('h4').textContent = 'Installation';
        compatibilityItems[2].querySelector('p').textContent = 'Pose rapide pour les chantiers résidentiels, tertiaires et techniques.';
        return;
    }

    compatibilityTitle.textContent = 'Compatibilité & Installation';
    compatibilityItems[0].querySelector('h4').textContent = 'Marques compatibles';
    compatibilityItems[0].querySelector('p').textContent = 'Dahua, Hikvision, Uniview et autres marques CCTV standards.';
    compatibilityItems[1].querySelector('h4').textContent = 'Types de caméras';
    compatibilityItems[1].querySelector('p').textContent = 'Caméras dôme, bullet, PTZ et équipements IP selon le modèle.';
    compatibilityItems[2].querySelector('h4').textContent = 'Installation';
    compatibilityItems[2].querySelector('p').textContent = 'Montage simple et rapide pour les intégrateurs et installateurs professionnels.';
}

function loadRelatedProducts(categoryId, currentProductId) {
    const allProducts = window.ProductsApp?.allProducts || window.PlastoblastApp?.products || [];
    
    // Filtrer les produits de la même catégorie (exclure le produit actuel)
    const relatedProducts = allProducts
        .filter(p => p.category === categoryId && p.id !== currentProductId)
        .slice(0, 3); // Limiter à 3 produits
    
    const relatedGrid = document.getElementById('relatedProducts');
    relatedGrid.innerHTML = '';
    
    if (relatedProducts.length === 0) {
        relatedGrid.innerHTML = '<p class="text-center text-gray-500">Aucun produit similaire disponible.</p>';
        return;
    }
    
    relatedProducts.forEach(product => {
        const productCard = createRelatedProductCard(product);
        relatedGrid.appendChild(productCard);
    });
}

function createRelatedProductCard(product) {
    const card = document.createElement('div');
    card.className = 'related-product-card';
    card.addEventListener('click', () => {
        window.location.href = `product-detail.html?category=${product.category}&id=${product.id}`;
    });
    
    card.innerHTML = `
        <div class="related-product-image">
            <img src="${product.image}" alt="${product.altText || product.name}" 
                 onerror="this.src='assets/images/placeholder-product.jpg'">
        </div>
        <div class="related-product-content">
            <h3>${product.name}</h3>
            <p>${product.description.substring(0, 80)}...</p>
        </div>
    `;
    
    return card;
}

function updateBreadcrumb(categoryId, productName) {
    const categoryBreadcrumb = document.getElementById('categoryBreadcrumb');
    const productBreadcrumb = document.getElementById('productBreadcrumb');
    
    categoryBreadcrumb.textContent = getCategoryName(categoryId);
    productBreadcrumb.textContent = productName;
    
    // Rendre le lien de catégorie cliquable
    categoryBreadcrumb.innerHTML = `<a href="products.html?category=${categoryId}">${getCategoryName(categoryId)}</a>`;
}

function initEventListeners() {
    // Bouton retour
    const backBtn = document.getElementById('backToProducts');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (currentCategory) {
                window.location.href = `products.html?category=${currentCategory}`;
            } else {
                window.location.href = 'products.html';
            }
        });
    }
    
    // Modal image
    const productImageContainer = document.querySelector('.product-image-container');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (productImageContainer && imageModal) {
        productImageContainer.addEventListener('click', () => {
            const mainImage = document.getElementById('productImage');
            modalImage.src = mainImage.src;
            modalImage.alt = mainImage.alt;
            imageModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Fermer la modal
        const closeModal = () => {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        };
        
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
        
        // Fermer avec Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imageModal.classList.contains('active')) {
                closeModal();
            }
        });
    }
    
    // Gestion de l'historique du navigateur
    window.addEventListener('popstate', function(e) {
        // Recharger la page si on revient en arrière
        window.location.reload();
    });
}

function showErrorState() {
    const container = document.querySelector('.product-detail-section .container-custom');
    container.innerHTML = `
        <div class="error-state">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            <h2>Produit non trouvé</h2>
            <p>Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
            <a href="products.html" class="btn-primary" style="margin-top: 1rem;">
                Retour aux produits
            </a>
        </div>
    `;
}

// Fonction utilitaire pour formater les URLs
function createProductUrl(category, productId) {
    return `product-detail.html?category=${category}&id=${productId}`;
}

// Fonction pour partager le produit
function shareProduct() {
    if (navigator.share && currentProduct) {
        navigator.share({
            title: currentProduct.name,
            text: currentProduct.description,
            url: window.location.href
        }).catch(() => {
            // Erreur de partage ignorée
        });
    } else {
        // Fallback: copier l'URL dans le presse-papiers
        navigator.clipboard.writeText(window.location.href).then(() => {
            // Afficher une notification
            showNotification('Lien copié dans le presse-papiers !');
        }).catch(() => {
            // Erreur de copie ignorée
        });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-green);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Ajouter les styles d'animation pour la notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Export pour utilisation globale
window.ProductDetailApp = {
    loadProduct,
    displayProduct,
    shareProduct,
    createProductUrl
};

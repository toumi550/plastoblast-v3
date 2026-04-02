// Utilitaires et fonctions communes
class PlastoblastUtils {
    
    // Gestion des erreurs d'images
    static handleImageError(img, fallbackSrc = 'assets/images/placeholder-product.jpg') {
        img.onerror = null; // Éviter les boucles infinies
        img.src = fallbackSrc;
        img.alt = 'Image non disponible';
    }
    
    // Lazy loading des images
    static initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    // Formatage des numéros de téléphone
    static formatPhoneNumber(phone) {
        // Nettoyer le numéro
        let cleaned = phone.replace(/\D/g, '');
        
        // Ajouter le préfixe algérien si nécessaire
        if (cleaned.length === 9 && !cleaned.startsWith('213')) {
            cleaned = '213' + cleaned;
        }
        
        // Formater pour l'affichage
        if (cleaned.startsWith('213')) {
            return '+213 ' + cleaned.substring(3, 6) + ' ' + cleaned.substring(6, 8) + ' ' + cleaned.substring(8, 10) + ' ' + cleaned.substring(10, 12);
        }
        
        return phone;
    }
    
    // Validation email
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Validation téléphone algérien
    static isValidAlgerianPhone(phone) {
        const phoneRegex = /^(\+213|0)(5|6|7)[0-9]{8}$/;
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        return phoneRegex.test(cleanPhone);
    }
    
    // Debounce function
    static debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }
    
    // Throttle function
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Smooth scroll vers un élément
    static smoothScrollTo(elementId, offset = 100) {
        const element = document.getElementById(elementId);
        if (element) {
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = element.offsetTop - headerHeight - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Copier du texte dans le presse-papiers
    static async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            // Fallback pour les navigateurs plus anciens
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                document.body.removeChild(textArea);
                return true;
            } catch (err) {
                document.body.removeChild(textArea);
                return false;
            }
        }
    }
    
    // Afficher une notification toast
    static showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        // Styles inline pour éviter les dépendances CSS
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        // Couleurs selon le type
        const colors = {
            info: '#3b82f6',
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444'
        };
        
        toast.style.backgroundColor = colors[type] || colors.info;
        
        document.body.appendChild(toast);
        
        // Supprimer automatiquement
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
        
        // Permettre de fermer en cliquant
        toast.addEventListener('click', () => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        });
    }
    
    // Générer un message WhatsApp formaté
    static generateWhatsAppMessage(productName, customerInfo = {}) {
        const { name, email, phone, company, message } = customerInfo;
        
        let whatsappMessage = `Bonjour Plastoblast,\n\n`;
        
        if (productName) {
            whatsappMessage += `Je suis intéressé par le produit : *${productName}*\n\n`;
        }
        
        if (name || email || phone || company) {
            whatsappMessage += `*Mes coordonnées :*\n`;
            if (name) whatsappMessage += `- Nom : ${name}\n`;
            if (email) whatsappMessage += `- Email : ${email}\n`;
            if (phone) whatsappMessage += `- Téléphone : ${phone}\n`;
            if (company) whatsappMessage += `- Entreprise : ${company}\n`;
            whatsappMessage += `\n`;
        }
        
        if (message) {
            whatsappMessage += `*Message :*\n${message}\n\n`;
        }
        
        whatsappMessage += `Pourriez-vous me fournir :\n`;
        whatsappMessage += `- Un devis détaillé\n`;
        whatsappMessage += `- Les conditions de vente en gros\n`;
        whatsappMessage += `- Les délais de livraison\n`;
        whatsappMessage += `- La disponibilité en stock\n\n`;
        whatsappMessage += `Merci de me recontacter rapidement.`;
        
        return whatsappMessage;
    }
    
    // Ouvrir WhatsApp avec un message
    static openWhatsApp(message, phoneNumber = '213559371692') {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
    
    // Détecter le type d'appareil
    static getDeviceType() {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
        const isTablet = /ipad|android(?!.*mobile)/.test(userAgent);
        
        if (isMobile && !isTablet) return 'mobile';
        if (isTablet) return 'tablet';
        return 'desktop';
    }
    
    // Formater une date en français
    static formatDate(date, options = {}) {
        const defaultOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        
        return new Intl.DateTimeFormat('fr-FR', { ...defaultOptions, ...options }).format(date);
    }
    
    // Calculer le temps de lecture estimé
    static calculateReadingTime(text, wordsPerMinute = 200) {
        const words = text.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return minutes;
    }
    
    // Générer un ID unique
    static generateId(prefix = 'id') {
        return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    // Vérifier si un élément est visible dans le viewport
    static isElementInViewport(element, threshold = 0) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        return (
            rect.top >= -threshold &&
            rect.left >= -threshold &&
            rect.bottom <= windowHeight + threshold &&
            rect.right <= windowWidth + threshold
        );
    }
    
    // Précharger des images
    static preloadImages(imageUrls) {
        return Promise.all(
            imageUrls.map(url => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(url);
                    img.onerror = () => reject(url);
                    img.src = url;
                });
            })
        );
    }
    
    // Sauvegarder dans le localStorage avec gestion d'erreurs
    static saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            // console.warn('Impossible de sauvegarder dans le localStorage:', error);
            return false;
        }
    }
    
    // Récupérer du localStorage avec gestion d'erreurs
    static getFromStorage(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            // console.warn('Impossible de récupérer du localStorage:', error);
            return defaultValue;
        }
    }
}

// Ajouter les animations CSS nécessaires
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(animationStyles);

// Export global
window.PlastoblastUtils = PlastoblastUtils;

// Auto-initialisation de certaines fonctionnalités
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser le lazy loading
    PlastoblastUtils.initLazyLoading();
    
    // Gérer les erreurs d'images globalement
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            PlastoblastUtils.handleImageError(e.target);
        }
    }, true);
});

// Utilitaires spécifiques à Plastoblast
class PlastoblastBusiness {
    
    // Catégories de produits
    static getCategories() {
        return [
            {
                id: 'boites',
                name: 'Boîtes de Jonction',
                description: 'Boîtes de jonction étanches pour installations extérieures'
            },
            {
                id: 'supports',
                name: 'Supports Muraux',
                description: 'Supports muraux robustes pour caméras CCTV'
            },
            {
                id: 'iro',
                name: 'Tubes IRO',
                description: 'Tubes IRO et accessoires de raccordement'
            }
        ];
    }
    
    // Marques compatibles
    static getCompatibleBrands() {
        return [
            { name: 'Dahua', compatibility: '95%' },
            { name: 'Hikvision', compatibility: '95%' },
            { name: 'Uniview', compatibility: '90%' },
            { name: 'Autres marques', compatibility: '85%' }
        ];
    }
    
    // Informations de contact
    static getContactInfo() {
        return {
            phone: '+213559371692',
            email: 'djemoi.mahdi.salim@plastoblast-dz.com',
            address: 'Alger, Algérie',
            whatsapp: '213559371692',
            workingHours: 'Sam-Jeu : 8h-17h'
        };
    }
    
    // Générer un devis WhatsApp pour un produit
    static requestQuote(product, customerInfo = {}) {
        const message = PlastoblastUtils.generateWhatsAppMessage(product.name, customerInfo);
        PlastoblastUtils.openWhatsApp(message);
    }
    
    // Vérifier si c'est un client professionnel (basique)
    static isProfessionalEmail(email) {
        const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
        const domain = email.split('@')[1]?.toLowerCase();
        return domain && !personalDomains.includes(domain);
    }
}

// Export global
window.PlastoblastBusiness = PlastoblastBusiness;

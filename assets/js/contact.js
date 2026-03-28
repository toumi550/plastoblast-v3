// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Validation en temps réel
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    
    // Validation complète du formulaire
    if (!validateForm(form)) {
        return;
    }
    
    // Afficher l'état de chargement
    setLoadingState(submitBtn, true);
    
    // Collecter les données du formulaire
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Simuler l'envoi (remplacer par votre logique d'envoi réelle)
    setTimeout(() => {
        // Ici vous pouvez intégrer votre service d'envoi d'email
        // Par exemple: EmailJS, Formspree, ou votre propre API
        
        showSuccessMessage();
        form.reset();
        setLoadingState(submitBtn, false);
        
        // Rediriger vers WhatsApp avec les informations
        redirectToWhatsApp(data);
    }, 2000);
}

function validateForm(form) {
    let isValid = true;
    
    // Champs requis
    const requiredFields = [
        'firstName',
        'lastName', 
        'phone',
        'productType',
        'message',
        'professional'
    ];
    
    requiredFields.forEach(fieldName => {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const fieldGroup = field.closest('.form-group');
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    
    // Supprimer les erreurs existantes
    clearFieldError(field);
    
    // Validation selon le type de champ
    let isValid = true;
    let errorMessage = '';
    
    switch (fieldName) {
        case 'firstName':
        case 'lastName':
            if (!fieldValue) {
                isValid = false;
                errorMessage = 'Ce champ est requis';
            } else if (fieldValue.length < 2) {
                isValid = false;
                errorMessage = 'Minimum 2 caractères';
            }
            break;
            
        case 'email':
            if (fieldValue && !isValidEmail(fieldValue)) {
                isValid = false;
                errorMessage = 'Format d\'email invalide';
            }
            break;
            
        case 'phone':
            if (!fieldValue) {
                isValid = false;
                errorMessage = 'Le téléphone est requis';
            } else if (!isValidPhone(fieldValue)) {
                isValid = false;
                errorMessage = 'Format de téléphone invalide';
            }
            break;
            
        case 'productType':
            if (!fieldValue) {
                isValid = false;
                errorMessage = 'Veuillez sélectionner un type de produit';
            }
            break;
            
        case 'message':
            if (!fieldValue) {
                isValid = false;
                errorMessage = 'Le message est requis';
            } else if (fieldValue.length < 10) {
                isValid = false;
                errorMessage = 'Le message doit contenir au moins 10 caractères';
            }
            break;
            
        case 'professional':
            if (field.type === 'checkbox' && !field.checked) {
                isValid = false;
                errorMessage = 'Vous devez confirmer être un professionnel';
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Accepter différents formats de téléphone algérien
    const phoneRegex = /^(\+213|0)(5|6|7)[0-9]{8}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone);
}

function showFieldError(field, message) {
    const fieldGroup = field.closest('.form-group');
    fieldGroup.classList.add('error');
    
    // Supprimer le message d'erreur existant
    const existingError = fieldGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Ajouter le nouveau message d'erreur
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    fieldGroup.appendChild(errorElement);
}

function clearFieldError(field) {
    const fieldGroup = field.closest('.form-group');
    fieldGroup.classList.remove('error');
    
    const errorMessage = fieldGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function setLoadingState(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
        button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>
            Envoi en cours...
        `;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
        button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>
            Envoyer la demande
        `;
    }
}

function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <strong>✓ Demande envoyée avec succès !</strong><br>
        Nous vous contacterons dans les plus brefs délais. Vous allez être redirigé vers WhatsApp pour un suivi rapide.
    `;
    
    form.parentNode.insertBefore(successMessage, form);
    
    // Supprimer le message après 5 secondes
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

function redirectToWhatsApp(data) {
    // Construire le message WhatsApp avec les informations du formulaire
    const message = `Bonjour Plastoblast,

Je viens de remplir votre formulaire de contact et souhaiterais obtenir un devis.

**Informations de contact :**
- Nom : ${data.firstName} ${data.lastName}
- Email : ${data.email}
- Téléphone : ${data.phone}
${data.company ? `- Entreprise : ${data.company}` : ''}

**Demande :**
- Type de produits : ${getProductTypeLabel(data.productType)}
${data.quantity ? `- Quantité estimée : ${data.quantity}` : ''}

**Message :**
${data.message}

Merci de me recontacter pour finaliser cette demande.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/213559371692?text=${encodedMessage}`;
    
    // Rediriger après 3 secondes
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 3000);
}

function getProductTypeLabel(value) {
    const labels = {
        'boites': 'Boîtes de jonction',
        'supports': 'Supports muraux',
        'iro': 'Tubes IRO',
        'both': 'Plusieurs catégories',
        'other': 'Autre (voir message)'
    };
    return labels[value] || value;
}

// Amélioration de l'expérience utilisateur
document.addEventListener('DOMContentLoaded', function() {
    // Auto-focus sur le premier champ
    const firstInput = document.querySelector('#firstName');
    if (firstInput) {
        firstInput.focus();
    }
    
    // Formatage automatique du téléphone
    const phoneInput = document.querySelector('#phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Ajouter le préfixe +213 si nécessaire
            if (value.length > 0 && !value.startsWith('213') && !value.startsWith('0')) {
                value = '213' + value;
            }
            
            // Formater le numéro
            if (value.startsWith('213')) {
                value = '+' + value;
            }
            
            e.target.value = value;
        });
    }
    
    // Capitalisation automatique des noms
    const nameInputs = document.querySelectorAll('#firstName, #lastName');
    nameInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const words = e.target.value.split(' ');
            const capitalizedWords = words.map(word => 
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            );
            e.target.value = capitalizedWords.join(' ');
        });
    });
});

// Export pour utilisation globale
window.ContactApp = {
    validateForm,
    validateField,
    redirectToWhatsApp
};

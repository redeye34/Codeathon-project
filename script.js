// REGISTER MODAL FUNCTIONALITY
const openRegisterBtn = document.getElementById('openRegister');
const closeRegisterBtn = document.getElementById('closeRegister');
const registerModal = document.getElementById('registerModal');
const registerForm = document.getElementById('registerForm');

if (openRegisterBtn) {
    openRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeRegisterBtn) {
    closeRegisterBtn.addEventListener('click', () => {
        registerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
registerModal.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        registerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// PASSWORD TOGGLE FUNCTIONALITY
const togglePass1 = document.getElementById('togglePass1');
const togglePass2 = document.getElementById('togglePass2');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

if (togglePass1 && passwordField) {
    togglePass1.addEventListener('click', () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePass1.textContent = 'Hide';
        } else {
            passwordField.type = 'password';
            togglePass1.textContent = 'Show';
        }
    });
}

if (togglePass2 && confirmPasswordField) {
    togglePass2.addEventListener('click', () => {
        if (confirmPasswordField.type === 'password') {
            confirmPasswordField.type = 'text';
            togglePass2.textContent = 'Hide';
        } else {
            confirmPasswordField.type = 'password';
            togglePass2.textContent = 'Show';
        }
    });
}

// REGISTER FORM SUBMISSION
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long!');
            return;
        }
        
        alert('Account created successfully!');
        registerForm.reset();
        registerModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}


const serviceTypeSelect = document.getElementById('serviceType');
const clinicFields = document.getElementById('clinicFields');
const restaurantFields = document.getElementById('restaurantFields');
const salonFields = document.getElementById('salonFields');

if (serviceTypeSelect) {
    serviceTypeSelect.addEventListener('change', (e) => {
        // Remove active class from all sections
        if (clinicFields) clinicFields.classList.remove('active');
        if (restaurantFields) restaurantFields.classList.remove('active');
        if (salonFields) salonFields.classList.remove('active');

        // Add active class to selected section
        const serviceType = e.target.value;
        if (serviceType === 'clinic' && clinicFields) {
            clinicFields.classList.add('active');
        } else if (serviceType === 'restaurant' && restaurantFields) {
            restaurantFields.classList.add('active');
        } else if (serviceType === 'salon' && salonFields) {
            salonFields.classList.add('active');
        }
    });
}

// Payment Options Toggle
const payNowButtons = document.querySelectorAll('.primary-btn');
payNowButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find the parent dynamic section
        const parentSection = this.closest('.dynamic-section') || this.closest('.booking-card form');
        
        if (parentSection) {
            // Look for payment options or payment method div
            const paymentDiv = parentSection.querySelector('.payment-options') || 
                             parentSection.querySelector('.payment-method');
            
            if (paymentDiv) {
                paymentDiv.classList.toggle('show');
            }
        }
    });
});

// Generate Random Booking ID
function generateBookingId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = 'ATRA';
    for (let i = 0; i < 8; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

// Close Confirmation Modal
const closeConfirmationBtn = document.getElementById('closeConfirmation');
const confirmationModal = document.getElementById('confirmationModal');

if (closeConfirmationBtn) {
    closeConfirmationBtn.addEventListener('click', () => {
        confirmationModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
if (confirmationModal) {
    confirmationModal.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            confirmationModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Booking Form Submission
const bookingForm = document.querySelector('form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Booking Confirmed! Thank you for choosing ATRAS.');
        this.reset();
        
        // Reset dynamic sections
        if (clinicFields) clinicFields.classList.remove('active');
        if (restaurantFields) restaurantFields.classList.remove('active');
        if (salonFields) salonFields.classList.remove('active');
        if (serviceTypeSelect) serviceTypeSelect.value = '';
        
        // Hide all payment options
        document.querySelectorAll('.payment-options, .payment-method').forEach(el => {
            el.classList.remove('show');
        });
    });
}

// Book Now Button - Scroll to Booking Section
const bookBtn = document.querySelector('.book-btn');
if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const bookingSection = document.querySelector('.booking-section');
        if (bookingSection) {
            bookingSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});



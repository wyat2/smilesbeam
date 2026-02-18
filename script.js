// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        }

        lastScroll = currentScroll;
    });
});

// Form validation for contact form
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    const name = form.querySelector('input[name="name"]');
    const phone = form.querySelector('input[name="phone"]');

    let isValid = true;

    if (name && name.value.trim() === '') {
        alert('Please enter your name');
        name.focus();
        isValid = false;
    }

    if (email && email.value.trim() === '') {
        alert('Please enter your email');
        email.focus();
        isValid = false;
    } else if (email && !isValidEmail(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        isValid = false;
    }

    if (phone && phone.value.trim() === '') {
        alert('Please enter your phone number');
        phone.focus();
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/*message form*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/*home page animation*/
window.ityped.init(document.querySelector('.ityped'),{
  strings: ['<Hello World!/>','I\'m Janna Angeles'],
      loop: true
});

// Log a message when the page loads
console.log('Page loaded, JavaScript is running.');

// Section visibility animation
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Active navigation highlighting
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Ensure the event listener for the 'See More' button is attached
document.addEventListener('DOMContentLoaded', function() {
    const seeMoreButton = document.getElementById('see-more');
    if (seeMoreButton) {
        seeMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('See More button clicked!');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    } else {
        console.error('See More button not found!');
    }
});
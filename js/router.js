
// Page configuration
const pages = {
    'home': {
        title: 'AI Pedagogy - WPI',
        template: 'templates/home.html'
    },
    'about': {
        title: 'About - AI Pedagogy - WPI',
        template: 'templates/about.html'
    },
    'resources': {
        title: 'Resources - AI Pedagogy - WPI',
        template: 'templates/resources.html'
    },
    'news': {
        title: 'News - AI Pedagogy - WPI',
        template: 'templates/news.html'
    }
};

// Load a template file
async function loadTemplate(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return await response.text();
    } catch (error) {
        console.error('Error loading template:', error);
        return '<p>Error loading content. Please refresh the page.</p>';
    }
}

// Load and display a page
async function loadPage(pageName) {
    const page = pages[pageName] || pages['home'];
    
    // Update page title
    document.getElementById('page-title').textContent = page.title;
    
    // Load header, content, and footer
    const [header, content, footer] = await Promise.all([
        loadTemplate('templates/header.html'),
        loadTemplate(page.template),
        loadTemplate('templates/footer.html')
    ]);
    
    // Insert into page
    document.getElementById('header-placeholder').innerHTML = header;
    document.getElementById('content-placeholder').innerHTML = content;
    document.getElementById('footer-placeholder').innerHTML = footer;
    
    // After loading, highlight current page in nav
    highlightCurrentPage(pageName);
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add back to top button
    addBackToTopButton();
    
    // Set up navigation links
    setupNavigation();
}

// Set up navigation to work with hash routing
function setupNavigation() {
    document.querySelectorAll('a[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            window.location.hash = page;
        });
    });
}

// Highlight the current page in navigation
function highlightCurrentPage(currentPage) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.style.borderBottom = '2px solid white';
        } else {
            link.style.borderBottom = 'none';
        }
    });
}

// Smooth scroll for anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add a "back to top" button when user scrolls down
function addBackToTopButton() {
    // Remove existing button if any
    const existingButton = document.querySelector('.back-to-top');
    if (existingButton) existingButton.remove();
    
    let backToTopButton;
    
    const scrollHandler = function() {
        if (window.pageYOffset > 300) {
            if (!backToTopButton) {
                backToTopButton = document.createElement('button');
                backToTopButton.innerHTML = '↑';
                backToTopButton.setAttribute('aria-label', 'Back to top');
                backToTopButton.className = 'back-to-top';
                backToTopButton.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #AC2B37;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    font-size: 24px;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                    transition: all 0.3s;
                    z-index: 1000;
                `;
                backToTopButton.addEventListener('click', function() {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
                backToTopButton.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1)';
                });
                backToTopButton.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
                document.body.appendChild(backToTopButton);
            }
        } else if (backToTopButton && window.pageYOffset <= 300) {
            backToTopButton.remove();
            backToTopButton = null;
        }
    };
    
    window.addEventListener('scroll', scrollHandler);
}

// Handle hash changes for routing
window.addEventListener('hashchange', function() {
    const page = window.location.hash.slice(1) || 'home';
    loadPage(page);
});

// Initial page load
document.addEventListener('DOMContentLoaded', function() {
    const initialPage = window.location.hash.slice(1) || 'home';
    loadPage(initialPage);
});
// Project data
const projects = [
    {
        id: 1,
        title: 'E-commerce Dashboard',
        description: 'A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and customer insights.',
        image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tags: ['React', 'TypeScript', 'Tailwind'],
        demoUrl: 'https://codemasterashish.github.io/code_alpha_Ecommerce_site_task_1/',
        codeUrl: 'https://github.com/CodeMasterAshish/code_alpha_Ecommerce_site_task_1'
    },
    // {
    //     id: 2,
    //     title: 'Travel Blog Platform',
    //     description: 'A modern blog platform designed specifically for travel enthusiasts to share their adventures and tips.',
    //     image: 'https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //     tags: ['React', 'Node.js', 'MongoDB'],
    //     demoUrl: '#',
    //     codeUrl: '#'
    // },
    {
        id: 3,
        title: 'Simons-Says Game',
        description: "Simons-Says is a game where pressing unknown numbers",
        image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tags: ['JavaScript', 'API', 'CSS'],
        demoUrl: 'https://codemasterashish.github.io/Simons-Says/',
        codeUrl: 'https://github.com/CodeMasterAshish/Simons-Says'
    },
    // {
    //     id: 4,
    //     title: 'Task Management App',
    //     description: 'A productivity tool to help users organize their tasks, set priorities, and track progress.',
    //     image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    //     tags: ['React', 'Redux', 'Firebase'],
    //     demoUrl: '#',
    //     codeUrl: '#'
    // },
    {
        id: 5,
        title: 'Dev Chat Website',
        description: 'Dev Chat Website where devlopers meet and advice to their junior developers.',
        image: 'https://www.google.com/search?sca_esv=c0478c77a7b2bf7c&sxsrf=AE3TifNiVaZc-WgsdnDQCxbWGaZpTKArMg:1749318098732&q=devchat&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeqDdErwP5rACeJAty2zADJgYJpo1blvMpITBRgbnARM6y8KwxzRsF24u6g33NutBQiYU4YYg2NVY9oewD6JMcYBKargMsgCi4cL08u6SynE_cy-05ouuwN6iQirrv5M9n70PIysVTl7Iu_TGD_Sddr0p2qNgSo3BfXOJ_vI1AD3GRn5E_w&sa=X&ved=2ahUKEwiG8v7e7d-NAxWfzjgGHdtwFS4QtKgLegQIFBAB&biw=1536&bih=730&dpr=1.25#vhid=C_O-X1TgDcTtiM&vssid=mosaic',
        tags: ['HTML', 'Css', 'Javascript', 'React'],
        demoUrl: 'https://codemasterashish.github.io/Devchat/',
        codeUrl: 'https://github.com/CodeMasterAshish/Devchat'
    },
    {
        id: 6,
        title: 'Recipe Finder',
        description: 'A web app that helps users discover recipes based on ingredients they have on hand.',
        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tags: ['JavaScript', 'API', 'CSS'],
        demoUrl: '#',
        codeUrl: '#'
    }
];

// DOM Elements
const header = document.querySelector('.header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const scrollDownButton = document.querySelector('.scroll-down');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsGrid = document.querySelector('.projects-grid');
const skillBars = document.querySelectorAll('.skill-progress');
const contactForm = document.getElementById('contactForm');
const currentYearSpan = document.getElementById('currentYear');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Header scroll effect
function handleScroll() {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const isExpanded = navLinks.classList.contains('show');
    mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
});

// Theme toggle
function setTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    setTheme(newTheme);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            navLinks.classList.remove('show');
        }
    });
});

// Scroll down button
scrollDownButton.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Project filtering
function renderProjects(filter = 'all') {
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.tags.includes(filter));

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                        </a>
                        <a href="${project.codeUrl}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View source code">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `
                        <span class="project-tag">${tag}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize projects
renderProjects();

// Project filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProjects(filter);
    });
});

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width;
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));

// Contact form handling
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    // Show loading state
    submitButton.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;
    submitButton.disabled = true;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-4 rounded-lg mb-6';
    messageDiv.textContent = 'Thank you! Your message has been sent successfully.';
    contactForm.insertBefore(messageDiv, contactForm.firstChild);

    // Reset form
    contactForm.reset();
    submitButton.innerHTML = originalButtonText;
    submitButton.disabled = false;

    // Remove success message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
});

// Active section highlighting
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');

        if (rect.top <= 100 && rect.bottom >= 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

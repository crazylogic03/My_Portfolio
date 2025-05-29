// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const scrollTopBtn = document.getElementById('scroll-top');
const navItems = document.querySelectorAll('.nav-item');
const footerLinks = document.querySelectorAll('.footer-link');
const heroButtons = document.querySelectorAll('.hero-buttons .btn');
const projectsContainer = document.getElementById('projects-container');
const skillsContainer = document.getElementById('skills-container');
const experienceTimeline = document.getElementById('experience-timeline');
const educationTimeline = document.getElementById('education-timeline');
const contactForm = document.getElementById('contact-form');
const currentYearSpan = document.getElementById('current-year');

// Project Data
const projects = [
    {
        id: 1,
        title: "Tic-Tac-Toe",
        description: "Developed an interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript. Implemented dynamic UI updates and a winning condition check. Designed a responsive layout for seamless gameplay on different screen sizes.",
        image: "ttt.png",
        techStack: ["HTML", "CSS", "JS"],
        liveUrl: "https://tic-tac-toe-livid-psi.vercel.app/",
        githubUrl: "https://github.com/crazylogic03/Tic-Tac-Toe",
    },
    {
        id: 2,
        title: "Famous Inventors",
        description: "Collaborated on a static website showcasing famous inventors and their contributions, built using HTML and CSS. Designed an engaging, responsive layout with well-structured content and intuitive navigation. Focused on clean UI design, accessibility, and cross-browser compatibility to ensure a seamless user experience.",
        image: "logo.png",
        techStack: ["HTML", "CSS"],
        liveUrl: "https://famousinventors.netlify.app/",
        githubUrl: "https://github.com/GUNAVANTH333/Famous-Inventors-S-W",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing projects and skills with modern UI/UX design.",
        image: "por.jpg",
        techStack: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://my-portfolio-crazylogic03s-projects.vercel.app/",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "Waste Management Automation in Dark Stores",
        description: "Developed an innovative solution during a hackathon to optimize waste management in dark stores. Designed a system to analyze near-expiry items using bar and donut graphs, enabling efficient tracking of waste through visual analytics. Implemented an automated approach to minimize packaging waste by recommending appropriately sized packaging for products, enhancing sustainability and operational efficiency.",
        image: "waste.webp",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        liveUrl: "https://team-senorita.vercel.app/",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "MasterMind-Game",
        description: "A web-based implementation of the classic code-breaking game, Mastermind. Built using HTML, CSS, and JavaScript, this project challenges players to guess a hidden color sequence within limited attempts. The game provides intuitive visual feedback for each guess, indicating correct colors and positions. It features a clean UI, interactive logic, and fully responsive design, offering an enjoyable and brain-teasing experience. Ideal for showcasing logical reasoning and frontend development skills.",
        image: "mmlogo.png",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        liveUrl: "https://mastermind-game-gray.vercel.app/",
        githubUrl: "https://github.com/crazylogic03/mastermind-game",
    },
    {
        id: 6,
        title: "Travel Bucket-List",
        description: "A feature-rich Travel Bucket List web app that enables users to explore, add, and track dream destinations. Built with React, Leaflet, Tailwind CSS, and JavaScript, the app integrates interactive maps for visualizing locations and uses the Unsplash API to display stunning travel images. Users can mark destinations as visited, filter entries, and enjoy a clean, responsive UI designed for smooth and engaging interactions. This project showcases skills in API integration, state management, and modern frontend development.",
        image: "looo.jpeg",
        techStack: ["React", "Tailwind CSS", "JavaScript", "Leaflet", "Unsplash API"],
        liveUrl: "https://travel-bucket-list.vercel.app/", // Corrected URL
        githubUrl: "https://github.com/crazylogic03/TravelBucket",
    }
];

// Skills Data
const skills = [
    { name: "HTML/CSS", level: 90, icons: ["devicon-html5-plain", "devicon-css3-plain"] },
    { name: "JavaScript", level: 85, icons: ["devicon-javascript-plain"] },
    { name: "React", level: 60, icons: ["devicon-react-original"] },
    { name: "Python", level: 75, icons: ["devicon-python-plain"] },
];

// Experience Data
const experiences = [
    {
        id: 1,
        title: "Student Developer Club Member",
        period: "2021 - Present",
        company: "Newton School of Technology - Student Developer Club",
        description: "Active member of the Student Developer Club (SDC) at Newton School of Technology. Collaborated in coding workshops and Engaged in hackathons to enhance problem-solving, teamwork, and software development skills.",
    }
];

// Education Data
const education = [
    {
        id: 1,
        degree: "Matriculation",
        institution: "Kendriya Vidyalaya",
        period: "2019 - 2022",
    },
    {
        id: 2,
        degree: "Intermediate",
        institution: "Medha-V Junior School",
        period: "2022 - 2024",
    },
    {
        id: 3,
        degree: "Bachelor's of Technology [B-Tech]",
        institution: "Newton School of Technology -- Ajeenkya DY Patil University",
        period: "2024 - 2028",
    },
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    currentYearSpan.textContent = new Date().getFullYear();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    }
    renderProjects();
    renderSkills();
    renderExperience();
    renderEducation();
    initScrollAnimations();
});

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Theme toggle functionality
function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcons(isDarkMode);
}

function updateThemeIcons(isDarkMode) {
    const themeIcon = themeToggle.querySelector('i');
    const mobileThemeIcon = mobileThemeToggle.querySelector('i');
    if (isDarkMode) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        mobileThemeIcon.classList.remove('fa-moon');
        mobileThemeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        mobileThemeIcon.classList.remove('fa-sun');
        mobileThemeIcon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', toggleDarkMode);
mobileThemeToggle.addEventListener('click', toggleDarkMode);

// Scroll event handling
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.05}px)`;
    }
    if (scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    updateActiveNavItem();
    animateOnScroll();
});

// Scroll to section functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        mobileMenu.classList.remove('open');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Add click event to all navigation items
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const section = item.getAttribute('data-section');
        scrollToSection(section);
    });
});

// Add click event to footer links
footerLinks.forEach(link => {
    link.addEventListener('click', () => {
        const section = link.getAttribute('data-section');
        scrollToSection(section);
    });
});

// Add click event to hero buttons
heroButtons.forEach(button => {
    button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        if (section) {
            scrollToSection(section);
        }
    });
});

// Scroll to top button
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Update active nav item based on scroll position
function updateActiveNavItem() {
    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                navItems.forEach(item => item.classList.remove('active'));
                const activeNavItems = document.querySelectorAll(`.nav-item[data-section="${section}"]`);
                activeNavItems.forEach(item => item.classList.add('active'));
                break;
            }
        }
    }
}

// Render projects
function renderProjects() {
    projectsContainer.innerHTML = '';
    const techIcons = {
        'HTML': 'devicon-html5-plain',
        'CSS': 'devicon-css3-plain',
        'JS': 'devicon-javascript-plain',
        'JavaScript': 'devicon-javascript-plain',
        'React': 'devicon-react-original',
        'Tailwind CSS': 'devicon-tailwindcss-plain',
        'Tailwind': 'devicon-tailwindcss-plain',
        'Leaflet': 'devicon-leaflet-plain',
        'Unsplash API': 'fas fa-camera'
    };
    const techIconColors = {
        'HTML': 'var(--primary-light)',
        'CSS': '#60A5FA',
        'JS': '#FBBF24',
        'JavaScript': '#FBBF24',
        'React': '#22D3EE',
        'Tailwind CSS': '#22D3EE',
        'Tailwind': '#22D3EE',
        'Leaflet': '#34D399',
        'Unsplash API': '#F87171'
    };
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.techStack.map(tech => `
                        <span class="tech-tag">
                            <span class="tool-icon"><i class="${techIcons[tech] || 'fas fa-tools'}" style="color: ${techIconColors[tech] || 'var(--primary-light)'}"></i></span>
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Preview
                    </a>
                    <a href="${project.githubUrl}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> Source Code
                    </a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Render skills
function renderSkills() {
    skillsContainer.innerHTML = '';
    const skillIconColors = {
        'HTML/CSS': 'var(--primary-light)',
        'JavaScript': '#FBBF24',
        'React': '#22D3EE',
        'Python': '#60A5FA'
    };
    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="tool-item">
                <div class="skill-header">
                    ${skill.icons.map(icon => `
                        <span class="tool-icon"><i class="${icon}" style="color: ${skillIconColors[skill.name] || 'var(--primary-light)'}"></i></span>
                    `).join('')}
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-level="${skill.level}" style="width: 0%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillItem);
    });
}

// Render experience timeline
function renderExperience() {
    experienceTimeline.innerHTML = '';
    experiences.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h4>${exp.title}</h4>
                <p class="company">${exp.company}</p>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        `;
        experienceTimeline.appendChild(timelineItem);
    });
}

// Render education timeline
function renderEducation() {
    educationTimeline.innerHTML = '';
    education.forEach(edu => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h4>${edu.degree}</h4>
                <p class="company">${edu.institution}</p>
                <p class="period">${edu.period}</p>
            </div>
        `;
        educationTimeline.appendChild(timelineItem);
    });
}

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    console.log('Form submitted:', { name, email, subject, message });
    contactForm.reset();
    alert('Message sent successfully!');
});

// Initialize scroll animations
function initScrollAnimations() {
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
                const level = bar.getAttribute('data-level');
                setTimeout(() => {
                    bar.style.width = `${level}%`;
                }, index * 100);
            });
            observer.unobserve(skillsSection);
        }
    }, { threshold: 0.5 });
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Animate elements when they come into view
function animateOnScroll() {
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}
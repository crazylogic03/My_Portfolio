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
        description: "Developed an interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript. Implemented dynamic UI updates and a winning condition check. Designed a responsive layout for seamless gameplay on diﬀerent screen sizes.",
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
        description: "Developed an innovative solution during a hackathon to optimize waste management in dark stores.Designed a system to analyze near-expiry items using bar and donut graphs, enabling eﬃcient tracking of waste through visual analytics. Implemented an automated approach to minimize packaging waste by recommending appropriately sized packaging for products, enhancing sustainability and operational eﬃciency.",
        image: "waste.webp",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        liveUrl: "https://team-senorita.vercel.app/",
        githubUrl: "#",
    }
];

// Skills Data
const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 45 },
    { name: "Python", level: 75 },
];

// Experience Data
const experiences = [
    {
        id: 1,
        title: "Student Developer Club Member",
        period: "2021 - Present",
        company: "Newton School of Technology - Student developer club",
        description: "Active member of the Student Developer Club (SDC) at Newton School of Technology. Collaborated in coding workshops and Engaged in hackathons to enhance problem-solving, teamwork, and software development skills.",
    }
];

// Education Data
const education = [
    {
        id: 1,
        degree: "Marticulation",
        institution: "Kendriya Vidyalaya",
        period: "2019 - 2022",
    },
    {
        id: 2,
        degree: "Intermediate",
        institution: "Medha-V Junior School",
        period: "2022- 2024",
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
    // Set current year in footer
    currentYearSpan.textContent = new Date().getFullYear();

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    }

    // Render dynamic content
    renderProjects();
    renderSkills();
    renderExperience();
    renderEducation();

    // Initialize scroll animations
    initScrollAnimations();
});

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');

    // Toggle icon
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

    // Navbar styling on scroll
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Parallax effect for hero background
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.05}px)`;
    }

    // Show/hide scroll to top button
    if (scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    // Update active nav item based on scroll position
    updateActiveNavItem();

    // Check for elements to animate on scroll
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

        // Close mobile menu if open
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
                // Remove active class from all nav items
                navItems.forEach(item => {
                    item.classList.remove('active');
                });

                // Add active class to current section nav item
                const activeNavItems = document.querySelectorAll(`.nav-item[data-section="${section}"]`);
                activeNavItems.forEach(item => {
                    item.classList.add('active');
                });

                break;
            }
        }
    }
}

// Render projects
function renderProjects() {
    projectsContainer.innerHTML = '';

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
          ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
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

    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        skillItem.innerHTML = `
      <div class="skill-header">
        <h3>${skill.name}</h3>
        <span>${skill.level}%</span>
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

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, subject, message });

    // Reset form
    contactForm.reset();

    // Show success message (you can implement this)
    alert('Message sent successfully!');
});

// Initialize scroll animations
function initScrollAnimations() {
    // Animate skill bars when in viewport
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

            // Unobserve after animation
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
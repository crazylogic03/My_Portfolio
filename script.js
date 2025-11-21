// ========================
// SELECTORS
// ========================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const typedElement = document.getElementById('typed');
const projectsGrid = document.getElementById('projects-grid');
const skillsList = document.getElementById('skills-list');

// PREVENT ANY ACCIDENTAL RENDERING IN HERO SECTION
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('#home');
    if (hero) hero.innerHTML = hero.innerHTML;  // forces clean state
    renderProjects();   // safe render
    renderSkills();
});

// ========================
// DATA
// ========================
const projects = [
    {
        title: "Tic-Tac-Toe",
        desc: "Interactive game with winning logic & clean UI",
        img: "ttt.png",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://tic-tac-toe-livid-psi.vercel.app/",
        github: "https://github.com/crazylogic03/Tic-Tac-Toe"
    },
    {
        title: "Famous Inventors",
        desc: "Static showcase of inventors using pure HTML/CSS",
        img: "logo.png",
        tech: ["HTML", "CSS"],
        live: "https://famousinventors.netlify.app/",
        github: "https://github.com/GUNAVANTH333/Famous-Inventors-S-W"
    },
    {
        title: "Portfolio Website",
        desc: "My first responsive portfolio (this one evolved from here!)",
        img: "por.jpg",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://my-portfolio-crazylogic03s-projects.vercel.app/",
        github: "#"
    },
    {
        title: "Waste Management Automation",
        desc: "Hackathon winner — Smart waste analytics system",
        img: "waste.webp",
        tech: ["React", "JavaScript", "CSS"],
        live: "https://team-senorita.vercel.app/",
        github: "#"
    },
    {
        title: "MasterMind Game",
        desc: "Classic code-breaking game with visual feedback",
        img: "mmlogo.png",
        tech: ["React", "JavaScript"],
        live: "https://mastermind-game-gray.vercel.app/",
        github: "https://github.com/crazylogic03/mastermind-game"
    },
    {
        title: "Travel Bucket List",
        desc: "Interactive map-based travel planner with Unsplash API",
        img: "looo.jpeg",
        tech: ["React", "Tailwind", "Leaflet", "API"],
        live: "https://travel-bucket-pied.vercel.app/",
        github: "https://github.com/crazylogic03/TravelBucket"
    },
    {
        title: "ScreenTime Recorder",
        desc: "Real-time desktop usage tracker with analytics",
        img: "str.png",
        tech: ["React", "Node.js", "MongoDB"],
        live: "https://screentime-recoder.vercel.app/",
        github: "https://github.com/crazylogic03/Screentime-recoder"
    },
    {
        title: "EmptyBagss [Upcoming]",
        desc: "AI-powered personalized travel planner",
        img: "empty.jpg",
        tech: ["React", "Node.js", "AI"],
        github: "https://github.com/crazylogic03/EmptyBagss",
        upcoming: true
    }
];


// ========================
// TYPED EFFECT — FINAL FIX (WORKS 100% WITH YOUR CURRENT HTML)
// ========================
// CORRECT TYPED EFFECT — USES YOUR REAL #typed ELEMENT
const roles = ["Full-Stack Developer", "Competitive Programmer", "Open Source Contributor", "Problem Solver", "AI Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!typedElement) return;

    const current = roles[roleIndex];

    if (!isDeleting && charIndex <= current.length) {
        typedElement.textContent = current.substring(0, charIndex);
        charIndex++;
    }
    if (isDeleting && charIndex >= 0) {
        typedElement.textContent = current.substring(0, charIndex);
        charIndex--;
    }

    if (charIndex === current.length + 1) isDeleting = true;
    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeWriter, isDeleting ? 60 : 120);
}


// Start typing
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});
// ========================
// RENDER PROJECTS
// ========================
// ========================
// RENDER PROJECTS – FIXED ICONS + ORIGINAL STYLE
function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = ''; // Clear everything first

    const techIcons = {
        'HTML': 'devicon-html5-plain colored',
        'CSS': 'devicon-css3-plain colored',
        'JavaScript': 'devicon-javascript-plain colored',
        'React': 'devicon-react-original colored',
        'Node.js': 'devicon-nodejs-plain colored',
        'MongoDB': 'devicon-mongodb-plain colored',
        'Tailwind': 'devicon-tailwindcss-plain colored',
        'Leaflet': 'fas fa-map-marked-alt',
        'API': 'fas fa-cloud',
        'AI': 'fas fa-brain'
    };

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
        <div class="project-image">
          <img src="${p.img}" alt="${p.title}" loading="lazy">
        </div>
        <div class="project-content">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span class="tech-tag"><i class="${techIcons[t] || 'fas fa-code'}"></i> ${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            ${p.live ? `<a href="${p.live}" target="_blank" class="btn-live"><i class="fas fa-rocket"></i> Live Demo</a>` : ''}
            <a href="${p.github}" target="_blank" class="btn-github">
              <i class="fab fa-github"></i> View Code
            </a>
          </div>
        </div>
      `;

        projectsGrid.appendChild(card);
    });
}
// SKILLS – GROUPED + ICONS + % + ANIMATED BARS (PERFECT)
const skillGroups = [
    {
        category: "Computer Languages",
        skills: [
            { name: "JavaScript", level: 92, icon: "devicon-javascript-plain colored" },
            // { name: "TypeScript", level: 85, icon: "devicon-typescript-plain colored" },
            { name: "Python", level: 88, icon: "devicon-python-plain colored" },
            { name: "SQL", level: 82, icon: "devicon-mysql-plain colored" },
            { name: "HTML", level: 95, icon: "devicon-html5-plain colored" },
            { name: "CSS", level: 90, icon: "devicon-css3-plain colored" },
            { name: "NoSQL", level: 80, icon: "devicon-mongodb-plain colored" }
        ]
    },
    {
        category: "Data Tools",
        skills: [
            { name: "Pandas", level: 82, icon: "devicon-python-plain colored" },
            { name: "NumPy", level: 80, icon: "devicon-python-plain colored" },
            { name: "Matplotlib", level: 75, icon: "devicon-python-plain colored" }
        ]
    },
    {
        category: "Software Packages",
        skills: [
            { name: "React", level: 90, icon: "devicon-react-original colored" },
            { name: "Next.js", level: 82, icon: "devicon-nextjs-original" },
            { name: "Node.js", level: 85, icon: "devicon-nodejs-plain colored" },
            { name: "Express.js", level: 80, icon: "devicon-express-original" },
            { name: "MongoDB", level: 80, icon: "devicon-mongodb-plain colored" },
            { name: "MySQL", level: 82, icon: "devicon-mysql-plain colored" },
            { name: "Prisma ORM", level: 78, icon: "fas fa-database" },
            { name: "Tailwind CSS", level: 88, icon: "devicon-tailwindcss-plain colored" },
            { name: "Bootstrap", level: 85, icon: "devicon-bootstrap-plain colored" },
            { name: "Chart.js", level: 82, icon: "fas fa-chart-line" },
            { name: "Figma", level: 85, icon: "devicon-figma-plain colored" },
            { name: "Linux", level: 80, icon: "devicon-linux-plain" },
            { name: "Excel", level: 90, icon: "fas fa-file-excel" }
        ]
    },
    {
        category: "Additional Courses",
        skills: [
            { name: "Data Structures & Algorithms", level: 88, icon: "fas fa-code-branch" }
        ]
    },
    {
        category: "Soft Skills",
        skills: [
            { name: "Leadership", level: 90, icon: "fas fa-chess-king" },
            { name: "Teamwork", level: 92, icon: "fas fa-users" },
            { name: "Communication", level: 90, icon: "fas fa-comments" },
            { name: "Problem Solving", level: 95, icon: "fas fa-lightbulb" },
            { name: "Critical Thinking", level: 88, icon: "fas fa-brain" },
            { name: "Creativity", level: 87, icon: "fas fa-palette" },
            { name: "Decision Making", level: 85, icon: "fas fa-balance-scale" },
            { name: "Presentation Skills", level: 88, icon: "fas fa-chalkboard-teacher" }
        ]
    },
    {
        category: "Others",
        skills: [
            { name: "Generative AI", level: 85, icon: "fas fa-robot" },
            { name: "OpenAI API", level: 82, icon: "fas fa-brain" },
            { name: "LLM", level: 80, icon: "fas fa-microchip" },
            { name: "OAuth 2.0", level: 85, icon: "fas fa-shield-alt" },
            { name: "Git & GitHub", level: 92, icon: "devicon-git-plain colored" },
            { name: "Postman", level: 88, icon: "fas fa-vial" },
            { name: "Bash Scripting", level: 75, icon: "fas fa-terminal" },
            { name: "Canva", level: 90, icon: "fas fa-palette" },
            { name: "Microsoft Office", level: 95, icon: "fas fa-file-word" }
        ]
    }
];

function renderSkills() {
    skillsList.innerHTML = skillGroups.map(group => `
      <div class="skill-group">
        <h3 class="skill-category">
          ${group.category}
        </h3>
        <div class="horizontal-skills">
          ${group.skills.map(skill => `
            <div class="h-skill">
              <div class="h-skill-info">
                <i class="${skill.icon}"></i>
                <span class="h-skill-name">${skill.name}</span>
                <span class="h-skill-percent">${skill.level}%</span>
              </div>
              <div class="h-skill-bar">
                <div class="h-skill-fill" style="width: 0%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll('.h-skill-fill').forEach((bar, i) => {
                const width = bar.parentElement.previousElementSibling.querySelector('.h-skill-percent').textContent;
                setTimeout(() => bar.style.width = width, i * 70);
            });
        }
    }, { threshold: 0.3 });

    observer.observe(document.getElementById('skills'));
}
// ========================
// NAVBAR ACTIVE STATE
// ========================
window.addEventListener('scroll', () => {
    let current = 'home';
    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

    sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (el && el.getBoundingClientRect().top <= 100) {
            current = sec;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    // Navbar background on scroll
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ========================
// INITIALIZE
// ========================
document.addEventListener('DOMContentLoaded', () => {
    type();
    renderProjects();
    renderSkills();
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
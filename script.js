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
    },
    {
        title: "Project Management App",
        desc: "A full-stack project management application with real-time collaboration, secure authentication, and an intuitive drag-and-drop workflow.",
        img: "empty.jpg",
        tech: [
            "React",
            "Tailwind",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "Socket.io",
            "JWT",
            "OAuth"
        ],
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
function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    const techIcons = {
        'HTML': 'devicon-html5-plain colored',
        'CSS': 'devicon-css3-plain colored',
        'JavaScript': 'devicon-javascript-plain colored',
        'React': 'devicon-react-original colored',
        'Node.js': 'devicon-nodejs-plain colored',
        'MongoDB': 'devicon-mongodb-plain colored',
        'Tailwind': 'devicon-tailwindcss-plain colored',

        // 🔽 ADD THESE
        'Express': 'devicon-express-original',
        'PostgreSQL': 'devicon-postgresql-plain colored',
        'Prisma': 'devicon-prisma-original',
        'Socket.io': 'devicon-socketio-original',
        'JWT': 'fas fa-key',
        'OAuth': 'fas fa-shield-alt',

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

const skillGroups = [
    {
        category: "Computer Languages",
        skills: [
            { name: "JavaScript", level: 92, icon: "devicon-javascript-plain colored" },
            { name: "TypeScript", level: 50, icon: "devicon-typescript-plain colored" },
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
            { name: "React", icon: "devicon-react-original colored" },
            { name: "Next.js", icon: "devicon-nextjs-original" },
            { name: "Node.js", icon: "devicon-nodejs-plain colored" },
            { name: "Express.js", icon: "devicon-express-original" },
            { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
            { name: "MySQL", icon: "devicon-mysql-plain colored" },
            { name: "Prisma ORM", icon: "fas fa-database" },
            { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
            { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
            { name: "Chart.js", icon: "fas fa-chart-line" },
            { name: "Figma", icon: "devicon-figma-plain colored" },
            { name: "Linux", icon: "devicon-linux-plain" },
            { name: "Excel", icon: "fas fa-file-excel" }
        ]
    },
    {
        category: "Additional Courses",
        skills: [
            { name: "Data Structures & Algorithms", icon: "fas fa-code-branch" }
        ]
    },
    {
        category: "Soft Skills",
        skills: [
            { name: "Leadership", icon: "fas fa-chess-king" },
            { name: "Teamwork", icon: "fas fa-users" },
            { name: "Communication", icon: "fas fa-comments" },
            { name: "Problem Solving", icon: "fas fa-lightbulb" },
            { name: "Critical Thinking", icon: "fas fa-brain" },
            { name: "Creativity", icon: "fas fa-palette" },
            { name: "Decision Making", icon: "fas fa-balance-scale" },
            { name: "Presentation Skills", icon: "fas fa-chalkboard-teacher" }
        ]
    },
    {
        category: "Others",
        skills: [
            { name: "Generative AI", icon: "fas fa-robot" },
            { name: "OpenAI API", icon: "fas fa-brain" },
            { name: "LLM", icon: "fas fa-microchip" },
            { name: "OAuth 2.0", icon: "fas fa-shield-alt" },
            { name: "Git & GitHub", icon: "devicon-git-plain colored" },
            { name: "Postman", icon: "fas fa-vial" },
            { name: "Bash Scripting", icon: "fas fa-terminal" },
            { name: "Canva", icon: "fas fa-palette" },
            { name: "Microsoft Office", icon: "fas fa-file-word" }
        ]
    }
];


function renderSkills() {
    skillsList.innerHTML = skillGroups.map(group => {
        const hasLevels = group.skills.some(skill => skill.level !== undefined);

        return `
          <div class="skill-group">
            <h3 class="skill-category">${group.category}</h3>

            <div class="horizontal-skills ${hasLevels ? '' : 'icon-grid'}">
              ${group.skills.map(skill =>
            skill.level !== undefined
                ? `
                    <div class="h-skill">
                      <div class="h-skill-info">
                        <i class="${skill.icon}"></i>
                        <span class="h-skill-percent">${skill.level}%</span>
                      </div>
                      <div class="h-skill-bar">
                        <div class="h-skill-fill" style="width: 0%"></div>
                      </div>
                    </div>
                  `
                : `
                    <div class="icon-box">
                      <i class="${skill.icon}"></i>
                    </div>
                  `
        ).join('')}
            </div>
          </div>
        `;
    }).join('');

    // Animate bars ONLY for skills with levels
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            document.querySelectorAll('.h-skill').forEach((skill, i) => {
                const percent = skill.querySelector('.h-skill-percent')?.textContent;
                const bar = skill.querySelector('.h-skill-fill');
                if (percent && bar) {
                    setTimeout(() => {
                        bar.style.width = percent;
                    }, i * 70);
                }
            });
        }
    }, { threshold: 0.3 });

    observer.observe(document.getElementById('skills'));
}

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
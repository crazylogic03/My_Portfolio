// ===================================================
// THRISHUL OS — Desktop Interface Script
// ===================================================

// ========================================
// DATA
// ========================================
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
        desc: "Full-stack project management with real-time collaboration",
        img: "empty.jpg",
        tech: ["React", "Tailwind", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.io", "JWT", "OAuth"],
        github: "https://github.com/crazylogic03/EmptyBagss",
        live: "https://screentime-recoder.vercel.app/",
        upcoming: true
    },
    {
        title: "GLOBAL PUBLIC HEALTH INDICATORS",
        desc: "ML Project — analyzed 4+ datasets for major health trends",
        img: "GPHI.jpg",
        tech: ["Python", "ML Algorithms", "EDA"],
        github: "https://github.com/crazylogic03/PVT"
    },
    {
        title: "AI-Study Coach",
        desc: "Personalized AI mentor that adapts to your learning pace",
        img: "ai_study.png",
        tech: ["Python", "ML Algorithms", "EDA"],
        github: "https://github.com/crazylogic03/VectorSpace",
        live: "https://screentime-recoder.vercel.app/"
    },
    {
        title: "AI-Summarizer",
        desc: "Intelligent text summarization powered by Groq API",
        img: "ai_summarizer.png",
        tech: ["Python", "StreamLit", "GROQ API"],
        github: "https://github.com/crazylogic03/AI-Summarizer",
        live: "https://crazylogic03-ai-summarizer-app-nhqsac.streamlit.app/"
    },
    {
        title: "Data Analysis",
        desc: "Analyzed Lady Gaga lyrics data",
        tech: ["Python", "EDA"],
        github: "https://github.com/crazylogic03/Pirates_of_the_Caribbean."
    }
];

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

const techIcons = {
    'HTML': 'devicon-html5-plain colored',
    'CSS': 'devicon-css3-plain colored',
    'JavaScript': 'devicon-javascript-plain colored',
    'React': 'devicon-react-original colored',
    'Node.js': 'devicon-nodejs-plain colored',
    'MongoDB': 'devicon-mongodb-plain colored',
    'Tailwind': 'devicon-tailwindcss-plain colored',
    'Express': 'devicon-express-original',
    'PostgreSQL': 'devicon-postgresql-plain colored',
    'Prisma': 'devicon-prisma-original',
    'Socket.io': 'devicon-socketio-original',
    'JWT': 'fas fa-key',
    'OAuth': 'fas fa-shield-alt',
    'Leaflet': 'fas fa-map-marked-alt',
    'API': 'fas fa-cloud',
    'AI': 'fas fa-brain',
    'Python': 'devicon-python-plain colored',
    'ML Algorithms': 'fas fa-cogs',
    'EDA': 'fas fa-chart-pie',
    'StreamLit': 'fas fa-stream',
    'GROQ API': 'fas fa-bolt'
};

// ========================================
// STATE
// ========================================
let zIndex = 100;
let openWindows = {};
let dragState = null;
let wallpaperIndex = 0;
const wallpapers = ['', 'wallpaper-1', 'wallpaper-2'];

// Window title icons
const windowIcons = {
    about: 'fas fa-user-circle',
    projects: 'fas fa-folder-open',
    skills: 'fas fa-chart-bar',
    experience: 'fas fa-briefcase',
    contact: 'fas fa-envelope',
    resume: 'fas fa-file-pdf',
    github: 'fab fa-github',
    linkedin: 'fab fa-linkedin-in',
    leetcode: 'fas fa-code',
    codeforces: 'fas fa-chess-knight',
    codechef: 'fas fa-utensils',
    terminal: 'fas fa-terminal',
    education: 'fas fa-graduation-cap',
    achievements: 'fas fa-trophy',

};

const windowNames = {
    about: 'About Me',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact Me',
    resume: 'Resume.pdf',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    leetcode: 'LeetCode',
    codeforces: 'CodeForces',
    codechef: 'CodeChef',
    terminal: 'Terminal',
    education: 'Education',
    achievements: 'Achievements',

};

// ========================================
// BOOT SEQUENCE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.getElementById('desktop');
    const bootScreen = document.getElementById('boot-screen');

    // Render content
    renderProjects();
    renderSkills();
    startClock();
    initContactForm();

    initTheme();
    initVisitorCounter();

    // Boot -> Desktop transition
    setTimeout(() => {
        desktop.classList.remove('hidden');
        setTimeout(() => {
            if (bootScreen) bootScreen.remove();
        }, 600);
    }, 3200);
});

// ========================================
// WINDOW MANAGEMENT
// ========================================
function openWindow(id) {
    const win = document.getElementById(`window-${id}`);
    if (!win) return;

    // If already open but minimized, restore it
    if (openWindows[id] && win.style.display === 'none') {
        win.style.display = '';
        bringToFront(win);
        updateTaskbar();
        return;
    }

    // If already open, just bring to front
    if (openWindows[id]) {
        bringToFront(win);
        return;
    }

    // Position new window with offset
    const count = Object.keys(openWindows).length;
    const offsetX = 180 + (count % 5) * 40;
    const offsetY = 40 + (count % 5) * 35;
    win.style.left = offsetX + 'px';
    win.style.top = offsetY + 'px';
    win.style.display = '';
    win.classList.remove('closing', 'maximized');
    win.classList.add('opening');

    bringToFront(win);
    openWindows[id] = true;
    updateTaskbar();

    // Animate skill bars if skills window
    if (id === 'skills') {
        setTimeout(animateSkillBars, 300);
    }

    setTimeout(() => win.classList.remove('opening'), 250);
}

function closeWindow(id) {
    const win = document.getElementById(`window-${id}`);
    if (!win) return;

    win.classList.add('closing');
    setTimeout(() => {
        win.style.display = 'none';
        win.classList.remove('closing', 'maximized');
        delete openWindows[id];
        updateTaskbar();
    }, 200);
}

function minimizeWindow(id) {
    const win = document.getElementById(`window-${id}`);
    if (!win) return;

    win.classList.add('closing');
    setTimeout(() => {
        win.style.display = 'none';
        win.classList.remove('closing');
        updateTaskbar();
    }, 200);
}

function maximizeWindow(id) {
    const win = document.getElementById(`window-${id}`);
    if (!win) return;

    if (win.classList.contains('maximized')) {
        win.classList.remove('maximized');
        // Restore previous position
        if (win._prevPos) {
            win.style.left = win._prevPos.left;
            win.style.top = win._prevPos.top;
            win.style.width = win._prevPos.width;
            win.style.height = win._prevPos.height;
        }
    } else {
        // Save current position
        win._prevPos = {
            left: win.style.left,
            top: win.style.top,
            width: win.style.width,
            height: win.style.height
        };
        win.classList.add('maximized');
    }
    bringToFront(win);
}

function bringToFront(win) {
    zIndex++;
    win.style.zIndex = zIndex;
}

// ========================================
// DRAGGING
// ========================================
function startDrag(e, winId) {
    const win = document.getElementById(winId);
    if (!win || win.classList.contains('maximized')) return;

    e.preventDefault();
    bringToFront(win);

    const rect = win.getBoundingClientRect();
    dragState = {
        el: win,
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top
    };
}

document.addEventListener('mousemove', (e) => {
    if (!dragState) return;
    const { el, offsetX, offsetY } = dragState;
    const x = Math.max(0, Math.min(e.clientX - offsetX, window.innerWidth - 100));
    const y = Math.max(0, Math.min(e.clientY - offsetY, window.innerHeight - 100));
    el.style.left = x + 'px';
    el.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    dragState = null;
});

// ========================================
// ThrishulOS v2.1 - "The Agency Update"
// Last Updated: March 31, 2026
// ========================================
function updateTaskbar() {
    const container = document.getElementById('taskbar-apps');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(openWindows).forEach(id => {
        const win = document.getElementById(`window-${id}`);
        const isVisible = win && win.style.display !== 'none';
        const btn = document.createElement('div');
        btn.className = `taskbar-app${isVisible ? ' active' : ''}`;
        btn.innerHTML = `<i class="${windowIcons[id] || 'fas fa-window-maximize'}"></i> ${windowNames[id] || id}`;
        btn.onclick = () => {
            if (win.style.display === 'none') {
                win.style.display = '';
                win.classList.remove('closing');
                bringToFront(win);
            } else {
                minimizeWindow(id);
            }
            updateTaskbar();
        };
        container.appendChild(btn);
    });
}

// ========================================
// CLOCK
// ========================================
function startClock() {
    function update() {
        const now = new Date();
        const h = now.getHours().toString().padStart(2, '0');
        const m = now.getMinutes().toString().padStart(2, '0');
        const el = document.getElementById('taskbar-clock');
        if (el) {
            el.innerHTML = `${h}:${m}<br><span style="font-size:0.65rem;color:#8892a4">${now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</span>`;
        }
    }
    update();
    setInterval(update, 10000);
}

// ========================================
// START MENU
// ========================================
function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    if (!menu) return;
    menu.classList.toggle('hidden');
}

// Close start menu on outside click
document.addEventListener('click', (e) => {
    const menu = document.getElementById('start-menu');
    const btn = document.getElementById('start-btn');
    if (menu && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// ========================================
// CONTEXT MENU
// ========================================
document.addEventListener('contextmenu', (e) => {
    // Only show on desktop background, not within windows/icons
    const isDesktop = e.target.id === 'desktop' || e.target === document.body;
    const ctxMenu = document.getElementById('context-menu');

    if (isDesktop && ctxMenu) {
        e.preventDefault();
        ctxMenu.style.display = 'block';
        ctxMenu.style.left = Math.min(e.clientX, window.innerWidth - 220) + 'px';
        ctxMenu.style.top = Math.min(e.clientY, window.innerHeight - 250) + 'px';
    }
});

document.addEventListener('click', () => {
    const ctxMenu = document.getElementById('context-menu');
    if (ctxMenu) ctxMenu.style.display = 'none';
});

// ========================================
// WALLPAPER TOGGLE
// ========================================
function toggleTheme() {
    const desktop = document.getElementById('desktop');
    wallpaperIndex = (wallpaperIndex + 1) % wallpapers.length;
    desktop.className = wallpapers[wallpaperIndex] || '';
}

// ========================================
// RENDER PROJECTS
// ========================================
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const imgSrc = p.img || 'empty.jpg';

        card.innerHTML = `
            <div class="project-image">
                <img src="${imgSrc}" alt="${p.title}" loading="lazy" onerror="this.style.display='none'">
            </div>
            <div class="project-content">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="project-tech">
                    ${p.tech.map(t => `<span class="tech-tag"><i class="${techIcons[t] || 'fas fa-code'}"></i> ${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                    ${p.live ? `<a href="${p.live}" target="_blank" class="btn-live"><i class="fas fa-rocket"></i> Live</a>` : ''}
                    <a href="${p.github}" target="_blank" class="btn-github"><i class="fab fa-github"></i> Code</a>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ========================================
// RENDER SKILLS
// ========================================
function renderSkills() {
    const container = document.getElementById('skills-list');
    if (!container) return;

    container.innerHTML = skillGroups.map(group => {
        const hasLevels = group.skills.some(s => s.level !== undefined);

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
                                        <span class="h-skill-name">${skill.name}</span>
                                        <span class="h-skill-percent">${skill.level}%</span>
                                    </div>
                                    <div class="h-skill-bar">
                                        <div class="h-skill-fill" data-level="${skill.level}" style="width: 0%"></div>
                                    </div>
                                </div>
                            `
                            : `
                                <div class="icon-box" title="${skill.name}">
                                    <i class="${skill.icon}"></i>
                                </div>
                            `
                    ).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function animateSkillBars() {
    document.querySelectorAll('.h-skill-fill').forEach((bar, i) => {
        const level = bar.getAttribute('data-level');
        if (level) {
            setTimeout(() => {
                bar.style.width = level + '%';
            }, i * 60);
        }
    });
}

// ========================================
// ICON SELECTION
// ========================================
document.addEventListener('click', (e) => {
    // Deselect all icons
    document.querySelectorAll('.desktop-icon').forEach(ic => ic.classList.remove('selected'));

    // Select clicked icon
    const icon = e.target.closest('.desktop-icon');
    if (icon) {
        icon.classList.add('selected');
    }
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
document.addEventListener('keydown', (e) => {
    // Escape to close topmost window
    if (e.key === 'Escape') {
        const windows = Object.keys(openWindows);
        if (windows.length > 0) {
            const topWindow = windows[windows.length - 1];
            closeWindow(topWindow);
        }
        // Also close start menu
        const menu = document.getElementById('start-menu');
        if (menu) menu.classList.add('hidden');
    }
});
// drag handler update
// render projects
// skills animation
// wallpaper toggle
// codechef window support

// ========================================
// PARTICLE SYSTEM
// ========================================
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 50;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 2 + 0.5;
            this.alpha = Math.random() * 0.4 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 180, 216, ${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 180, 216, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        drawLines();
        requestAnimationFrame(animate);
    }
    animate();
}

// Initialize particles after boot
setTimeout(initParticles, 3500);

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(title, message, icon = 'fas fa-info-circle', duration = 4000) {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    toast.innerHTML = `
        <div class="notif-icon"><i class="${icon}"></i></div>
        <div class="notif-content">
            <strong>${title}</strong>
            <p>${message}</p>
        </div>
        <button class="notif-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;

    container.appendChild(toast);

    // Auto-remove after duration
    setTimeout(() => {
        toast.classList.add('notif-exit');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Show welcome notification after boot
setTimeout(() => {
    showNotification(
        'Welcome to ThrishulOS',
        'Double-click icons to explore. Right-click for options.',
        'fas fa-desktop',
        5000
    );
}, 4000);


// ========================================
// INTERACTIVE TERMINAL
// ========================================
const terminalCommands = {
    help: () => [
        '<span class="term-accent">Available commands:</span>',
        '  <span class="term-cmd">about</span>      — Learn about me',
        '  <span class="term-cmd">skills</span>     — View my skills',
        '  <span class="term-cmd">projects</span>   — Browse my projects',
        '  <span class="term-cmd">contact</span>    — Get my contact info',
        '  <span class="term-cmd">experience</span> — View work experience',
        '  <span class="term-cmd">whoami</span>     — Who am I?',
        '  <span class="term-cmd">date</span>       — Current date & time',
        '  <span class="term-cmd">uname</span>      — System info',
        '  <span class="term-cmd">social</span>     — Social media links',
        '  <span class="term-cmd">open [app]</span> — Open a window (about, projects, skills, etc.)',
        '  <span class="term-cmd">clear</span>      — Clear the terminal',
        '  <span class="term-cmd">neofetch</span>   — Display system info',
        '  <span class="term-cmd">history</span>    — View command history',
    ],
    about: () => [
        '<span class="term-accent">╔══════════════════════════════════════╗</span>',
        '<span class="term-accent">║</span>  Bheemanaboyani Sai Thrishul         <span class="term-accent">║</span>',
        '<span class="term-accent">╚══════════════════════════════════════╝</span>',
        '',
        '  Full-Stack Developer [MERN Stack]',
        '  Competitive Programmer & Problem Solver',
        '  Frontend Developer Intern @ TechQRT Pvt Ltd',
        '  Student @ Newton School of Technology',
        '  📍 Hyderabad, India',
    ],
    skills: () => [
        '<span class="term-accent">Languages:</span>  JavaScript, TypeScript, Python, SQL, HTML, CSS',
        '<span class="term-accent">Frontend:</span>   React, Next.js, Tailwind CSS, Bootstrap',
        '<span class="term-accent">Backend:</span>    Node.js, Express.js, Prisma ORM',
        '<span class="term-accent">Database:</span>   MongoDB, MySQL, PostgreSQL',
        '<span class="term-accent">Tools:</span>      Git, Postman, Figma, Linux, Docker',
        '<span class="term-accent">AI/ML:</span>      OpenAI API, LLM, Generative AI',
    ],
    projects: () => {
        return projects.slice(0, 6).map(p =>
            `  <span class="term-cmd">${p.title}</span> — ${p.desc}`
        ).concat(['', '  Type <span class="term-cmd">open projects</span> to see all projects.']);
    },
    contact: () => [
        '<span class="term-accent">📧 Email:</span>   thrishul.professional@gmail.com',
        '<span class="term-accent">📱 Phone:</span>   +91 9391780057',
        '<span class="term-accent">📍 Location:</span> Hyderabad, India',
        '',
        '  Type <span class="term-cmd">open contact</span> to send a message.',
    ],
    experience: () => [
        '<span class="term-accent">💼 Frontend Developer Intern</span> — TechQRT Pvt Ltd',
        '   June 2025 – Present',
        '   Building responsive web apps with React',
        '',
        '<span class="term-accent">👥 Student Developer Club</span> — NST',
        '   2024 – Present',
        '   Leading workshops & mentoring juniors',
    ],
    whoami: () => ['thrishul — Full-Stack Developer & Competitive Programmer'],
    date: () => [new Date().toString()],
    uname: () => ['ThrishulOS v2.0 — Portfolio Desktop Environment (x86_64)'],
    social: () => [
        '<span class="term-accent">GitHub:</span>     https://github.com/crazylogic03',
        '<span class="term-accent">LinkedIn:</span>   https://linkedin.com/in/sai-thrishul-3a4077329',
        '<span class="term-accent">LeetCode:</span>   https://leetcode.com/u/qfFJipIODP/',
        '<span class="term-accent">CodeForces:</span> https://codeforces.com/profile/crazylogic03',
        '<span class="term-accent">CodeChef:</span>   https://www.codechef.com/users/crazylogic03',
    ],
    neofetch: () => [
        '<span class="term-accent">       ████████       </span>   <span class="term-cmd">thrishul</span>@<span class="term-cmd">portfolio</span>',
        '<span class="term-accent">     ██        ██     </span>   ────────────────────',
        '<span class="term-accent">   ██    ████    ██   </span>   <span class="term-accent">OS:</span>      ThrishulOS v2.0',
        '<span class="term-accent">  ██   ██████   ██  </span>   <span class="term-accent">Host:</span>    Portfolio Desktop',
        '<span class="term-accent">  ██   ██████   ██  </span>   <span class="term-accent">Kernel:</span>  JavaScript ES6+',
        '<span class="term-accent">   ██    ████    ██   </span>   <span class="term-accent">Shell:</span>   ThrishulTerm 1.0',
        '<span class="term-accent">     ██        ██     </span>   <span class="term-accent">DE:</span>      Custom CSS Desktop',
        '<span class="term-accent">       ████████       </span>   <span class="term-accent">Theme:</span>   Dark Mode [Cyan]',
        '                           <span class="term-accent">Stack:</span>   MERN',
        '                           <span class="term-accent">Uptime:</span>  Since 2024',
    ],
};

let terminalHistory = [];
let historyIndex = -1;

function initTerminal() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    if (!input || !output) return;

    // Welcome message
    output.innerHTML = [
        '<span class="term-accent">Welcome to ThrishulOS Terminal v2.0</span>',
        'Type <span class="term-cmd">help</span> to see available commands.',
        ''
    ].map(l => `<div class="term-line">${l}</div>`).join('');

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.trim().toLowerCase();
            if (!cmd) return;

            terminalHistory.push(cmd);
            historyIndex = terminalHistory.length;

            // Echo the command
            output.innerHTML += `<div class="term-line"><span class="terminal-prompt">thrishul@os:~$</span> ${cmd}</div>`;

            if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'history') {
                const lines = terminalHistory.map((c, i) => `  ${i + 1}  ${c}`);
                output.innerHTML += lines.map(l => `<div class="term-line">${l}</div>`).join('');
            } else if (cmd.startsWith('open ')) {
                const app = cmd.split(' ')[1];
                if (windowNames[app]) {
                    openWindow(app);
                    output.innerHTML += `<div class="term-line"><span class="term-accent">Opening ${windowNames[app]}...</span></div>`;
                } else {
                    output.innerHTML += `<div class="term-line term-error">Unknown app: ${app}. Available: ${Object.keys(windowNames).join(', ')}</div>`;
                }
            } else if (terminalCommands[cmd]) {
                const lines = terminalCommands[cmd]();
                output.innerHTML += lines.map(l => `<div class="term-line">${l}</div>`).join('');
            } else {
                output.innerHTML += `<div class="term-line term-error">Command not found: ${cmd}. Type <span class="term-cmd">help</span> for available commands.</div>`;
            }

            output.innerHTML += '<div class="term-line">&nbsp;</div>';
            input.value = '';
            output.scrollTop = output.scrollHeight;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = terminalHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < terminalHistory.length - 1) {
                historyIndex++;
                input.value = terminalHistory[historyIndex];
            } else {
                historyIndex = terminalHistory.length;
                input.value = '';
            }
        }
    });
}

// Auto-focus terminal input on window click
document.addEventListener('click', (e) => {
    if (e.target.closest('#window-terminal')) {
        const input = document.getElementById('terminal-input');
        if (input) input.focus();
    }
});

// Initialize terminal when opened
const origOpenWindow = openWindow;
openWindow = function(id) {
    origOpenWindow(id);
    if (id === 'terminal') {
        setTimeout(initTerminal, 100);
    }
};

// ========================================
// EMAILJS CONTACT FORM
// ========================================
function initContactForm() {
    // Initialize EmailJS with your public key (safe to push to public repo)
    emailjs.init('qxHwLADmpVLrC2ZX0');

    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('contact-submit');
        const statusDiv = document.getElementById('contact-status');
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        // Loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        statusDiv.className = 'contact-status';
        statusDiv.innerHTML = '';

        // Send via EmailJS (Service ID & Template ID are safe to push)
        emailjs.send('service_le2gibd', 'template_wddueeh', {
            from_name: name,
            reply_to: email,
            message: message,
            to_email: 'thrishul.professional@gmail.com'
        }).then(
            function() {
                // Success
                statusDiv.className = 'contact-status success';
                statusDiv.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
                form.reset();
                showNotification(
                    'Message Sent!',
                    `Thanks ${name}! I'll get back to you soon.`,
                    'fas fa-envelope-open',
                    5000
                );
            },
            function(error) {
                // Error fallback — open mailto link
                console.error('EmailJS Error:', error);
                statusDiv.className = 'contact-status error';
                statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Service unavailable. Opening email client...';
                
                // Fallback to mailto
                setTimeout(() => {
                    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
                    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                    window.open(`mailto:thrishul.professional@gmail.com?subject=${subject}&body=${body}`, '_blank');
                }, 1500);
            }
        ).finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        });
    });
}





// ========================================
// THEME MANAGEMENT
// ========================================
function initTheme() {
    const savedTheme = localStorage.getItem('thrishul_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

function toggleThemeMode() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    localStorage.setItem('thrishul_theme', isLight ? 'light' : 'dark');
    
    if (icon) {
        if (isLight) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            showNotification('Mode Switched', 'Light mode activated.', 'fas fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            showNotification('Mode Switched', 'Dark mode activated.', 'fas fa-moon');
        }
    }
}

// ========================================
// VISITOR COUNTER LOGIC
// ========================================
function initVisitorCounter() {
    const visitorSpan = document.getElementById('visitor-count');
    if (!visitorSpan) return;

    let count = parseInt(localStorage.getItem('thrishul_visits')) || 432; // Mock start
    if (!sessionStorage.getItem('thrishul_session_init')) {
        count++;
        localStorage.setItem('thrishul_visits', count);
        sessionStorage.setItem('thrishul_session_init', 'true');
    }

    visitorSpan.innerText = count.toLocaleString();
}

// ========================================
// SYSTEM SOUNDS LOGIC
// ========================================
let soundEnabled = true;

function toggleSystemSounds() {
    soundEnabled = !soundEnabled;
    const soundIcon = document.getElementById('sound-icon');
    if (soundIcon) {
        soundIcon.className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    }
    showNotification('Settings', `System sounds ${soundEnabled ? 'enabled' : 'disabled'}.`, 'fas fa-cog');
}

function playSound(type) {
    if (!soundEnabled) return;
    // Mock play sound — real implementation would use Audio()
    console.log(`Playing sound: ${type}`);
}

const originalOpenWindowFunc = openWindow;
openWindow = function(id) {
    originalOpenWindowFunc(id);
    playSound('open');
};

const originalCloseWindowFunc = closeWindow;
closeWindow = function(id) {
    originalCloseWindowFunc(id);
    playSound('close');
};

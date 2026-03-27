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
    codechef: 'fas fa-utensils'
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
    codechef: 'CodeChef'
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
// TASKBAR
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

// Theme Logic
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

function calculateDynamicStats() {
    const today = new Date();
    
    // 1. Calculate Age (Born 1999-02-15)
    const birthDate = new Date(1999, 1, 15);
    let targetAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        targetAge--;
    }

    // 2. Calculate Experience (Started 2021)
    const startDate = new Date(2021, 0, 1);
    let expYears = today.getFullYear() - startDate.getFullYear();
    if (today.getMonth() < startDate.getMonth()) {
        expYears--;
    }
    
    // 3. Update dictionaries (Age no plus, Exp with plus)
    if (typeof languative !== 'undefined' && languative.dictionaries) {
        Object.keys(languative.dictionaries).forEach(lang => {
            const dict = languative.dictionaries[lang];
            if (dict.aboutMe_main && Array.isArray(dict.aboutMe_main)) {
                dict.aboutMe_main[1] = targetAge.toString();
                dict.aboutMe_main[3] = expYears.toString() + "+";
            }
        });
    }

    // 4. Render
    const aboutText = document.getElementById('about-main-text');
    if (aboutText && typeof languative !== 'undefined') {
        const phrase = languative.getPhrase('aboutMe_main');
        if (Array.isArray(phrase) && phrase.length >= 5) {
            aboutText.innerHTML = phrase[0] + 
                                 `<span id="my-age">${sessionStorage.getItem('ageAnimated') ? targetAge : '0'}</span>` + 
                                 phrase[2] + 
                                 `<span class="text-accent">${expYears}+</span>` + 
                                 phrase[4];
            // Trigger local fade-in
            aboutText.classList.remove('fade-in-text');
            void aboutText.offsetWidth; 
            aboutText.classList.add('fade-in-text');
        }
    }

    const ageElement = document.getElementById('my-age');
    if (!ageElement) return;

    if (sessionStorage.getItem('ageAnimated')) {
        ageElement.textContent = targetAge;
    } else {
        let current = 0;
        const animate = () => {
            current++;
            ageElement.textContent = current;
            if (current < targetAge) {
                let delay = 30;
                if (current >= targetAge - 2) delay = 250;
                setTimeout(animate, delay);
            } else {
                sessionStorage.setItem('ageAnimated', '1');
            }
        };
        animate();
    }
}

(function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Switcher
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const theme = document.documentElement.getAttribute('data-theme');
            setTheme(theme === 'dark' ? 'light' : 'dark');
        });
    }

    // 2. Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const path = window.location.pathname;
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (path === href || path.endsWith(href))) {
            link.classList.add('active');
        }
    });

    // 3. Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navLinksContainer.classList.toggle('show');
            mobileMenuBtn.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!navLinksContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinksContainer.classList.remove('show');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // 4. Interactive Background
    if (!('ontouchstart' in window)) {
        const bg = document.createElement('div');
        bg.className = 'interactive-bg';
        document.body.appendChild(bg);
        window.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
            });
        });
    }

    // 5. Stats
    setTimeout(calculateDynamicStats, 50);

    // 6. Typewriter
    const nameElement = document.getElementById('typewriter-name');
    const subtitleElement = document.querySelector('.hero-subtitle');
    
    function typeSubtitle() {
        if (!subtitleElement) return;
        const subText = (typeof languative !== 'undefined' && languative.getPhrase)
            ? languative.getPhrase('hero_subtitle')
            : subtitleElement.textContent.trim();
        
        subtitleElement.textContent = '';
        subtitleElement.style.opacity = '1';
        let subIndex = 0;
        const subTimer = setInterval(() => {
            if (subIndex <= subText.length) {
                subtitleElement.textContent = subText.slice(0, subIndex) + (subIndex < subText.length ? '|' : '');
                subIndex++;
            } else {
                clearInterval(subTimer);
            }
        }, 20);
    }

    function startTypewriter() {
        if (!nameElement || !subtitleElement) return;

        const nameText = (typeof languative !== 'undefined' && languative.getPhrase) 
            ? languative.getPhrase('myname') 
            : 'Velikhanov Teymur';
        
        const displayName = (!nameText || nameText === 'myname') ? 'Velikhanov Teymur' : nameText;
        const nameParts = displayName.split(' ');
        const nameFullHTML = `${nameParts.slice(0, -1).join(' ')}<br><span class="text-accent">${nameParts[nameParts.length - 1]}</span>`;

        if (sessionStorage.getItem('boot')) {
            nameElement.innerHTML = nameFullHTML;
            typeSubtitle();
        } else {
            subtitleElement.style.opacity = '0';
            let charIndex = 0;
            const flatName = displayName; 
            const nameTimer = setInterval(() => {
                if (charIndex <= flatName.length) {
                    let currentHTML = '';
                    const spaceIndex = displayName.lastIndexOf(' ');
                    if (charIndex <= spaceIndex) {
                        currentHTML = flatName.slice(0, charIndex);
                    } else {
                        currentHTML = `${displayName.slice(0, spaceIndex)}<br><span class="text-accent">${flatName.slice(spaceIndex + 1, charIndex)}</span>`;
                    }
                    nameElement.innerHTML = currentHTML + '<span class="typewriter-cursor">|</span>';
                    charIndex++;
                } else {
                    clearInterval(nameTimer);
                    nameElement.innerHTML = nameFullHTML;
                    sessionStorage.setItem('boot', '1');
                    typeSubtitle();
                }
            }, 70);
        }
    }

    setTimeout(() => { if (nameElement) startTypewriter(); }, 150);

    // 7. Lang change
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang && typeof languative !== 'undefined') {
                languative.changeLanguage(lang);
                if (nameElement) {
                    const newName = languative.getPhrase('myname');
                    const parts = newName.split(' ');
                    nameElement.innerHTML = `${parts.slice(0, -1).join(' ')}<br><span class="text-accent">${parts[parts.length - 1]}</span>`;
                }
                typeSubtitle();
                calculateDynamicStats();
            }
        });
    });
});
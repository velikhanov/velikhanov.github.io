// Theme Toggle Logic
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        if (theme === 'light') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }
}

function calculateAge() {
    const ageElement = document.getElementById('my-age');
    if (ageElement) {
        const birthDate = new Date(1999, 1, 15);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageElement.textContent = age;
    }
}

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
    const currentUrl = window.location.href;
    navLinks.forEach(link => {
        if (link.href && currentUrl.split('?')[0].endsWith(link.getAttribute('href'))) {
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

    // 4. Background
    const bg = document.createElement('div');
    bg.className = 'interactive-bg';
    document.body.appendChild(bg);
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const theme = document.documentElement.getAttribute('data-theme');
        const opacity = theme === 'light' ? '0.15' : '0.1';
        requestAnimationFrame(() => {
            bg.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(var(--accent-rgb), ${opacity}), transparent 80%)`;
        });
    });

    // 5. Age - Run immediately and after a short delay to ensure languative finished
    calculateAge();
    setTimeout(calculateAge, 500);

    // 6. Typing Effect
    const typewriterElement = document.getElementById('typewriter-name');
    let isTyping = false;

    function updateHeroName(forceInstant = false) {
        if (!typewriterElement) return;
        
        const getWords = () => {
            const name = (typeof languative !== 'undefined' && languative.getPhrase) 
                ? languative.getPhrase('myname') 
                : 'Velikhanov Teymur';
            const split = name.split(' ');
            if (split.length < 2) return [name, ''];
            return [split.slice(0, split.length - 1).join(' '), split[split.length - 1]];
        };

        const words = getWords();
        const fullContent = `${words[0]}<br><span class="text-accent">${words[1]}</span>`;
        
        if (forceInstant || sessionStorage.getItem('nameAnimated')) {
            typewriterElement.innerHTML = fullContent;
            sessionStorage.setItem('nameAnimated', 'true');
            return;
        }

        if (isTyping) return;
        isTyping = true;

        let charIndex = 0;
        const flatText = words.join(' ');
        
        function type() {
            if (charIndex <= flatText.length) {
                let currentHTML = '';
                const spaceIndex = words[0].length;
                
                if (charIndex <= spaceIndex) {
                    currentHTML = flatText.slice(0, charIndex);
                } else {
                    currentHTML = `${words[0]}<br><span class="text-accent">${flatText.slice(spaceIndex + 1, charIndex)}</span>`;
                }
                
                const isLast = charIndex === flatText.length;
                typewriterElement.innerHTML = currentHTML + (isLast ? '' : '<span class="typewriter-cursor">|</span>');
                
                charIndex++;
                setTimeout(type, 70);
            } else {
                typewriterElement.innerHTML = fullContent;
                sessionStorage.setItem('nameAnimated', 'true');
                isTyping = false;
            }
        }
        
        setTimeout(type, 500);
    }

    updateHeroName();

    // Listen for language changes
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                updateHeroName(true);
                calculateAge();
            }, 150);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // ======== Year ========
    const yrEl = document.getElementById('yr');
    if (yrEl) yrEl.textContent = new Date().getFullYear();

    // ======== Particle Background ========
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };
        const PARTICLE_COUNT = 80;
        const CONNECT_DIST = 120;
        const neonColors = [
            'rgba(0, 240, 255, 0.6)',
            'rgba(180, 0, 255, 0.5)',
            'rgba(255, 0, 229, 0.4)',
            'rgba(57, 255, 20, 0.3)',
        ];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.speedY = (Math.random() - 0.5) * 0.8;
                this.color = neonColors[Math.floor(Math.random() * neonColors.length)];
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse repulsion
                if (mouse.x !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        this.x += dx * force * 0.02;
                        this.y += dy * force * 0.02;
                    }
                }

                // Wrap edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                // Glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECT_DIST) {
                        const opacity = 1 - dist / CONNECT_DIST;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.15})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connectParticles();
            requestAnimationFrame(animateParticles);
        }

        // Track mouse for particles
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        initParticles();
        animateParticles();
    }

    // ======== Mouse Glow Follower ========
    const mouseGlow = document.getElementById('mouseGlow');
    if (mouseGlow) {
        let glowX = 0, glowY = 0;
        let currentX = 0, currentY = 0;

        window.addEventListener('mousemove', (e) => {
            glowX = e.clientX;
            glowY = e.clientY;
        });

        function moveGlow() {
            currentX += (glowX - currentX) * 0.08;
            currentY += (glowY - currentY) * 0.08;
            mouseGlow.style.left = currentX + 'px';
            mouseGlow.style.top = currentY + 'px';
            requestAnimationFrame(moveGlow);
        }
        moveGlow();

        // Hide on touch devices
        if ('ontouchstart' in window) {
            mouseGlow.style.display = 'none';
        }
    }

    // ======== Mobile Menu ========
    const toggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        links.forEach(link => link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = toggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }));
    }

    // ======== Navbar Scroll & Active Link ========
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);

        let current = '';
        sections.forEach(sec => {
            if (scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
        });
        links.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href').substring(1) === current) l.classList.add('active');
        });
    });

    // ======== Scroll To Top ========
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ======== Intersection Observer (fade-up with stagger) ========
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger delay for items inside grids
                const siblings = entry.target.parentElement?.querySelectorAll('.fade-up');
                if (siblings && siblings.length > 1) {
                    const idx = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${idx * 0.1}s`;
                }
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // ======== Skill Filter Tabs ========
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillCards = document.querySelectorAll('.skill-card');

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.dataset.filter;

            skillCards.forEach((card, i) => {
                if (filter === 'all' || card.dataset.category.includes(filter)) {
                    card.classList.remove('hidden');
                    card.style.animation = 'none';
                    card.offsetHeight; // reflow
                    card.style.animation = '';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ======== Resume Tabs ========
    const resumeTabs = document.querySelectorAll('.resume-tab');
    const resumePanels = document.querySelectorAll('.resume-panel');

    resumeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            resumeTabs.forEach(t => t.classList.remove('active'));
            resumePanels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const panel = document.getElementById('panel-' + tab.dataset.tab);
            if (panel) panel.classList.add('active');
        });
    });

    // ======== Card Tilt Effect ========
    const tiltCards = document.querySelectorAll('.skill-card, .project-card, .achieve-card, .contact-card, .cert-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ======== Typing Effect for Hero Role ========
    const roleEl = document.querySelector('.hero-role');
    if (roleEl) {
        const roles = ['Data Science Enthusiast', 'Web Developer', 'Problem Solver', 'Data Analyst'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const cursorEl = roleEl.querySelector('.cursor');

        function typeRole() {
            const current = roles[roleIndex];
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            roleEl.innerHTML = current.substring(0, charIndex);
            if (cursorEl) roleEl.appendChild(cursorEl.cloneNode(true));
            else roleEl.innerHTML += '<span class="cursor">|</span>';

            let speed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === current.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 400;
            }

            setTimeout(typeRole, speed);
        }

        // Start after a short delay
        setTimeout(typeRole, 1500);
    }

});

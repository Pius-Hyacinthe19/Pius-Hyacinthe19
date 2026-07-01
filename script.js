//  SPLASH SCREEN
window.addEventListener("load", () => {
    const splash = document.getElementById("splash-screen");

    setTimeout(() => {
        splash.classList.add("splash-hidden");
    }, 3000);
});



//   COMPTEUR BARRES DE COMPÉTENCES
const skillBars = document.querySelectorAll(".skills");

const animateSkills = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.style.width || getComputedStyle(bar).width;

            bar.style.width = "0%";
            bar.style.transition = "none";

            setTimeout(() => {
                bar.style.transition = "width 1.5s ease-in-out";
                bar.style.width = targetWidth;
            }, 100);

            observer.unobserve(bar);
        }
    });
};

const observer = new IntersectionObserver(animateSkills, {
    threshold: 0.3
});

skillBars.forEach(bar => observer.observe(bar));


// PARTICULES ANIMÉES
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particlesArray = [];
const NUMBER_OF_PARTICLES = 80;

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1.2;
        this.speedY = (Math.random() - 0.5) * 1.2;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width ||
            this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 220, ${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < NUMBER_OF_PARTICLES; i++) {
    particlesArray.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();


// THÈME CLAIR / SOMBRE
function toggleTheme() {
    document.body.classList.toggle("light-mode");
    const btn = document.getElementById("theme-toggle");

    if (document.body.classList.contains("light-mode")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
}

//  COPIER L'EMAIL
const gmailBtn = document.querySelector(".social-btn.gmail");

gmailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("nouhoheflinpiushyacinthe@gmail.com");

    gmailBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    
    setTimeout(() => {
        gmailBtn.innerHTML = '<i class="fa-regular fa-envelope"></i>';
    }, 2000);
});


// =============================
//       CONFETTIS
// =============================
function lancerConfettis() {
    const couleurs = ["#edb809", "#ff7a00", "#ffffff", "#beae53", "#F5F5DC"];
    const nombre = 150;

    for (let i = 0; i < nombre; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];
        confetti.style.width = Math.random() * 10 + 5 + "px";
        confetti.style.height = Math.random() * 10 + 5 + "px";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        // Supprime après l'animation
        setTimeout(() => confetti.remove(), 5000);
    }
}

window.addEventListener("load", lancerConfettis);


// ANIMATION NOM NAVBAR SCROLL
const nomNavbar = document.querySelector(".nav-bar .name");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nomNavbar.classList.add("name-scrolled");
    } else {
        nomNavbar.classList.remove("name-scrolled");
    }
});


// EFFET MACHINE À ÉCRIRE
const texte = "Développeur & Designer";
const typewriter = document.getElementById("typewriter");
let index = 0;

function ecrire() {
    if (index < texte.length) {
        typewriter.textContent += texte[index];
        index++;
        setTimeout(ecrire, 400);
    }
}

// Démarre après le splash screen
setTimeout(ecrire, 2800);


//  BOUTON RETOUR EN HAUT
const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.classList.add("btn-top-visible");
    } else {
        btnTop.classList.remove("btn-top-visible");
    }
});
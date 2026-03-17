const header = document.getElementById('header');

const triggerHeight = 150;


window.addEventListener('scroll', () => {

    if (window.scrollY > triggerHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }

});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('email-input');
    const messageDiv = document.getElementById('form-message');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailValue = emailInput.value.trim();

        emailInput.classList.remove('input-error', 'input-success');
        messageDiv.classList.remove('error', 'success', 'visible');

        if (emailValue === '') {
            showFeedback('Please enter an email address.', 'error');
            return;
        }

        if (!emailRegex.test(emailValue)) {
            showFeedback('Please enter a valid work email address.', 'error');
            return;
        }

        window.location.href = '404page.html'
        emailInput.classList.add('input-success');

        setTimeout(() => {
            emailInput.value = '';
            emailInput.classList.remove('input-success');
            messageDiv.classList.remove('visible');
        }, 4000);
    });

    function showFeedback(text, status) {
        messageDiv.textContent = text;
        messageDiv.classList.add(status, 'visible');

        if (status === 'error') {
            emailInput.classList.add('input-error');
        }
    }

    emailInput.addEventListener('input', () => {
        emailInput.classList.remove('input-error', 'input-success');
        messageDiv.classList.remove('visible');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.scroll-reveal, .anim-focus, .anim-wipe, .anim-text-slide');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(el => revealObserver.observe(el));
});


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

function openMenu() {
    navMenu.classList.add("active");
    closeMenu.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeNav() {
    navMenu.classList.remove("active");
    closeMenu.classList.remove("active");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeNav);

document.querySelectorAll(".nav-items a").forEach(link => {
    link.addEventListener("click", closeNav);
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('.reveal-section');

    sections.forEach(section => {
        const images = section.querySelectorAll('.reveal-image');


        gsap.to(images, {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    const headings = gsap.utils.toArray('.sec-head');

    headings.forEach(head => {
        gsap.from(head, {
            clipPath: 'inset(100% 0% 0% 0%)',
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: head,
                start: 'top 85%',
            }
        });
    });
    const descriptions = gsap.utils.toArray('.sec-desc');

    descriptions.forEach(desc => {
        const splitDesc = new SplitType(desc, { types: 'words' });

        gsap.from(splitDesc.words, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.03,
            delay: 0.3,
            scrollTrigger: {
                trigger: desc,
                start: 'top 85%',
            }
        });
    });
});
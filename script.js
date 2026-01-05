gsap.registerPlugin(ScrollTrigger);

/* LOADER ANIMATION */
window.addEventListener("load", () => {
  const tl = gsap.timeline();

  tl.to("#loader h1", {
    opacity: 0,
    y: -40,
    duration: 1,
    ease: "power2.out"
  })
  .to("#loader", {
    y: "-100%",
    duration: 1.2,
    ease: "power4.inOut"
  })
  .from(".hero-title span", {
    y: 120,
    opacity: 0,
    stagger: 0.15,
    duration: 1.2,
    ease: "power4.out"
  }, "-=0.6")
  .from(".hero-sub", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  }, "-=0.8");
});

/* SCROLL ANIMATIONS */
gsap.from(".about h2, .about p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  opacity: 0,
  y: 80,
  duration: 1.2,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.from(".work-card", {
  scrollTrigger: {
    trigger: ".work",
    start: "top 75%"
  },
  opacity: 0,
  y: 60,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".contact h2, .contact-btn", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%"
  },
  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

/* CURSOR FOLLOW */
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: "power2.out"
  });
});

/* MAGNETIC BUTTON */
document.querySelectorAll(".contact-btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 2, duration: 0.3 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, duration: 0.3 });
  });
});


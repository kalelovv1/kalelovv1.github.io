const animatedElements = document.querySelectorAll(
    ".about, .skill-card, .projects, .project-card, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});
/* =========================
   CUSTOM CURSOR
========================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;


document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

});


function animateCursor() {

    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursorOutline.style.left = outlineX + "px";
    cursorOutline.style.top = outlineY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


/* Увеличение курсора */

const interactiveElements = document.querySelectorAll(
    "a, button, .skill-card, .project-card, .contact-card"
);


interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("active");
    });

    element.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("active");
    });

});
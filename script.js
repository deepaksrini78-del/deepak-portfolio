const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
            event.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// Button animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 120);
    });
});


// Current year
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Deepak. All rights reserved.`;
}
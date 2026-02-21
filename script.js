/* ================= MENU ICON & NAVBAR SYNC ================= */
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-menu');

menu.onclick = () => {
    // Toggle the 'X' icon
    menu.classList.toggle('bx-x');
    // Toggle the menu visibility
    navbar.classList.toggle('active');
}

/* ================= SCROLL SECTIONS ACTIVE LINK ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item");

window.onscroll = () => {
    // Remove 'X' icon and hide menu when a link is clicked or user scrolls
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - 150 && pageYOffset < sectionTop + sectionHeight - 150) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
};

/* ================= TYPED JS ================= */
const typed = new Typed('.multiple-text', {
    strings: ['Junior Engineer.', 'Web Designer.', 'Embedded Developer.', 'Artist.'],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

/* ================= CONTACT FORM VALIDATION ================= */
const form = document.getElementById("form-group");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let isValid = true;

        // Clear previous errors
        document.querySelectorAll(".error").forEach(el => el.textContent = "");

        if (name.value.trim() === "") {
            showError(name, "Name is required");
            isValid = false;
        }

        if (email.value.trim() === "") {
            showError(email, "Email is required");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, "Enter a valid email");
            isValid = false;
        }

        if (message.value.trim() === "") {
            showError(message, "Message is required");
            isValid = false;
        }

        if (isValid) {
            alert("Message sent successfully!");
            form.reset();
        }
    });
}

function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ================= PROJECT MODAL BOX ================= */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".project-items").forEach(project => {
    project.addEventListener("click", () => {
        const title = project.querySelector("h2").textContent;
        const description = project.querySelector("p").textContent;

        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
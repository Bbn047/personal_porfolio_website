//menu icon visibilty while changing the screen size
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//show active item on scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('active');

}


//change multiple text on the profile section
const typed = new Typed('.multiple-text', {
    strings: ['Junior Engineer.', 'Web Designer.', 'Embedded Developer.', 'Artist.'],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});



// Select all sections that have an id
const sections = document.querySelectorAll("section");

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-item");

// Function to handle active nav link on scroll
window.addEventListener("scroll", () => {
    let currentSection = "";

    // Loop through each section
    sections.forEach((section) => {
        const sectionTop = section.offsetTop; // distance from top
        const sectionHeight = section.offsetHeight;

        //  Check if the section is currently in view
        if (
            pageYOffset >= sectionTop - 150 &&
            pageYOffset < sectionTop + sectionHeight - 150
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    //  Remove active class from all nav items
    navLinks.forEach((link) => {
        link.classList.remove("active");

        // Add active class to the matching nav item
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});



// CONTACT FORM VALIDATION
const form = document.getElementById("form-group");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        //taking input fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        let isValid = true;

        // Clear previous errors
        document.querySelectorAll(".error").forEach(el => el.textContent = "");

        // Name validation
        if (name.value.trim() === "") {
            showError(name, "Name is required");
            isValid = false;
        }

        // Email validation
        if (email.value.trim() === "") {
            showError(email, "Email is required");
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, "Enter a valid email");
            isValid = false;
        }

        // Message validation
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



/* modal box */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".modal-close");

// Grab all project items
document.querySelectorAll(".project-items").forEach(project => {
  project.addEventListener("click", () => {
    // Grab h2 and p from the clicked project
    const title = project.querySelector("h2").textContent;
    const description = project.querySelector("p").textContent;

    // Set modal content
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Show modal
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

// Close modal
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



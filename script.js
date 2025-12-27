//menu icon visibilty while changing the screen size
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

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

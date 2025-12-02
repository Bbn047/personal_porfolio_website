fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-section").innerHTML = data;

    // Optional: highlight current page
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-item").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active"); // you can style .active in CSS
      }
    });
  });

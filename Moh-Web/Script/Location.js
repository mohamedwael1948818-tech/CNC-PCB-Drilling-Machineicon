const links = document.querySelectorAll(".navbar a");

const currentPage = window.location.pathname.split("/").pop().toLowerCase();

links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop().toLowerCase();

    if (currentPage === linkPage) {
        link.classList.add("active");
    }
});
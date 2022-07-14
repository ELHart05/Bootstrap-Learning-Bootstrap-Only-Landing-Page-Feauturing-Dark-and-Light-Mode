const btn = document.querySelector(".dark-mode"),
    body = document.querySelector("body"),
    navbar = document.querySelector(".navbar"),
    hr = document.querySelectorAll("hr"),
    footer_links = document.querySelectorAll(".footer-link"),
    cards = document.querySelectorAll(".card"),
    nav_link = document.querySelectorAll(".nav-link"),
    nav_brand = document.querySelector(".navbar-brand"),
    toggler = document.querySelector(".navbar-toggler");

btn.addEventListener("click", function () {
    if (body.classList.contains("bg-dark")) {
        body.classList = "bg-white text-dark";
        navbar.classList = "navbar navbar-dark bg-white navbar-expand-md";
        hr.forEach(elem => elem.classList = "bg-dark");
        cards.forEach(card => card.classList = "col card bg-dark text-white p-2 m-md-3 my-2 col-md-5");
        nav_link.forEach(link => link.classList = "nav-link text-dark");
        nav_brand.classList = "navbar-brand text-dark";
        btn.textContent = "Dark";
    } else {
        body.classList = "bg-dark text-white";
        navbar.classList = "navbar navbar-dark bg-dark navbar-expand-md";
        hr.forEach(elem => elem.classList = "bg-white");
        cards.forEach(card => card.classList = "col card bg-white text-dark p-2 m-md-3 my-2 col-md-5");
        nav_link.forEach(link => link.classList = "nav-link text-white");
        nav_brand.classList = "navbar-brand text-white";
        btn.textContent = "Light";
    }
    btn.classList = "btn dark-mode btn-primary nav-link btn-md py-0 px-2 ms-md-2 mt-2 mt-md-0";
    footer_links.forEach(footer_link => footer_link.classList = "nav-link footer-link text-primary px-3");
})
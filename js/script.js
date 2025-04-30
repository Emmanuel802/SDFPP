const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

// ADDS THE NAV-MENU WHEN CLICKED
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// REMOVES THE NAV-MENU WHEN CLICKED
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
     navMenu.classList.remove("active");
}))
const navBtn = document.querySelector(".nav-btn");
const navItem = document.querySelector(".nav");
const expandBtn = document.querySelectorAll(".expand-btn");
// hamburger toggle
navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open");
    navItem.classList.toggle("open");
});

// menu expand

expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("open");
    });
});
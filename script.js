const hamburgerMenu = document.querySelector(".fa-bars")
const navLists = document.querySelector(".nav-lists")

hamburgerMenu.addEventListener("click", () => {
    navLists.style.left = "0"
})

navLists.addEventListener("click", (e) => {
    if(e.target.classList.contains("nav-links") || e.target.classList.contains("fa-arrow-right-from-bracket")){
        navLists.style.left = "-100%"
    }
})

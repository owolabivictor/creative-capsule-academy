const hamburgerMenu = document.querySelector(".fa-bars")
const navLists = document.querySelector(".nav-lists")

hamburgerMenu.addEventListener("click", () => {
    navLists.style.display = "flex"
})

navLists.addEventListener("click", (e) => {
    if(e.target.classList.contains("nav-links") || e.target.classList.contains("fa-xmark")){
        navLists.style.display = "none"
    }
})

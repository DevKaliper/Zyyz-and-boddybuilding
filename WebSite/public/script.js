const menu = document.getElementById("mobile-menu")

menu.addEventListener("click", e =>{
    const menuLinks = document.querySelector(".mobile-links")

    menuLinks.classList.toggle("hidden")
})
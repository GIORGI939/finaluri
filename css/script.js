let burger = document.querySelector(".fa-bars-staggered");
let  mobileMenu = document.querySelector(".ul")
burger.addEventListener("click", function(){
    mobileMenu.classList.toggle("active");
})
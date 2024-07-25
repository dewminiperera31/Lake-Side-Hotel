const menubtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("menu-btn");
const menubtnIcon = menubtn.querySelector("i");

menubtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle('open');

    const isOpen =navLinks.classList.contains("open")
    menubtnIcon.setAttribute("class",isOpen ?"ri-close-line":"ri-menu-line");
    
})
var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 100,
       modifier: 2,
       slideShadows: true,
    },
    pagination: {
       el: ".swiper-pagination",
     },
 });

 ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
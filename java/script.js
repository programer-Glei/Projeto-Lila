
let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar ul')

menu.addEventListener('click', () =>{
    navbar.classList.toggle('active')
    console.log("chegou aqui")
})


let swiper1 = new Swiper(".products-slider",{
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false
    },
    grabCursor: true,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        }
    }
})

let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

 document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

  document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.toggle('active');
}

document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
   breakpoints: {
       640: {
           slidesPerView: 1,
            
       },

       768: {
           slidesPerView: 4,
           
       },

       991: {
           slidesPerView: 5,
           
       },
   },
  });


// const btns = document.querySelectorAll('.nav-btn1');

// var slideNav = funtion(manual){
//     btns[manual].classList.add("active");"
// }


  var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
   breakpoints: {

    991: {
        slidesPerView: 2,
        
    },
       640: {
           slidesPerView: 3,
            
       },

       768: {
           slidesPerView: 4,
           
       },

       991: {
           slidesPerView: 5,
           
       },
   },
  });










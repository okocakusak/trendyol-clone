var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  var swiper = new Swiper(".content-swiper > .mySwiper", {
    slidesPerView: 6,
    
    rewind: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


let = mybutton = document.getElementById("yukari");

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
    mybutton.style.display = "block";
  }else{
    mybutton.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;

  document.documentElement.scrollTop = 0;
  
}
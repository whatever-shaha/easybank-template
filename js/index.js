'use strict'
let menu = document.querySelector('.header__menu');
let go = document.querySelector('.overlay');
let list = document.getElementById('list')
menu.addEventListener('click',()=>{animator()});
go.addEventListener('click', ()=>{animator()})
let myDots = $("#tester");
$(document).ready(function(){
    $('.article__grid').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots:true,
        autoplay:true,
        pauseOnDotsHover:true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        // dotsClass: 'tester'

      });
  });

function animator(){
    menu.classList.toggle('burger');
    go.classList.toggle("shadow");
    list.classList.toggle("animList");
    document.body.classList.toggle('unscrollable');
}
//window resize issue fixed
window.addEventListener('resize', ()=> {
    if(window.innerWidth > 901){
        list.classList.remove('animList');
        go.classList.remove('shadow');
        menu.classList.remove('burger');
        document.body.classList.remove('unscrollable');
    }
})
console.log('connected');
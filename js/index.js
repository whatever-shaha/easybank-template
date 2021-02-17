'use strict'
let menu = document.querySelector('.header__menu');
let go = document.querySelector('.overlay');
let list = document.getElementById('list');


menu.addEventListener('click',()=>{animator()});
go.addEventListener('click', ()=>{animator()})

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
          ]
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

let lastLoc = 0;
const nav = document.querySelector(".headerTag"); //headerTag is the main wrapper for oll other stuff
const logo = document.querySelector(".header>a>svg>g>path");// svg logo`s selector to change color
const links = document.querySelectorAll(".header__list>li>a"); //making white a links on scrolling
const spans = document.querySelectorAll(".header__menu>span"); //making white a burger menu on scrolling

console.log(links);
window.addEventListener("scroll" , () => {
  let currentLoc = pageYOffset;
 
  if(currentLoc <= lastLoc){
    if(currentLoc < 100){   //very top position styling for nav
      nav.style.background = "white";
      logo.style.fill = "rgb(45, 49, 77)"; //svg color back to $DarkBlue
      links.forEach(aTag => aTag.classList.remove("white"));
      spans.forEach(span => span.style.background = "rgb(45, 49, 77)");
      lastLoc = currentLoc;
    }else{
      nav.style.background = "rgba(45, 49, 77, 0.5)"; // the variable $DarkBlue with RDBA
      logo.style.fill = "#ffffff" //svg color = white
      links.forEach(aTag => aTag.classList.add("white")); // 
      spans.forEach(span => span.style.background = "white"); // 
    }
    nav.style.top = 0;
    lastLoc = currentLoc;
  } else {
    nav.style.top = '-90px';
    nav.style.background = "white";
    lastLoc = currentLoc
  }
})
console.log('connected');
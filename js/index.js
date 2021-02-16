'use strict'
let menu = document.querySelector('.header__menu');
let go = document.querySelector('.overlay');
let list = document.getElementById('list')
menu.addEventListener('click',()=>{animator()});
go.addEventListener('click', ()=>{animator()})


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
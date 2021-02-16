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
console.log('connected');
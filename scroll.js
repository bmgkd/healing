
let text = document.getElementById("text");
let Bird1 = document.getElementById("Bird1");
let Bird2 = document.getElementById("Bird2");
let btn = document.getElementById("btn");
let rocks = document.getElementById("rocks");
let forest = document.getElementById("forest");
let water = document.getElementById("water");
let header = document.getElementById("header");

  window.addEventListener('scroll',function(){
    let value = window.scrollY; 
    text.style.top = 50 + value * -0.5 + '%';
    Bird1.style.top = value * -1.5 +'px';
    Bird2.style.top = value * -5 +'px';
    btn.style.top = value * 1.5 +'px';
    rocks.style.top = value * -1.5 +'px';
    forest.style.top = value * -0.12 +'px';
    water.style.top = value * 0.25 +'px';
    header.style.top = value * 0.5 +'px';
 })


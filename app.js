
/*
const card = document.querySelector('.burger');
const container = document.querySelector('.container');
container.addEventListener("mousemove",(e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/15;
    let YAxis = (window.innerHeight / 2 - e.pageY)/15;
    container.style.transform = `rotateY(${YAxis}deg) rotateX(${xAxis}deg)`;

});
*/

function anime1(){
    var bar = document.querySelector('.navbar');
    bar.style.animation = `SlideNav 1s ease forwards`;
}

anime1();

window.addEventListener('scroll',function(e) {
    const nav = document.querySelector('.navbar');
    const li = document.querySelector('.li');
    const li1 = document.querySelector('.li1');
    const li2 = document.querySelector('.li2');
    const logo = document.querySelector('.logo a');
    if(window.scrollY > 530){
        nav.style.background = `white`;
        li.style.color = `rgb(197, 24, 24)`;
        li1.style.color = `rgb(197, 24, 24)`;
        li2.style.color = `rgb(197, 24, 24)`;
        logo.style.color = `rgb(197, 24, 24)`;
    }
    if (window.scrollY <= 530){
        nav.style.background = `rgb(197, 24, 24)`;
        li.style.color = `white`;
        li1.style.color = `white`;
        li2.style.color = `white`;
        logo.style.color = `white`;
    }
    if (window.scrollY > 1260) {
        nav.style.background = `rgb(197, 24, 24)`;
        li.style.color = `white`;
        li1.style.color = `white`;
        li2.style.color = `white`;
        logo.style.color = `white`;
    }
});


var btn = document.querySelector('.callToAct');
btn.addEventListener('mouseleave',()=>{
    btn.style.animation = `HoverCTA2 0.6s ease forwards`;
});
btn.addEventListener('mouseover',()=> {
    btn.style.animation = `HoverCTA 0.6s ease forwards`;
});

function pageScrollT2(){
    window.scrollTo(0,600);
    console.log('Alo');
};

/*
var container2 = document.querySelector('.containerp2');
container2.addEventListener('mousemove',(e)=> {
    let xAxis = ((window.innerWidth / 40)- e.pageX)/ 50;
    let yAxis = ((window.innerHeight / 40) -  e.pageY)/ 50;
    container2.style.translate3d = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});
*/

var fotop1 = document.querySelector('.imagem');
var shadow = document.querySelector('.kindshadow');
fotop1.addEventListener('mouseover',()=> {
    fotop1.style.animation = `pulin 1.0s linear infinite`;
    shadow.style.animation = `pulin 1.0s linear infinite`;
});
fotop1.addEventListener('mouseleave',()=> {
    fotop1.style.animation = `none`;
    shadow.style.animation = `none`;
});

var containerp2 = document.querySelector('.containerp2');
containerp2.addEventListener('mouseover',()=> {
    containerp2.style.animation = `pulin 1.08s linear infinite`;
});
containerp2.addEventListener('mouseleave',()=> {
    containerp2.style.animation = `none`;
});
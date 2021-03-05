
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
};

function pageScrollT3(){
    window.scrollTo(0,1300);
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


var dalan = true;
var xanxe = false;
var miguel = false;
var iago = false;



function next() {
    if (dalan == true){
        var dalao = document.querySelector('.carddalao');
        dalao.style.animation = `actualcard 1s ease forwards`;
        var xanxes = document.querySelector('.cardxanxes');
        xanxes.style.animation = `nextcard 1s ease forwards`;
        dalan = false;
        xanxe = true;
        ab();
        return 0;
    }
    
    if (xanxe == true){
        var xanxes = document.querySelector('.cardxanxes');
        xanxes.style.animation = `actualcard 1s ease forwards`;
        var mig = document.querySelector('.cardmig');
        mig.style.animation = `nextcard 1s ease forwards`;
        xanxe = false;
        miguel = true;
        ab();
        return 0;

    }
    if (miguel == true) {
        var mig = document.querySelector('.cardmig');
        mig.style.animation = `actualcard 1s ease forwards`;
        var iagod = document.querySelector('.cardiago');
        iagod.style.animation = `nextcard 1s ease forwards`;
        miguel = false;
        iago = true;
        ab();
        return 0;
    }
    
    
}


function ab(){
    if (dalan != true){
        var arrowb = document.querySelector('.arrowback');
        arrowb.style.visibility = `visible`;
    }
    if (dalan == true){
        var arrowb = document.querySelector('.arrowback');
        arrowb.style.visibility = `hidden`;
    }
    if (iago == true){
        var arrow = document.querySelector('.arrow');
        arrow.style.visibility = `hidden`;
    }
    if (iago != true){
        var arrow = document.querySelector('.arrow');
        arrow.style.visibility = `visible`;
    }
}

function anterior() {
    if (xanxe == true){
        var xanxes = document.querySelector('.cardxanxes');
        xanxes.style.animation = `actual 1s ease forwards`;
        var dalao = document.querySelector('.carddalao');
        dalao.style.animation = `anterior 1s ease forwards`;
        xanxe = false;
        dalan = true;
        ab();
        return 0;

    }
    if (miguel == true) {
        var mig = document.querySelector('.cardmig');
        mig.style.animation = `actual 1s ease forwards`;
        var xanxes = document.querySelector('.cardxanxes');
        xanxes.style.animation = `anterior 1s ease forwards`;
        miguel = false;
        xanxe = true;
        ab();
        return 0;
    }
    if (iago == true) {
        var iagod = document.querySelector('.cardiago');
        iagod.style.animation = `actual 1s ease forwards`;
        var mig = document.querySelector('.cardmig');
        mig.style.animation = `anterior 1s ease forwards`;
        miguel = true;
        iago = false;
        ab();
        return 0;
    }

    
    
}

ab();
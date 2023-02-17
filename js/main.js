let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.remove("fa-times");
    header.classList.remove("active");
    dark1.classList.remove("dark2");           
}

let kun =  document.querySelector(".kun");
let dark1 = document.querySelector(".dark1");
// let dark = document.querySelector(".dark");
let chec = document.getElementById("checkbox");
let sitting = document.querySelector(".sitting");
let sitting12 = document.querySelector("#sitting12");
let rang = document.getElementsByClassName("rang");
let orqafon = document.getElementsByClassName("orqafon");
let color = document.getElementsByClassName("color");
let rasim1 = document.querySelector(".rasim1");
let rasim2 = document.querySelector(".rasim2");
let ram = document.getElementsByClassName("ram");
let hover = document.getElementsByClassName("hover");
let hoverr = document.getElementsByClassName("hover-a");

let btn = document.getElementsByClassName("btn")

sitting.addEventListener("click", () => {
    dark1.classList.toggle("dark2");
})

chec.onclick = () =>{
    kun.classList.toggle("tun");
    sitting12.classList.toggle("darkcolor");

    for(let z = 0; z < rang.length; z++){
        rang[z].classList.toggle("rang1");
    }
    for(let i = 0; i < orqafon.length; i++){
        orqafon[i].classList.toggle("orqafon1");
    }
    for(let j = 0; j < color.length; j++){
        color[j].classList.toggle("color1");
    }
    for(let k = 0; k < ram.length; k++){
        ram[k].classList.toggle("ram1");
    };
    for(let a = 0; a < hover.length; a++){
        hover[a].classList.toggle("hover1");
    };
    for(let c = 0; c < hoverr.length; c++){
        hoverr[c].classList.toggle("hover2");
    };
    for(let b = 0; b < btn.length; b++){
        btn[b].classList.toggle("btn1");
    }
}

// type js
let typing = new Typed (".typing" , {
    strings: [ "Youtuber", " Web developer", " Blogger"],
    typeSpeed:150,
    backSpeed:30,
    loop:true
});
// type js end

// loder
window.addEventListener("DOMContentLoaded", () =>{
    const loder = document.querySelector(".loder")
    setTimeout(() =>{
        loder.style.opacity = '0'
        setTimeout(() =>{

            loder.style.display = 'none'
        }, 500)
    }, 1000)
})
// loder end

// top btn
window.addEventListener("scroll", function () {
    let topbutton = document.querySelector(".topbutton");
    topbutton.classList.toggle("toppbtn", window.scrollY > 200)
})
// top btn end

// progress bar
const skills = document.querySelector(".skills");
const bar = document.querySelectorAll(".progressbar");

function showProgress(){
    bar.forEach(progressBar =>{
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}
function hideProgress(){
    bar.forEach(p =>{
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
window.addEventListener('scroll', () =>{
    const sectionPos = skills.getBoundingClientRect().top;
    const screenPost = window.innerHeight;
    if(sectionPos < screenPost){
        showProgress();
    }else{
        hideProgress();
    }
});

// progress bar end

var productbtn=document.querySelector(".right-nav #product")
var productpage=document.querySelector(".product-page")
var usecasesbtn=document.querySelector("#use-cases")
var usecasespage=document.querySelector(".use-cases-page")
var blureffect=document.querySelector(".blur-effect")
var aboutbtn=document.querySelector("#about")
var aboutpage=document.querySelector(".about-page")

var flag=0
productbtn.addEventListener("click",function () {
    if(flag==0){
        productpage.style.display = 'flex'
        flag=1
    }
    else{
        productpage.style.display = 'none'
        flag=0
    }
        
})
usecasesbtn.addEventListener("click",function () {
    if(flag==0){
        usecasespage.style.display = 'flex'
        flag=1
    }
    else{
        usecasespage.style.display = 'none'
        flag=0
    }
        
})
aboutbtn.addEventListener("click",function () {
    if(flag==0){
        aboutpage.style.display = 'flex'
        flag=1
    }
    else{
        aboutpage.style.display = 'none'
        flag=0
    }
        
})

gsap.from(".nav-bottom h1",{
    x:-200,
    duration:2,
    opacity:0,
    stagger:2

})


gsap.to(".logo",{
    transform:'translateX(-100%)',
    duration:20,
    ease:'none',
    repeat:-1

})

var heroines =document.querySelectorAll(".heroine")
var selectedVideo =document.querySelector("#slide-video")
var selectedpara =document.querySelector("#slide-para")
var selectedcount =document.querySelector("#count")






 var video=""
 var para=""
 var count=""



heroines.forEach(function (elem) {
    elem.addEventListener("mouseenter",function () {
        video= elem.getAttribute("data-video");
        selectedVideo.setAttribute('src',video)
        para=elem.getAttribute("data-para");
        selectedpara.innerHTML=para
        count=elem.getAttribute("data-count");
        selectedcount.innerHTML=count


    })
    

    
})

gsap.to(".our-products .left",{
    scrollTrigger:{
         trigger:'.our-products .left',
         scroller:'body',
        //  markers:true,
         start:'top 0%',
         end:'top -30%',
         scrub:2,
         pin:true
     }
})

var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    navigation:{
        nextEl: ".next-btn",
        prevEl:'.prev-btn'
    }
  });
 

var swiperslides=document.querySelectorAll(".swiper-slide")  
var selectedcountings=document.querySelector("#swiper-counting")  
var counting="";

swiperslides.forEach(function (elems) {
    elems.addEventListener("mouseenter",function () {
        counting=elems.getAttribute("data-counting");
        selectedcountings.innerHTML=counting 
    }) 
    
})

// lenis for smooth scrolling
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
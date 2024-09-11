
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

nextBtn.onclick = function(){
 moveSlider('next')
}
prevBtn.onclick = function(){
    moveSlider('prev')
   }
   
function moveSlider(direction){
let sliderItems = sliderList.querySelectorAll('.item')
let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    }else{
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }

}    

// dropdown
let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");
/* fun to display or hide profile dropdown list */ 
const toggle = () => profileDropdownList.classList.toggle("active");
window.addEventListener('click',function(e){
    /* hide dropdown list if user click outside */
   if(!btn.contains(e.target)) profileDropdownList.remove("active");
});


// change navbar color
$(document).ready(function(){
   $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>150){
        $(".navbar").css("background" ,"#222");
        $(".navbar").css("box-shadow" ,"rgba(0, 0, 0, 0.1) 0px 4px 12px");
    }
    else{
        $(".navbar").css("background","transparent");
        $(".navbar").css("box-shadow","none");
    }
   }) 
});
// smooth scroll
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight 
    },1000)
    e.preventDefault();
})
// navbar mobile version
const mobile =document.querySelector(".menu-toggle");
const molbileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    molbileLink.classList.toggle("active");
})
molbileLink.addEventListener("click",function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=768 && menuBars){
        mobile.classList.toggle("is-active");
        molbileLink.classListremove("active");
    }
})


// swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      640:{
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768:{
       slidesPerView: 3,
       spaceBetween: 40,
    },
    1024: {
       slidesPerView:3,
       spaceBetween: 50,
    }
    }
    })
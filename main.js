/* MENU BTN */
try {
const btnMenu = document.querySelector('.button-menu')
const btnMenuImg = document.querySelector('.button-menu img')

btnMenu.addEventListener('mouseover',() => {
    btnMenuImg.style.display = 'flex';
})
btnMenu.addEventListener('mouseout',() => {
    btnMenuImg.style.display = 'none';
})
} catch (error){};

/* BURGER */
(function() {

const burgerItem = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const menuCloseItem = document.querySelector('.burger-close');
const burgerEvent = document.querySelectorAll('.nav-item');
const menuDes = document.querySelector('.menu-description')
const sliderCon = document.querySelector('.slider-container');
const main = document.querySelector('main');

burgerItem.addEventListener('click', () => {
    menu.classList.add('menu-active')
    navList.classList.add('nav-list_active');
    main.style.display = 'none';
    burgerItem.style.display = 'none';
    menuCloseItem.style.display = 'flex';
 });

 menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('menu-active')
    navList.classList.remove('nav-list_active');
    main.style.display = 'block';
    burgerItem.style.display = 'flex';
    menuCloseItem.style.display = 'none';
});

navList.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-list > a')) {
        main.style.display = 'block';
    }
 })

for (let i = 0; i < burgerEvent.length; i++) {
    burgerEvent[i].addEventListener('click', () => {
        menu.classList.remove('menu-active')
        navList.classList.remove('nav-list_active');
        main.style.display = 'block';
        burgerItem.style.display = 'flex';
        menuCloseItem.style.display = 'none';
    })
};

}());

 // CAROUSEL
    
 const btnRight = document.querySelector('.slider-arrow-right');
 const btnLeft = document.querySelector('.slider-arrow-left');
 const carouselImg = document.querySelector('.carousel');
 const controls = document.querySelectorAll('.control-item');
 const block = document.querySelector ('.carousel_wrapper');
 const slides = document.querySelectorAll('.slider-box')
 
 
 let position = 0;
 let controlIndex = 0;
 let timer = 0;
 let slideIndex = 0;
 
 try {
 btnRight.addEventListener('click', () => {
     if (position < block.offsetWidth * 2) {
     position += block.offsetWidth;
     controlIndex++
     } else if (position = block.offsetWidth * 2) {
         position = 0;
         controlIndex = 0;
     }
     carouselImg.style.left = -position + 'px'
     controlsSlide(controlIndex)
 })
 btnLeft.addEventListener('click', () => {
     if (position > 0){
     position -= block.offsetWidth;
     controlIndex--
     } else if (position = 0) {
         position = block.offsetWidth * 2
         controlIndex = 2
     }
     carouselImg.style.left = -position +'px'
     controlsSlide(controlIndex)
 })
 
 controls.forEach((control,index) => {
     control.addEventListener('click', () => {
         position = block.offsetWidth * index
         carouselImg.style.left = -position + 'px'
         controlIndex = index
         controlsSlide(controlIndex)
     })
 })
 
 const controlsSlide = (index) => {
     for (let control of controls) {
         control.classList.remove ('main')
     }
     controls[index].classList.add('main')
 }
 
} catch (error){};

 // COFFEE ADD

const btnCoffee = document.querySelector ('.btn-coffee-dark')
const menuBox = document.querySelectorAll('.menu-box')
const popUpMenu = document.querySelector('.coffee-pop-up')
const btnClose = document.querySelector('.btn-secondary')

try{
    btnCoffee.addEventListener('click', () =>{
        document.getElementById('espresso').style.display = 'flex';
        document.getElementById('latte').style.display = 'flex';
        document.getElementById('macchiato').style.display = 'flex';
        document.getElementById('cognac').style.display = 'flex';
        btnCoffee.style.display = 'none'
    }
    )
}catch (error) {};

try{
    
 for (let i = 0; i < menuBox.length; i++) {
    menuBox[i].addEventListener('click', () => {
        popUpMenu.classList.toggle('hidden')
    })
}
    popUpMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('coffee-pop-up')){
        popUpMenu.classList.toggle('hidden')
    }
 })
 btnClose.addEventListener('click', () => {
    popUpMenu.classList.toggle('hidden')
 })

} catch (error) {};


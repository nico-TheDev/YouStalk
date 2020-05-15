const overlay = document.querySelector('.nav__overlay');
const btnOpen = document.querySelector('.nav__menu');
const btnClose = document.querySelector('.nav__close');


btnOpen.addEventListener('click',()=>{
   overlay.style.transform = 'translateY(0%)'; 
   overlay.style.opacity = '1'; 
});

btnClose.addEventListener('click',()=>{
    overlay.style.transform = 'translateY(-100%)'; 
    overlay.style.opacity = '0'; 

 });
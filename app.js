const ham = document.querySelector('.ham');
const hideNav = document.querySelector('.hidden-nav');
const header = document.querySelector('header')
ham.addEventListener('click',function(){
    hideNav.classList.toggle('hide')
    header.classList.toggle('black')
})
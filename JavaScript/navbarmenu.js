/*Desplegar menu*/
let menuToggle = document.querySelector('.header__menu-toggle');
let menuToggleIcon = document.querySelector('.header__menu-toggle i');
let menu = document.getElementById('header__navbar');

    menuToggle.addEventListener('click', e=>{
        menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menuToggleIcon.setAttribute('class', 'fa fa-times');  
    } else{
        menuToggleIcon.setAttribute('class','fa fa-bars');
    }
});

/*Fijar navbar*/
$(document).ready(function(){
    var altura = $('#header__navbar').offset().top;
    
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura){
            $('#header__navbar').addClass('navbar-fixed');
        } else{
            $('#header__navbar').removeClass('navbar-fixed');
        }
    });
});
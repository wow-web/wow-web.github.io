var gallery = $('.gallery__list').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    autoWidth: true,
    items:2,
    center: true,
    responsive:{
        0:{
            items:2
        },
        1200:{
            items:3,
            nav: true,
            margin: 20
        }
    }
});

$(function(){
    $('a.go-to').click(function() {
        var linkHref = $(this).attr("href");
        $('html, body').animate({scrollTop: $(linkHref).offset().top +"px"});
        document.querySelector('.top-line__menu-btn').classList.remove('top-line__menu-btn--opened');
        document.querySelector('.top-line__menu').style.display = 'none';
        return false;
    });
});

const inputTel = $('input[type="tel"]');
inputTel.mask('+7(944)444-44-44');

var menuBtn = document.querySelector('.top-line__menu-btn'),
    menu = document.querySelector('.top-line__menu');

$('.top-line__menu-btn').click(function() {
    if ($('.top-line__menu-btn').hasClass('top-line__menu-btn--opened')) {
        $('.top-line__menu-btn').removeClass('top-line__menu-btn--opened');
        $('.top-line__menu').css('display', 'none');
    }
    else {
        $('.top-line__menu-btn').addClass('top-line__menu-btn--opened');
        $('.top-line__menu').css('display', '');
    }
});

var popupOpenBtns = document.querySelectorAll('.open-popup'),
    popup = document.querySelector('.popup'),
    closePopup = document.querySelector('.popup__close'),
    popupWrapper = document.querySelector('.popup__wrapper');

for (var i = 0; i < popupOpenBtns.length; i++) {
    popupOpenBtns[i].addEventListener('click', function(e) {
        e.preventDefault();
        popup.style.display = '';
        closePopup.addEventListener('click', function(e) {
            e.preventDefault();
            popup.style.display = 'none';
        });
        popupWrapper.addEventListener('click', function(e) {
            e.preventDefault();
            popup.style.display = 'none';
        })
    });
}
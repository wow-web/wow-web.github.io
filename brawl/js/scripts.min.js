if ($(window).width() > 1199) {
    $('.page-main__wrapper').removeClass('container');
    $('.page-main').addClass('container');
}
else {
    $('.page-main__slider').addClass('owl-carousel owl-theme');
    var gallery = $('.page-main__slider').owlCarousel({
        loop: true,
        margin: 10,
        items: 2,
        dots: true,
        nav: false,
        center: true,
        autoWidth: true
    })
}

// Маска для номеров телефона
const inputTel = $('input[type="tel"]');
inputTel.mask('+7(944)444-44-44');
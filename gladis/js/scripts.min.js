var gallery = $('.page-main__carousel').owlCarousel({
    loop: true,
    margin: 21,
    items: 2,
    dots: true,
    nav: false,
    center: true,
    autoWidth: true
});

// Маска для номеров телефона
const inputTel = $('input[type="tel"]');
inputTel.mask('+7(944)444-44-44');
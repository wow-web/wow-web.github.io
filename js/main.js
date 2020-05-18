// Маска для номеров телефона
const inputTel = $('input[type="tel"]');
inputTel.mask('+7(944)444-44-44');

//Аккордион
$('.ask__list li h3').each(function(index, e) {
    $(this).click(function() {
        var accordionItem = $(this).parent();
        accordionItem.toggleClass('active');
    });
});

// Карусель
if ($('.reviews__list')) {
    var gallery = $('.reviews__list').owlCarousel({
        loop: true,
        margin: 40,
        dots: false,
        nav: true,
        items: 2,
        autoWidth: true
    });
};
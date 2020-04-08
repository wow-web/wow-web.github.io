$(window).scroll(function() {
    const scroll = $(window).scrollTop(),
        position = $('.page-main').offset().top;

    if ($('.top-line').hasClass('top-line--fixed') && scroll < position) {
        $('.top-line').removeClass('top-line--fixed');
    }
    else if (!$('.top-line').hasClass('top-line--fixed') && scroll > position) {
        $('.top-line').addClass('top-line--fixed');
    }
});

$(function(){
    $('a.go-to').click(function(){
            var linkHref = $(this).attr("href");
            $('html, body').animate({scrollTop: $(linkHref).offset().top+"px"});
            $('.top-line__mnu').removeClass('top-line__mnu--open');
            $('.top-line__hamburger').css('background-image', 'url(img/icons/burger.svg)');
            return false;
    });
});

const inputTel = $('input[type="tel"]');
inputTel.mask('+7(944)444-44-44');


$('.page-header__open-modal').click(function(e) {
    e.preventDefault();
    $('.popup').addClass('popup--active');

    $('.popup__close').click(function(e) {
        e.preventDefault();
        $('.popup').removeClass('popup--active');
    });

    $('.popup__wrapper').click(function() {
        $('.popup').removeClass('popup--active');
    });
});

$('.top-line__hamburger').click(function() {

    if ($('.top-line__mnu').hasClass('top-line__mnu--open')) {
        $('.top-line__mnu').removeClass('top-line__mnu--open');
        $('.top-line__hamburger').css('background-image', 'url(img/icons/burger.svg)');
    }
    else {
        $('.top-line__mnu').addClass('top-line__mnu--open');
        $('.top-line__hamburger').css('background-image', 'url(img/icons/close.svg)');
    }
});


ymaps.ready(function () {
    var myMap;
    var address = '197372, г. Санкт-Петербург, Проспект Испытателей 33/А';
    var geocoder = ymaps.geocode(address).then(function (res) {
        var coordinates = res.geoObjects.get(0).geometry.getCoordinates();

        // Для сдвига метки
        // coordinates = [
        // 	coordinates[0],
        // 	coordinates[1] - 0.005
        // ];

        myMap = new ymaps.Map("map", {
            center: coordinates,
            zoom: 14,
            behaviors: [
                'dblClickZoom',
                'rightMouseButtonMagnifier',
                'drag'
            ],
            controls: [
                'zoomControl'
            ]
        });

        var placemark = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates(), 
            {
                hintContent: address,
                balloonContent: 'Acrol ic - Поставка продукции HGH'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/map.svg',
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -32],
            }
        );

        myMap.geoObjects.add(placemark);
    });
});
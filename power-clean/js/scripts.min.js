$(function() {
    $('.go-to').click(function(){
            var linkHref = $(this).attr("href");
            $('html, body').animate({scrollTop: $(linkHref).offset().top+"px"});
            $('.top-line__menu').removeClass('active');
            $('.top-line__menu-btn').css('background-image', 'url(img/icons/burger-mob.svg)');
            return false;
    });
});


// Маска для номеров телефона
const inputTel = $('input[type="tel"]');
inputTel.mask('+7(944)444-44-44');


// Открыть/закрыть меню
$('.top-line__menu-btn').click(function() {
    if ($('.top-line__menu').hasClass('active')) {
        $('.top-line__menu').removeClass('active');
        $('.top-line__menu-btn').css('background-image', 'url(img/icons/burger-mob.svg)');
    }
    else {
        $('.top-line__menu').addClass('active');
        $('.top-line__menu-btn').css('background-image', 'url(img/icons/close.svg)');
    }
});


//Аккордион
$('.ask__accordion li h3').each(function(index, e) {
    $(this).click(function() {
        var accordionItem = $(this).parent();
        // if (accordionItem.hasClass('active')) {
        //     console.log('1');
        //     accordionItem.children('p').slideDown(500);
        // }
        // else {
        //     console.log('2');
        //     accordionItem.children('p').slideUp(500);
        // }
        accordionItem.toggleClass('active');
    });
});

// Открыть/закрыть модальное окно

$('.open-modal').click(function(e) {
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


//прокрутка

var fixedBlock = function(first, second, img) {
    var a = document.querySelector(first), b = null, P = 40;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    function Ascroll() {
      if (b == null) {
        var s = 'background-image: url(img/products/'+ img +'); background-size: contain; background-repeat: no-repeat; background-position: center; height: 555px;';
        b = document.createElement('div');
        b.style.cssText = s + ' width: ' + a.offsetWidth + 'px;';
        a.insertBefore(b, a.firstChild);
        var l = a.childNodes.length;
        for (var i = 1; i < l; i++) {
          b.appendChild(a.childNodes[1]);
        }
        a.style.height = '0';
        a.style.padding = '0';
        a.style.border = '0';
      }
      var Ra = a.getBoundingClientRect(),
          R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector(second).getBoundingClientRect().top - 20);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
      if ((Ra.top - P) <= 0) {
        if ((Ra.top - P) <= R) {
          b.className = 'stop';
          b.style.top = - R +'px';
        } else {
          b.className = 'sticky';
          b.style.top = P + 'px';
        }
      } else {
        b.className = '';
        b.style.top = '';
      }
      window.addEventListener('resize', function() {
        a.children[0].style.width = getComputedStyle(a, '').width
      }, false);
    }
};

if (document.documentElement.clientWidth > 1200) {
    fixedBlock('.one', '.second', '1.png');
    fixedBlock('.two', '.offer__wrapper', '2.png');
}
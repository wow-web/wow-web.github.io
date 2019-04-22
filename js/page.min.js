//Раздаем классы
var htmlItems = document.querySelectorAll('.main-item');
var iconImage = document.querySelector('.about__text');
var iconText = iconImage.textContent;

var purpose = {
	a : [
		['Офис', 'офис'],
		['Склад', 'склад'],
		['Производство','производство'],
		['Открытая площадка','открытая площадка'],
		['Кладовая','кладовая'],
		['Ремзона','ремзона']
	],
	b : ['office', 'stock', 'production', 'open', 'storeroom', 'workshop']
};

var changeClass = function (typeText, typeElement) {
	if (typeText === purpose.a[0][0] || typeText === purpose.a[0][1]) {
		typeElement.classList.add('about__text--offise')
	}
	else if (typeText === purpose.a[1][0] || typeText === purpose.a[1][1]) {
		typeElement.classList.add('about__text--stock')
	}
	else if (typeText === purpose.a[2][0] || typeText === purpose.a[2][1]) {
		typeElement.classList.add('about__text--manufacture')
	}
	else if (typeText === purpose.a[3][0] || typeText === purpose.a[3][1]) {
		typeElement.classList.add('about__text--open')
	};
};

for (var i = 0; i < htmlItems.length; i++) {
	var typeElement = htmlItems[i].querySelector('.about__text--type');
	var typeText = typeElement.textContent;

	changeClass(typeText, typeElement);
};

changeClass(iconText, iconImage);



//Подключение Яндекс Карт
ymaps.ready(init);
function init() {
	var myMap;
	var address = document.querySelector('.catalog-content__adress').textContent;

	var geocoder = ymaps.geocode(address).then(function (res) {
		var coordinates = res.geoObjects.get(0).geometry.getCoordinates();
		myMap = new ymaps.Map('map', {
			center: res.geoObjects.get(0).geometry.getCoordinates(),
			zoom : 16,
			behaviors: [
				'dblClickZoom',
				'rightMouseButtonMagnifier',
				'drag'
			],
			controls: [
				'zoomControl'
			]
		});

		var placemark = new ymaps.Placemark(coordinates, 
			{
				hintContent: address,
				balloonContent: 'Комментарий или адресс'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/icons/star-2.svg',
				iconImageSize: [65, 65],
				iconImageOffset: [-16, -16],
			}
		);

		myMap.geoObjects.add(placemark);
	});
};




//слайдер
var slides = [];
var slideNumber = 0;
var slidesVar = document.querySelectorAll('.slider__item');
var slideNext = document.querySelector('.toggle__item--right');
var slidePrev = document.querySelector('.toggle__item--left');
var j = slideNumber + 3;
var config = {
	animation: 'slide',
	filebase: 'o_',
	extension: 'jpg',
	directory: null,
	numslides: null
}

var sliderChange = function (k) {
	var m;
	for (var i = 0; i < 3; i++) {
		m = i + k;
		slidesVar[i].style.backgroundImage = 'url(images/' + config.filebase + m + '.' + config.extension +')';
	}
};

var slider = function () {
	var k = 0;

	sliderChange(k);
	
	slidePrev.addEventListener('click', function () {
		var m = k + 4;
		var xhr = new XMLHttpRequest();
    xhr.open('HEAD', 'http://localhost:3000/images/' + config.filebase + m + '.' + config.extension, false);
    xhr.send();

    if (xhr.status != "404") {
			console.log("File exists");
			k++;
			sliderChange(k);
		}
	});
	
	slideNext.addEventListener('click', function () {
		var m = k - 1;
		var xhr = new XMLHttpRequest();
    xhr.open('HEAD', 'http://localhost:3000/images/' + config.filebase + m + '.' + config.extension, false);
		xhr.send();

		if (xhr.status != "404") {
			console.log("File exists");
			k--;
			sliderChange(k);
		}
	});
}
slider();
//Раздаем классы

var htmlItems = document.querySelectorAll('.main-item');

var changeClass = function (typeText, typeElement) {

	if (typeText === 'Офис') {
		typeElement.classList.add('about__text--offise')
	}
	else if (typeText === 'Склад') {
		typeElement.classList.add('about__text--stock')
	}
	else if (typeText === 'Производство') {
		typeElement.classList.add('about__text--manufacture')
	}
	else if (typeText === 'Открытая площадка') {
		typeElement.classList.add('about__text--open')
	};

};

for (var i=0; i<htmlItems.length; i++) {

	var typeElement = htmlItems[i].querySelector('.about__text--type');
	var typeText = typeElement.textContent;

	changeClass(typeText, typeElement);
};

var iconImage = document.querySelector('.about__text');
var iconText = iconImage.textContent;

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
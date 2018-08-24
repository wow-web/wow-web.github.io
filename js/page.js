//Раздаем картинки

var el = document.querySelectorAll('.about');

var namesImage = {
	a : ['Буровая техника', 'Рябиновая', '1-й Тружеников переулок', 'Боровая', 'Рябиновая', 'Большая Бронная', 'Александровский завод'],
	b : ['1', '2', '3', '4', '5', '6', '7']
}

for (var i=0; i < el.length; i++) {
	var elName = el[i].querySelector('.about__title').textContent;
	for (var j=0; j < namesImage.a.length; j++) {
		if (elName === namesImage.a[j]) {
			el[i].style.backgroundImage = 'url(images/'+namesImage.b[j]+'-cover.jpg)';
		}
	}
}




//Раздаем классы

var htmlItems = document.querySelectorAll('.main-item');

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
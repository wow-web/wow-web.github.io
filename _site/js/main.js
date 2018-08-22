'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var popup = document.querySelector('.modal');
var popupOpen = document.querySelector('.top-line__button');
var popupClose = document.querySelector('.modal__button--close');
var form = popup.querySelector('form');
var name = popup.querySelector('[name=modal-name]');
var number = popup.querySelector('[name=modal-number]');

var isStorageSupport = true;
var storage = localStorage.getItem('name');

try {
	storage = localStorage.getItem('name'); 
}
catch (err) {
	isStorageSupport = false;
}

var onPopupEscPress = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		closePopup();
	}
};

var openPopup = function() {
	popup.classList.add('modal--show');

	if (storage) {
		name.value = storage;
		number.focus();
	}
	else {
		name.focus();
	};

	document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
	popup.classList.remove('modal--show');
	popup.classList.remove('modal-error');
	document.removeEventListener('keydown', onPopupEscPress);
};

popupOpen.addEventListener('click', function (evt) {
	evt.preventDefault();
	openPopup();
});

popupOpen.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
})

popupClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	closePopup();
});

popupClose.addEventListener('keydown', function (evt) {
	if(evt.keyCode === ENTER_KEYCODE){
		closePopup();
	}
});

form.addEventListener('submit', function (evt) {
	if (!name.value || !number.value) {
		evt.preventDefault();
		popup.classList.add('modal--error');
	}
	else {
		if (isStorageSupport) {
			localStorage.setItem('name', name.value);
		}
	}
});




var htmlItems = document.querySelectorAll('.main-item');


//Раздаем классы

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




//Раздаем data-атрибуты

var region = {
	a :	[
		['СПб', 'спб', 'СПБ', 'Санкт-Петербург','санкт-петербург','Санкт-петербург'],
		['Москва', 'москва', 'г. Москва', 'мск'],
		['Московская область', 'московская область','московская обл','московская обл.'],
		['Пушкин','пушкин','г.Пушкин','г. Пушкин','г.пушкин', 'г. пушкин']
	],
	b : ['spb', 'moscow', 'omoscow', 'pushkin']
};

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

var area = {
	a : [
		[10,70],
		[70,500],
		[500,1000],
		[1000,10000]
	],
	b : ['1', '2', '3', '4']
};


var getValue = function (i) {

		var text = [];
		var mass = [];
		var attributes = {
			type : '',
			adress : '',
			area : ''
		};

		attributes.type = htmlItems[i].querySelector('.about__text--type').textContent;

		text = htmlItems[i].querySelector('.about__text--adress').textContent;
		for (var j=0; j<text.length && text[j] !== ','; j++) {
			mass[j] = text[j];
		};
		attributes.adress = mass.join('');

		attributes.area = htmlItems[i].querySelector('.about__text--area').textContent;

		return attributes;

};

var recordAttributes = function (i, attributes) {
	var n = 0;
	var k;
	var l;

	for (k=0; k < region.a.length; k++) {
		for (l=0; l < region.a[k].length && n === 0; l++) {
			if (attributes.adress === region.a[k][l]) {
				htmlItems[i].setAttribute('data-region', region.b[k])
				n++;
			}
		}
	};

	n = 0;

	for (k=0; k < purpose.a.length; k++) {
		for (l=0; l < purpose.a[k].length && n === 0; l++) {
			if (attributes.type === purpose.a[k][l]) {
				htmlItems[i].setAttribute('data-purpose', purpose.b[k])
				n++;
			}
		}
	};

	n = 0;

	for (k=0; k < area.a.length; k++) {
		if (attributes.area >= area.a[k][0] && attributes.area < area.a[k][1]) {
			htmlItems[i].setAttribute('data-area', area.b[k])
		}
	};
};

var handOutAttributes = function () {

	var attributes = {};
	var i;

	for (i=0; i<htmlItems.length; i++) {
		attributes = getValue(i);
		recordAttributes(i, attributes);
	};

};

handOutAttributes();




//Форма сортировки

var sort = document.querySelector('.sort');
var sortButton = sort.querySelector('.button');
var optionValue = sort.querySelectorAll('.sort__select');
var deleted = 0;

var getSortValue = function (mass) {
	var i;
	var a = [];

	for (i=0; i<mass.length; i++) {
		a[i] = mass[i].value;
	}
	return a;
};

var test = function (values) {
	for (i=0; i<htmlItems.length; i++) {

		var regionAttribute = htmlItems[i].getAttribute('data-region');
		var purposeAttribute = htmlItems[i].getAttribute('data-purpose');
		var areaAttribute = htmlItems[i].getAttribute('data-area');

		if (!((regionAttribute === values[0] || values[0] === '0') && (purposeAttribute === values[1] || values[1] === '0') && (areaAttribute === values[2] || values[2] === '0'))) {
			htmlItems[i].style.display = 'none';
			deleted++;
			console.log(deleted);
		};
	};
};

var removeStyle = function () {

	for (var i = 0; i < htmlItems.length; i++) {
		htmlItems[i].style.display = '';
	};

	deleted = 0;

};

sortButton.addEventListener('click', function (evt) {

	var sortValues = [];

	evt.preventDefault();
	sortValues = getSortValue(optionValue);
	removeStyle();
	test(sortValues);
	if (htmlItems.length <= deleted) {
		console.log('Сейчас нет объектов под заданные параметры');
	}
});
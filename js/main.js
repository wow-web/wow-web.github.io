'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var isStorageSupport = true;
var storage = localStorage.getItem('name');

try {
	storage = localStorage.getItem('name'); 
}
catch (err) {
	isStorageSupport = false;
};




//Попап окно

var popup = document.querySelector('.modal');
var popupOpen = document.querySelector('.top-line__button');
var popupOpen2 = document.querySelector('.page-header__button');
var popupOpen3 = document.querySelector('.form__button');
var popupClose = document.querySelector('.modal__button--close');
var form = popup.querySelector('form');
var name = popup.querySelector('.modal__name');
var number = popup.querySelector('.madal__number');
var openPopup = function() {
	popup.classList.add('modal--show');

	// if (storage) {
	// 	name.value = storage;
	// 	number.focus();
	// }
	// else {
	// 	name.focus();
	// };

	document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
	popup.classList.remove('modal--show');
	popup.classList.remove('modal-error');
	document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function(evt) {
	if (evt.keyCode === ESC_KEYCODE) {
		closePopup();
	}
};

popupOpen.addEventListener('click', function (evt) {
	evt.preventDefault();
	openPopup();
});

popupOpen.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
});

popupOpen2.addEventListener('click', function (evt) {
	evt.preventDefault();
	openPopup();
});

popupOpen2.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
});

popupOpen3.addEventListener('click', function (evt) {
	evt.preventDefault();
	openPopup();
});

popupOpen3.addEventListener('keydown', function (evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
		openPopup();
	}
});

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


                                                          

//Раздаем картинки

// var el = document.querySelectorAll('.about');

// var namesImage = {
// 	a : ['Буровая техника', 'Рябиновая', '1-й Тружеников переулок', 'Боровая', 'Рябиновая', 'Большая Бронная', 'Александровский завод'],
// 	b : ['1', '2', '3', '4', '5', '6', '7']
// }

// for (var i=0; i < el.length; i++) {
// 	var elName = el[i].querySelector('.about__title').textContent;
// 	for (var j=0; j < namesImage.a.length; j++) {
// 		if (elName === namesImage.a[j]) {
// 			el[i].style.backgroundImage = 'url(images/'+namesImage.b[j]+'-cover.jpg)';
// 		}
// 	}
// }




var p = document.querySelector('.pagination');
var next = p.querySelector('.next');
var prev = p.querySelector('.prev');
var pagination = {
	m : 16,
	i : 1,
	mass : []
};

//Обработчик события "клик" на кнопку "Следующая страница"
next.addEventListener('click', function () {
	removeStyle();
	pagination.i++;
	paginator();
});

//Обработчик события "клик" на кнопку "Предыдущая страница"
prev.addEventListener('click', function () {
	removeStyle();
	pagination.i--;
	paginator();
});

//Функция разделения контента на страницы (по 16 элементов на каждой)
//Показываем 16 элементов соответствующей страницы
//Прячем кнопки "Следующая страница" и "Предыдущая страница"
//Если мы показали еще не все элементы, то показываем кнопку "Следующая страница"
//Если существуют элементы на предыдущей странице, то показываем кнопку "Предыдущая страница"
var paginator = function () {
	for (var j = pagination.m*(pagination.i-1); j < pagination.m*pagination.i && j < pagination.mass.length; j++) {
		pagination.mass[j].style.display = '';
	}

	next.classList.add('visualy-hidden');
	prev.classList.add('visualy-hidden');

	if (j < pagination.mass.length) {
		next.classList.remove('visualy-hidden');
	};

	if (pagination.i - 1 > 0) {
		prev.classList.remove('visualy-hidden');
	};
};




var htmlItems = document.querySelectorAll('.main-item');
var region = {
	a :	[
		['Санкт-Петербург', 'спб', 'СПБ', 'СПб','санкт-петербург','Санкт-петербург'],
		['Москва', 'москва', 'г. Москва', 'мск'],
		['Московская область', 'московская обл','московская область', 'Московская обл'],
		['г.Пушкин','пушкин','Пушкин','г. Пушкин','г.пушкин', 'г. пушкин']
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

// Функция получения значений i-того элемента
var getAttributeValues = function (i) {
	var textAdress = [];
	var attributes = {
		type : '',
		adress : '',
		area : ''
	};

	attributes.area = htmlItems[i].querySelector('.about__text--area').textContent;
	attributes.type = htmlItems[i].querySelector('.about__text--type').textContent;
	textAdress = htmlItems[i].querySelector('.about__text--adress').textContent;
	for (var i = 0; i < region.a.length; i++){
		if (textAdress.indexOf(region.a[i][0]) + 1) {
			attributes.adress = region.a[i][0];
		}
	};
	
	return attributes;
};

//Функция записи data-атрибутов в i-тый элемент
var recordAttributes = function (i, attributes) {
var n;
var k, l;

for (k = 0, n = 0; k < region.a.length; k++) {
	for (l = 0; l < region.a[k].length && n === 0; l++) {
		if (attributes.adress === region.a[k][l]) {
			htmlItems[i].setAttribute('data-region', region.b[k]);
			n++;
		}
	}
};

for (k = 0, n = 0; k < purpose.a.length; k++) {
	for (l = 0; l < purpose.a[k].length && n === 0; l++) {
		if (attributes.type === purpose.a[k][l]) {
			htmlItems[i].setAttribute('data-purpose', purpose.b[k]);
			n++;
		}
	}
};

for (k = 0, n = 0; k < area.a.length; k++) {
	if (attributes.area >= area.a[k][0] && attributes.area < area.a[k][1]) {
		htmlItems[i].setAttribute('data-area', area.b[k]);
	}
};
};

//Функция создания data-атрибутов из содержимого тегов
//Получаем значение тега
//Записываем соответствующий data-атрибут
var handOutAttributes = function () {
	var attributes = {};
	var i;

	for (i = 0; i < htmlItems.length; i++) {
		attributes = getAttributeValues(i);
		recordAttributes(i, attributes);
	};
};
handOutAttributes();



//В соответствии с содержимым тега добавляем класс
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
	}
	else if (typeText === purpose.a[4][0] || typeText === purpose.a[4][1]) {
		typeElement.classList.add('about__text--storeroom')
	}
	else if (typeText === purpose.a[5][0] || typeText === purpose.a[5][1]) {
		typeElement.classList.add('about__text--workshop')
	}
};

//Находим элементы с классом about__text--type
//Находим содержимое каждого из них
//Добавляем соответствующий класс элементу
var getClass = function () {
	for (var i = 0; i < htmlItems.length; i++) {	
		changeClass(htmlItems[i].querySelector('.about__text--type').textContent, htmlItems[i].querySelector('.about__text--type'));
	};
};
getClass();




var sort = document.querySelector('.sort');
var sortButton = sort.querySelector('.button');
var optionValue = sort.querySelectorAll('.sort__select');

var getSortValue = function (mass) {
	var a = [];

	for (var i = 0; i < mass.length; i++) {
		a[i] = mass[i].value;
	}

	return a;
};

var test = function (values) {
	pagination.mass.length = 0;

	for (var i = 0, j = 0; i < htmlItems.length; i++) {
		var regionAttribute = htmlItems[i].getAttribute('data-region');
		var purposeAttribute = htmlItems[i].getAttribute('data-purpose');
		var areaAttribute = htmlItems[i].getAttribute('data-area');

		if ((regionAttribute === values[0] || values[0] === '0') && (purposeAttribute === values[1] || values[1] === '0') && (areaAttribute === values[2] || values[2] === '0')) {
			pagination.mass[j] = htmlItems[i];
			j++;
		};
	};
};

var removeStyle = function () {
	for (var i = 0; i < htmlItems.length; i++) {
		htmlItems[i].style.display = 'none';
	};
};

sortButton.addEventListener('click', function (evt) {
	var sortValues = [];
	
	evt.preventDefault();
	pagination.mass.length = 0;
	pagination.i = 1;
	sortValues = getSortValue(optionValue);
	removeStyle();
	test(sortValues);
	paginator();
});

//Получаем введенные значения
//Прячем все элементы на странице
//Сравниваем полученные значения с data-атрибутами элементов
//Запускаем пагинацию под полученынне элементы
var main = function () {
	var sortValues = [];

	sortValues = getSortValue(optionValue);
	removeStyle();
	test(sortValues);
	paginator();
};
main();
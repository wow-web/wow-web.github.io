var openCalc = document.querySelector('.page-main__calc-btn');
var formCalc = document.querySelector('.page-main__calculation');


openCalc.addEventListener('click', function(e) {
    e.preventDefault();
    formCalc.style.display = 'block';
});
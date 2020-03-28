var openCalc = document.querySelector('.page-main__calc-btn');
var formCalc = document.querySelector('.page-main__calculation');

formCalc.style.display = 'none';

openCalc.addEventListener('click', function(e) {
    e.preventDefault();
    formCalc.style.display = 'block';
});
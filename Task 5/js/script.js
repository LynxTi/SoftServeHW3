'use strict'

const inputs = document.getElementsByTagName('input');
const circle = document.querySelector('.circle');
const button = document.querySelector('.header__button');

button.addEventListener('click', onClickButton);

function onClickButton() {
    circle.style.width = inputs[0].value + 'px';
    circle.style.height = inputs[0].value + 'px';
    circle.style.background = inputs[1].value;
}






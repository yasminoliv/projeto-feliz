// Pegar o elemento
// Botão que está sendo clicado
// Pegar o container de elementos

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 50


btnRight.addEventListener('click', function () {
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function () {
    pixels = pixels - 50;
    elements.style = `transform: translateX(${pixels}px)`;
});

const calculateDiscount = (price, discount) => (price * (100 - discount)) / 100;

const price = document.querySelector('#price__input');
const percentage = document.querySelector('#percentage__input');
const button = document.querySelector('.discount-calculator__button')
const output = document.querySelector('.discount-calculator__output');

const pDiscount = document.createElement('p');
button.addEventListener('click',()=>
{
    pDiscount.textContent = `El descuento producto con el descuento incluido cuesta : ${calculateDiscount(price.value,percentage.value)}$`;
output.appendChild(pDiscount);})

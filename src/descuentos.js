const calculateDiscount = (price, percentage) => (price * (100 - percentage)) / 100
const validateDiscount = (price, percentage) => {
    const validatedPercentage = ( !isNaN(percentage) && percentage >= 0 && percentage <= 100)
    const validatedPrice = (!isNaN(price) && price >= 0)
    return (validatedPrice && validatedPercentage)
}

const price = document.querySelector('#price__input');
const percentage = document.querySelector('#percentage__input');
const button = document.querySelector('.discount-calculator__button')
const output = document.querySelector('.discount-calculator__output');

const pDiscount = document.createElement('p');
button.addEventListener('click',()=>{
    const priceValue = parseInt(price.value);
    const percentageValue = parseInt(percentage.value)
    pDiscount.textContent = validateDiscount(priceValue, percentageValue)
        ? `El descuento producto con el descuento incluido cuesta : ${calculateDiscount(priceValue, percentageValue)}$`
        : `Porfavor ingresa un numero valido`

    output.appendChild(pDiscount);
});

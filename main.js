const inputPriceForPay = document.getElementById('price');
const inputNumberOfPeople = document.getElementById('people');
const inputTip = document.getElementById('tip');
const error = document.querySelector('.error');
const btnCount = document.querySelector('.count');
const spanCost = document.querySelector('.cost');
const pCostInfo = document.querySelector('.cost-info');

const countBill = () => {
    let bill = (parseFloat(inputPriceForPay.value) + (parseFloat(inputPriceForPay.value) * parseFloat(inputTip.value))) / parseInt(inputNumberOfPeople.value);
    pCostInfo.style.display = 'block';
    spanCost.textContent = `${bill.toFixed(2)} zł`;

}

const showBill = () => {
    if (inputPriceForPay.value === "" || inputNumberOfPeople.value === "" || inputTip.value == 0) {
        error.textContent = "Nie wprowadzono wartości !!!";
        pCostInfo.style.display = 'none';
    } else {
        error.textContent = "";
        countBill();
    }
}


btnCount.addEventListener('click', showBill);
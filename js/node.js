document.getElementById('phone-plus').addEventListener('click', function () {
    const phoneInput = document.getElementById('phone-input');
    const phoneInputText = parseInt(phoneInput.value);
    // phoneInput.value = phoneInputText + 1;
    const pricePhone = phoneInputText + 1;
    phoneInput.value = pricePhone;
    // phonePrice
    const phonePrice = document.getElementById('phone-price');
    const phonePriceText = parseInt(phonePrice.innerText)
    phonePrice.innerText = pricePhone * 1219

    a()



})
document.getElementById('phone-minus').addEventListener('click', function () {
    const phoneInput = document.getElementById('phone-input');
    const phoneInputText = parseInt(phoneInput.value);
    const pricePhone = phoneInputText - 1;
    if (phoneInput.value > 0) {
        phoneInput.value = pricePhone
    }
    //phone price
    const phonePrice = document.getElementById('phone-price');
    const phonePriceText = parseInt(phonePrice.innerText)
    phonePrice.innerText = phoneInput.value * 1219

    a()

})

//case
document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    const caseInputText = parseInt(caseInput.value)
    const caseInputPrice = caseInputText + 1
    caseInput.value = caseInputPrice;
    //case price
    const casePrice = document.getElementById('case-price')
    const casePriceText = parseInt(casePrice.innerText)
    casePrice.innerText = caseInputPrice * 59

    a()
})
//case minus
document.getElementById('case-minus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    const caseInputText = parseInt(caseInput.value)
    const caseInputPrice = caseInputText - 1
    if (caseInput.value > 0) {
        caseInput.value = caseInputPrice
    }

    const casePrice = document.getElementById('case-price')
    const casePriceText = parseInt(casePrice.innerText)
    casePrice.innerText = caseInput.value * 59


    a()
})
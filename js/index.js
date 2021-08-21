// add value
function addValue(idname, value) {
    const haveValueText = document.getElementById(idname + '-cost');
    haveValueText.innerText = value;
    totalCost();
    getTotalValue();
}

// get subtotal
function getTotal(item) {
    const totalText = document.getElementById(item + '-cost');
    const total = totalText.innerText;
    const Total = parseInt(total);
    return Total;
}
//total cost
function totalCost() {
    const memoryCost = getTotal('memory');
    const storageCost = getTotal('storage');
    const delivaryCost = getTotal('delivary');
    const fixedCost = getTotal('fixed');
    const subTotalCost = fixedCost + memoryCost + storageCost + delivaryCost;
    document.getElementById('subtotal-cost').innerText = subTotalCost;
    return subTotalCost;
}

//get total
function getTotalValue() {
    const getTotalText = document.getElementById('final-cost');
    getTotalText.innerText = document.getElementById('subtotal-cost').innerText;
    const getTotal = getTotalText.innerText;
    return getTotal;
}

//get final
document.getElementById('apply-btn').addEventListener('click', function() {
    const inputText = document.getElementById('promo-input');
    const inputValue = inputText.value;
    const previousValue = getTotalValue();
    if (inputValue == 'stevekaku') {
        document.getElementById('final-cost').innerText = parseFloat(previousValue) - (parseFloat(previousValue) * 0.2);
    } else if (inputValue == '') {
        document.getElementById('error-message').innerText = '';
    } else {
        document.getElementById('error-message').innerText = "Can't find this promo-code";
    }
    document.getElementById('promo-input').value = '';
})

//get value by pressing button

//memory button
document.getElementById('8gb-btn').addEventListener('click', function() {
    addValue('memory', 0);
});
document.getElementById('16gb-btn').addEventListener('click', function() {
    addValue('memory', 80);
});

//storage button
document.getElementById('256gb-btn').addEventListener('click', function() {
    addValue('storage', 0);
});
document.getElementById('512gb-btn').addEventListener('click', function() {
    addValue('storage', 100);
});
document.getElementById('1tb-btn').addEventListener('click', function() {
    addValue('storage', 150);
});

//delivary button
document.getElementById('freedelivary-btn').addEventListener('click', function() {
    addValue('delivary', 0);
});
document.getElementById('costlydelivary-btn').addEventListener('click', function() {
    addValue('delivary', 20);
});
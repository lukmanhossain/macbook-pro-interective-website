const buttons = document.getElementsByTagName('button');
let flag = false;

function updateTotal() {
    const basePrice = 1299;
    const memoryCost = parseInt(document.getElementById('memory-cost').textContent);
    const storageCost = parseInt(document.getElementById('storage-cost').textContent);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').textContent);
    return basePrice + memoryCost + storageCost + deliveryCost;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        if (buttons[i].id === '8gb-memory') {
            newCustomization("memory-cost", 0);
        }
        else if (buttons[i].id === '16gb-memory') {
            newCustomization("memory-cost", 180);
        }
        else if (buttons[i].id === '256gb-storage') {
            newCustomization("storage-cost", 0);
        }
        else if (buttons[i].id === '512gb-storage') {
            newCustomization("storage-cost", 100);
        }
        else if (buttons[i].id === '1tb-storage') {
            newCustomization("storage-cost", 180);
        }
        else if (buttons[i].id === 'late-delivery') {
            newCustomization("delivery-cost", 0);
        }
        else if (buttons[i].id === 'early-delivery') {
            newCustomization("delivery-cost", 20);
        }
        else {
            PromoCode();
        }
    })
}

function PromoCode() {
    const inputField = document.getElementById('input-field');
    const Apply = inputField.value;

    inputField.value = '';

    if (Apply === '') return;
    else if (Apply === "stevekaku") {
        flag = true;
        const totalPrice = document.getElementById('total-price');
        const userPayment = document.getElementById('user-payment');
        const before = parseInt(totalPrice.textContent);
        userPayment.textContent = before - (before * 0.2);
    }
    else {
        flag = false;
    }
}

function newCustomization(id, cost) {
    const now = document.getElementById(id);
    now.textContent = cost;
    const totalCost = updateTotal();
    const totalPrice = document.getElementById('total-price');
    totalPrice.textContent = totalCost;

    if (flag) {
        const userPayment = document.getElementById('user-payment');
        const before = parseInt(totalPrice.textContent);
        userPayment.textContent = before - (before * 0.2);
    }
    else {
        const userPayment = document.getElementById('user-payment');
        const before = parseInt(totalPrice.textContent);
        userPayment.textContent = before;
    }
}
// -------------------------Left Side Photo Section interactive Start------------------
const bigImageLocation = document.getElementById('big-image');
function setPhoto(photoNumber){
    bigImageLocation.src = 'images/mac'+photoNumber+'.jpeg';
}

document.getElementById('first-image').addEventListener('click',function(){
    setPhoto('1');
});
document.getElementById('second-image').addEventListener('click',function(){
    setPhoto('2');
});
document.getElementById('third-image').addEventListener('click',function(){
    setPhoto('3');
});
// -------------------------Left Side Photo Section interactive End-------------------

// ----------------- Buttons and Price Update Handle Start ----------------------
// get Memory cost , storage cost and Delivery charge Field 
const extraMemoryCostField = document.getElementById('memory-cost');
const extraStorageCostField = document.getElementById('storage-cost');
const deliveryChargeField = document.getElementById('delivery-charge');

//Extra Memory Cost function 
function memoryCost(cost){
    extraMemoryCostField.innerText = cost;
    calculation();
}
//Extra Storage Cost function
function storageCost(cost){
    extraStorageCostField.innerText = cost;
    calculation();
}
//Delivery Charge function
function deliveryCharge(charge){
    deliveryChargeField.innerText = charge;
    calculation();
}
// ------------------------------------Memory Buttons Hadle 
document.getElementById('eight-gb-btn').addEventListener('click',function(){
    memoryCost('0');
});
document.getElementById('sixteen-gb-btn').addEventListener('click',function(){
    memoryCost('180');
});

// -----------------------------------Storage Buttons Handle
document.getElementById('two-hundrad-fifty-six-gb-btn').addEventListener('click',function(){
    storageCost('0');
});
document.getElementById('five-hundrad-twelve-gb-btn').addEventListener('click',function(){
    storageCost('100');
});
document.getElementById('one-tera-byte-btn').addEventListener('click',function(){
    storageCost('180');
});
//-------------------------------- Delivery Charge Button Handle
document.getElementById('free-prime-delivery').addEventListener('click',function(){
    deliveryCharge('0');
});
document.getElementById('immediate-delivery').addEventListener('click',function(){
    deliveryCharge('20');
});
// ----------------- Buttons and Price Update Handle End ----------------------

//-----------------------------------Calculation Start ------------------------------
function calculation(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;

    const totalPrice = parseFloat(bestPrice)+ parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCharge);

    //Set total price in Total price and Total Field
    const total = document.getElementById('total-price');
    const finalPrice = document.getElementById('final-price');
    total.innerText = totalPrice;
    finalPrice.innerText = totalPrice;

    return totalPrice;
}
calculation();
//-----------------------------------Calculation End ----------------------------------

//-------------------------------- Promo Code Handle Start-----------------------------
document.getElementById('promo-apply-btn').addEventListener('click',function(){
    const promoField = document.getElementById('promo-code-field');
    const promoFieldValue = promoField.value;
    const promoCode = 'stevekaku';

    //Get total price
    const totalProductPrice = calculation();
    //Make 20% Discount
    const discount = (20 * totalProductPrice) / 100;
    const withOutDiscount = totalProductPrice - discount;
    //Show message
    const successMessage = document.getElementById('notify-success');
    const ErrorMessage = document.getElementById('notify-fail');
    //Apply Promo code
    if(promoFieldValue.toLowerCase() == promoCode.toLowerCase()){
        document.getElementById('final-price').innerText = withOutDiscount;
        promoField.value = '';
        successMessage.style.display = 'block';
        ErrorMessage.style.display = 'none';
    }else{
        promoField.value = '';
        successMessage.style.display = 'none';
        ErrorMessage.style.display = 'block';
    }
});
//-------------------------------- Promo Code Handle End-----------------------------
'use strict';

// let tip = bill >= 50 && bill <= 300  ? bill * 0.15 : bill * 0.20;
// console.log(tip);

// console.log(`The bills was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);


// Senior Discount Calculator at a Restaurant
// let numberOfSenior, discount, total;

// let bill = prompt('Enter the bill');
// bill = Number(bill);

// let numberOfPax = prompt('Enter number of pax');
// numberOfPax = Number(numberOfPax);

// let isSenior = prompt('with senior discount? yes or no');

// if (isSenior === 'yes'){
//     numberOfSenior = prompt('Number of Senior Citizens:');
//     numberOfSenior = Number(numberOfSenior);
//     discount = ((bill / numberOfPax) * numberOfSenior) * 0.20;
//     total = bill - discount;
// } else if (isSenior === 'no') {
//     total = bill;
// } else {
//     alert ('Invalid');
// }

// document.getElementById("totalBill").innerHTML = bill;
// document.getElementById("numberOfPax").innerHTML = numberOfPax;
// document.getElementById("isSenior").innerHTML = isSenior;
// document.getElementById("numberOfSenior").innerHTML = numberOfSenior;
// document.getElementById("totalDiscount").innerHTML = discount;
// document.getElementById("discountedBill").innerHTML = total;


//create a function that will calculate the senior discount
let bill;
let numberOfPax;
let isSenior = 'yes';
let numberOfSenior;
let discount;
let totalBill;

function calculateSenior(bill, numberOfPax, numberOfSenior) {
    discount = ((bill / numberOfPax) * numberOfSenior) * 0.20;
    totalBill = bill - discount;
    return totalBill;
}

function restaurantBillCalculation (){
    bill = prompt('Enter the bill');
    bill = Number(bill);
    numberOfPax = prompt('Enter number of pax');
    numberOfPax = Number(numberOfPax);
    isSenior = prompt('Do you have senior citizens with you? yes or no.')

    if (isSenior === 'yes') {
        numberOfSenior = prompt('Number of senior citizens:');
        numberOfSenior = Number(numberOfSenior);
        calculateSenior(bill,numberOfPax,numberOfSenior)
        console.log('Total Bill: ' + totalBill);
    }else if (isSenior === 'no') {
        numberOfSenior = 0;
        totalBill = bill;
        discount = 0;
        console.log('Total Bill: ' + totalBill);
    }
}

restaurantBillCalculation();
let arr = [];

function saveToArray (){
    bill = arr.push(bill, numberOfPax, isSenior, numberOfSenior, discount, totalBill);
    console.log(arr);
}

saveToArray();

document.getElementById("totalBill").innerHTML = bill;
document.getElementById("numberOfPax").innerHTML = numberOfPax;
document.getElementById("isSenior").innerHTML = isSenior;
document.getElementById("numberOfSenior").innerHTML = numberOfSenior;
document.getElementById("totalDiscount").innerHTML = discount;
document.getElementById("discountedBill").innerHTML = totalBill;


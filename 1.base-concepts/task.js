"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d < 0) {
        return arr;
    } else if (d === 0) {
        arr[0] = -b / (2 * a)
    } else if (d > 0) {
        arr[0] = (-b + Math.sqrt(d)) / (2 * a);
        arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthPercent = percent / 100 / 12;
    let debt = amount - contribution;
    let monthPayment = debt * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
    let totalPayment = monthPayment * countMonths;
    return Number(totalPayment.toFixed(2));
}
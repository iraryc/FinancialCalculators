"use strict"

function calculateMortgage(P, annualRate, L_years) {
    let L_months = L_years * 12; // Convert loan length from years to months
    let i_monthly = annualRate / 12; // Convert annual interest rate to a monthly rate

    // Calculate monthly payment
    let monthlyPayment = P * (i_monthly / (1 - Math.pow((1 + i_monthly), -L_months)));

    return monthlyPayment;
}
// Example usage:
let principal = 200000; // Principal amount ($200,000)
let annualRate = 0.05; // Annual interest rate (5%)
let loanLengthYears = 30; // Length of the loan in years (30 years)

let monthlyPayment = calculateMortgage(principal, annualRate, loanLengthYears);
console.log("Monthly Payment: $" + monthlyPayment.toFixed(2));

function ClickTheCalcButton() {
    let loanAmount = Number (document.getElementById('loanAmount').value);
    let interestRate = Number (document.getElementById('interestRate').value);
    let loanTerm = Number (document.getElementById('loanTerm').value);

    let monthlyPayment = calculateMortgage(loanAmount, interestRate, loanTerm);
    let totalPayment = monthlyPayment * (loanTerm*12); 
    
// console.log("Monthly Payment: $" + monthlyPayment.toFixed(2));
    document.getElementById('monthlyPayments').value = monthlyPayment.toFixed(2);
    document.getElementById('totalPayments').value = totalPayment.toFixed(2);

}

//CD Calculator 
function calculateCD(Prin, a_rate, T_years) {
    // let T_months = T_years * 12; //This will calcualate the loan in months and not years
    let percentRate1 = a_rate/100

    let cdMonthlyPay = Prin * Math.pow(1 + (percentRate1 / 365), 365 * T_years);

    return cdMonthlyPay;
}

let deposit = 1000;
let percentRate = 1.75;
let yearTerm = 5;

let cdMonthlyPay = calculateCD (deposit, percentRate, yearTerm);
let totalBalance = cdMonthlyPay;
let totalInterest = totalBalance - deposit;

function ClickTheCDButton() {
    let depositAmount = Number (document.getElementById('depositAmount').value);
    let interestRate = Number (document.getElementById('interestRate').value);
    let loanTerm = Number (document.getElementById('loanTerm').value);

    cdMonthlyPay = calculateCD (depositAmount, interestRate, loanTerm);
    totalBalance = cdMonthlyPay;
    totalInterest = totalBalance - depositAmount;
    
    document.getElementById('totalBalance').value = totalBalance.toFixed(2);
    document.getElementById('totalInterest').value = totalInterest.toFixed(2);

}
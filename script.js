"use strict"

function calculateMortgage(P, annualRate, L_years) {
    let L_months = L_years * 12; // Convert loan length from years to months
    let i_monthly = annualRate / 12; // Convert annual interest rate to a monthly rate

    // Calculate monthly payment
    let monthlyPayment = P * (i_monthly / (1 - Math.pow((1 + i_monthly), -L_months)));

    return monthlyPayment;
}

function calculateCD(){
    
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

function ClickTheCDButton() {

}
// ex: 1 f_to_c
function convertFtoC(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}
console.log(convertFtoC(212));
console.log(convertFtoC(90));
console.log(convertFtoC(72));
console.log(convertFtoC(32));
console.log(convertFtoC(0));
console.log(convertFtoC(-40));

// ex:2 c_to_f
function convertCtoF(celsius){
    let fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}
console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-7));
console.log(convertCtoF(-40));

// ex: 3 = tax_functions
function getSocSecTax(grossPay){
    return grossPay * 0.062
}

function getMedicareTax(grossPay){
    return grossPay * 0.0145
}

function getFederalTax(grossPay, withholdingCode){
    let taxRate;

    if(withholdingCode === 0){
        taxRate =0.23
    } else if(withholdingCode ===1){
        taxRate =0.21
    } else if(withholdingCode ===2){
        taxRate =0.195
    } else if(withholdingCode ===3){
        taxRate =0.185
    } else if(withholdingCode >=4){
        taxRate = 0.18 - (withholdingCode -4) * 0.005
    }
    return grossPay * taxRate
}
console.log(getSocSecTax(750));  
console.log(getMedicareTax(1550)); 
console.log(getFederalTax(1100, 6))
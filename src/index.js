import validator from './validator.js';


let creditCardNumber = document.getElementById('dnumber').value;

document.getElementById('dnumber').addEventListener("input", function(event) {
    const inputDnumber = event.target.value;

     if (creditCardNumber.length < inputDnumber.length) {
        creditCardNumber = creditCardNumber + inputDnumber.slice(-1);
    }else{
        creditCardNumber = creditCardNumber.slice(0,-1) ;
    }
    
    let convertedNumber = validator.maskify(creditCardNumber);
    document.getElementById('dnumber').value=convertedNumber;
});
 

let erdf = document.getElementById('confirm').addEventListener("click", function() {
    validator.isValid(creditCardNumber)
    
    
});




         


  






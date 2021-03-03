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
 

document.getElementById('confirm').addEventListener("click", function() {
    let validatedNumber = validator.isValid(creditCardNumber);

    if (validatedNumber== true) {
        location.href ="/src/page4.html";
    } else {
        alert ('Su tarjeta es inválida, por favor verifíquela');
    }    
});




         


  






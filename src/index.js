import validator from './validator.js';


var creditCardNumber = document.getElementById('dnumber').value;

document.getElementById('dnumber').addEventListener("input", function(event) {
    let input = event.target.value;
    creditCardNumber = creditCardNumber + input.slice(-1);
    let klcfb = validator.maskify(input);
    document.getElementById('dnumber').value=klcfb;
    
    console.log(klcfb)
});
 

let erdf = document.getElementById('confirm').addEventListener("click", function() {validator.isValid(creditCardNumber)});




         


  






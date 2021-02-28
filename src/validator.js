const validator = {
  isValid : function isValid(arrayNumber){
    arrayNumber.split('').reverse();
    let sumaTotal= 0;
      for (let n = 0; n < arrayNumber.length; n++) { 
        if ((n%2)==1){
            let m = arrayNumber[n]*2;
              if (m>=10) {
                m=(m-10)+1; 
              } 
            sumaTotal=sumaTotal+m;              
        } else{ 
            let l= arrayNumber[n];
            let nuevo = parseInt(l);
            sumaTotal=sumaTotal+nuevo;
          } 
      } 
      if ((sumaTotal%2)==0){
        return (true)
      } else {
        return (false)
      }
    },

  maskify : function maskify(readCardNumber){  
    if (readCardNumber.length<4) {
      return readCardNumber
    }                                  
    let lastFour = readCardNumber.substr(-4);
    let firstnNumber = readCardNumber.slice(0, readCardNumber.length-4).replace(/[0-9]/g, "#");
    return firstnNumber+lastFour;
  } 
};

export default validator;

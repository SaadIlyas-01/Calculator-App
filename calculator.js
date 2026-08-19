let calculation = '';
   
    displayCalculation(); 
    
    function updateCalculation(value) {
      calculation += value;

      displayCalculation(); 

    }
    function displayCalculation(){
              document.querySelector('.js-msg').innerHTML =  calculation;
    }
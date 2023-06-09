const screen = document.querySelector('#screen');

const buttons = document.querySelectorAll('.btn');

let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click',() => {
         const buttonText = button.innerText;

          // If the button is a number or decimal point

    if(!isNaN(parseInt(buttonText)) || buttonText === '.')
    {
      if(operator==='')
      {
        num1 = num1 + buttonText;
        screen.value = num1;
      }

      else{
        num2 = num2 + buttonText;
        screen.value = num2;
      }
     
    }

    // If the button is an operator
   
    if (['+', '-', '*', '/'].includes(buttonText)) {
        operator = buttonText;
      }
  
    if(buttonText === '=')
    {
        let result;

        switch(operator){
             
                   case '+':
                   result = parseFloat(num1) + parseFloat(num2);
                   break;

                    case '/':
                    result = parseFloat(num1) / parseFloat(num2);
                    break;
                    
                    case '*':
                    result = parseFloat(num1) * parseFloat(num2);
                    break;

                    case '-':
                    result = parseFloat(num1) - parseFloat(num2);
                    break;

        }

        screen.value = result;

        num1 = result.toString();
        num2 = '';
        operator = '';
    }


    if(buttonText === 'C')
    {
      screen.value = 0;
      num1 = 0;
      num2 = 0;
      operator = '';

    }

    });
});


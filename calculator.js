/*function calculator() {
    let number1 = ((document.querySelector('.input1')).value);
    //document.querySelector('.js-output').innerHTML = `${number1}`
    let numberOutput=  document.querySelector('.js-output').innerHTML= `${number1}`;

    console.log(numberOutput);

    // let number2 = ((document.querySelector('.input2')).value);
    // document.querySelector('.js-output').innerHTML = `${number2}`
}
let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  updateResult();
}

function appendOperator(operator) {
  currentExpression += operator;
  updateResult();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateResult();
  } catch (error) {
    currentExpression = '';
    updateResult('Error');
  }
}

function clearResult() {
  currentExpression = '';
  updateResult();
}

function updateResult(value = '') {
  document.getElementById('result').value = value || currentExpression;
}
*/
const button = document.getElementById('myButton').innerHTML;
console.log(button)

// Add an event listener to the button for the 'click' event
button.addEventListener('click', function() {
  // Code to be executed when the button is clicked
  console.log('Button clicked!');
});
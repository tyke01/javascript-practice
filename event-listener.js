const button = document.getElementById('myButton');

button.addEventListener('click', function () {
    console.log('Button clicked!');
});

function testUnit() {
    let unit = document.getElementById('calc-test').innerHTML;
    console.log(unit)
    document.getElementById('text1').innerHTML = unit

    let unit2 = document.getElementById('calc-test2').innerHTML;
    console.log(unit2)
    document.getElementById('text1').innerHTML = unit2
}

let expression = '';

function appendNumber(number) {
    expression += number;

}
function appendOperator(operator) {
    expression += operator;
}
function calculate() {
    appendNumber();
    appendOperator();

    if (operator==='/'){
        number/number;
        document.getElementById('display1').innerHTML= number;
    }
}
function updateResult() {

}

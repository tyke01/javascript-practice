/*const button = document.getElementById('myButton');

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
}*/


/*
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

}
function updateResult() {

}*/
/*
let grade = 'B';
switch(grade){
    case 'A':
        console.log('good job');
        break;
    case 'B':
        console.log('pretty nice');
        break;

    case 'c':
        console.log('improve');
        break;

    default:
        console.log(grade, 'is not a letter grade. ')

}
*/
const dropdownButton = document.getElementById('dropbtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('mouseover', function () {
    dropdownMenu.classList.toggle('show');
})

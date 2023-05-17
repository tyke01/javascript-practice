/*let firstNme= 'cyborg';
let age  = 100;
let student= false;

console.log('hellow', firstNme);
console.log('you are', age, 'yers old');
console.log('Enrolled: ', student);

document.getElementById('1').innerHTML= 'hellow '+ firstNme;
document.getElementById('2').innerHTML= 'you are '+ age+ ' yers old my man';
document.getElementById('3').innerHTML= 'Enrolled: '+ student

let students= 21
let extraStudents= students%2;

console.log(extraStudents);

let userName= prompt('whatis your name?');
console.log(userName);
document.getElementById('my-button').onclick = function () {
    username = document.getElementById('my-text').value;
    console.log(username)
    document.getElementById('my-label').innerHTML = 'hello ' + username
}

const pi = 4.142;20
let radius;
let curcumference;
2
radius = prompt('enter the radius of s circle');
radius = Number(radius);

curcumference = 2 * pi * radius;
console.log('the circumference of the circle is: ' + curcumference)

let a;
let b;
let c;

a = prompt('enter side a');
a = Number(a);

b = prompt('enter side b');
b = Number(b);

c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));

console.log('side c is: ' + c);



 function sideA(){
     let a= document.getElementById('alabel').value;
     a = Number(a);
 }
 function sideB(){
    let b= document.getElementById('blabel').value;
    b = Number(b);
 }
let a;
let b;
let c;
function calculate() {

    a = document.getElementById('AtextBox').value;
    a = Number(a);
    b = document.getElementById('BtextBox').value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById('Coutput').innerHTML = 'side c is: ' + c;
    console.log(c)
}*/
let count = 0;

function decreasCounter() {
    document.getElementById('decrease');
    count -= 1;
    document.getElementById('Coutput').innerHTML = count;
    console.log(count)
}
function increaseCounter(){
    document.getElementById('increase');
    count += 1;
    document.getElementById('Coutput').innerHTML = count;
    console.log(count);   
}
function reset(){
    count= 0;
    document.getElementById('Coutput').innerHTML= count;
}
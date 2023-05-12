let value = 0;

function sayHello() {
  console.log("cart quantity:" + 0);
}
function cart() {
  value++;
  console.log("cart quantity:" + value);
}
function addTwo(){
  value+=2;
  console.log('cart quantity:' + value);
}
function addThree(){
  value+=3;
  console.log('cart quantity:' + value);
}
function resetCart(){
  value=0;
  console.log('cart was cleared')
  console.log('cart quantity:' + value);
}

let compMove = '';
function rand1() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        compMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        compMove = 'paper';

    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        compMove = 'scissors';
    }
}
let result = '';
function Rock() {
    rand1();

    if (compMove === 'rock') {
        result = 'it\'s a tie';
    }
    else if (compMove === 'paper') {
        result = 'you lose fucker !!!';
    }
    else if (compMove === 'scissors') {
        result = 'you win!!';
    }
    alert(`you picked rock. computer picked ${compMove}. ${result}`);
}

function Paper() {
    rand1();
    if (compMove === 'rock') {
        result = 'you win !!!';
    }
    else if (compMove === 'paper') {
        result = 'it\'s a tie';
    }
    else if (compMove === 'scissors') {
        result = 'you lose fucker!!';
    }
    alert(`you picked paper. computer picked ${compMove}. ${result}`);
}
function scissors() {
    rand1();
    if(compMove==='rock'){
        result='you lose fucker!!!';
    }
    else if (compMove==='paper'){
        result='you win';
    }
    else if(compMove==='scissors'){
        result='it\'s a tie'
    }
    alert(`you picked scissors. computer picked ${compMove} ${result}`)
}
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

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
    }
};
let result = '';
let playerMove = '';
function choice(playerMove) {
    rand1();
    //choice 1
    if (playerMove === 'rock') {
        if (compMove === 'rock') {
            result = 'it\'s a tie';
        }
        else if (compMove === 'paper') {
            result = 'you lose fucker 🖕🖕😂!!!';
        }
        else if (compMove === 'scissors') {
            result = 'you win !!!';
        }
    }

    //choice 2
    if (playerMove === 'paper') {
        if (compMove === 'rock') {
            result = 'you win !!!';
        }
        else if (compMove === 'paper') {
            result = 'it\'s a tie';
        }
        else if (compMove === 'scissors') {
            result = 'you lose fucker 🖕🖕😂 !!!';
        }
    }

    //choice 3
    if (playerMove === 'scissors') {
        if (compMove === 'rock') {
            result = 'you lose fucker 🖕🖕😂 !!!'
                ;
        }
        else if (compMove === 'paper') {
            result = 'you win !!!';
        }
        else if (compMove === 'scissors') {
            result = 'it\'s a tie'
        }
    }

    //updating results
    if (result === 'you win !!!') {
        score.wins += 1;
    }
    else if (result === 'you lose fucker 🖕🖕😂 !!!') {
        score.losses += 1;
    }
    else if (result === 'it\'s a tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    updateResult();
    updateMoves();
    function updateScore() {
        document.querySelector('.js-score')
            .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    }
    function updateResult() {
        document.querySelector('.js-result')
            .innerHTML = `${result}`
    }
    function updateMoves() {
        document.querySelector('.js-moves')
            .innerHTML = `you: <img class="move-icon" src="thumbnails/icons8-${playerMove}.png" alt="">
            computer: <img class="move-icon" src="thumbnails/icons8-${compMove}.png" alt="">
           `;

    }

}
function resetScore() {
    rand1();
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
    document.querySelector('.js-result')
        .innerHTML = `the score has been reset`;
    updateScore();
}
updateScore();
updateResult();
updateMoves();

let isAutoPlaying= false;

let intervalID;
function autoplay() {
    if(!isAutoPlaying){
       intervalID= setInterval(
            function () {
                const playerMove = rand1()
                choice(playerMove);
            }, 1000
        );
        isAutoPlaying= true;
    }
    else{
        clearInterval(intervalID);
        isAutoPlaying= false
    }
 
}



















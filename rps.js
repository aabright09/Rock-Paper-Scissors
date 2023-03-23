function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(ps, cs) {
    if (ps === cs) {
        return '0';
    } else {
        if (
            (ps === 'Rock' && cs === 'Scissors') ||
            (ps === 'Scissors' && cs === 'Paper') ||
            (ps === 'Paper' && cs === 'Rock')
        ) {
            return '1';
        } else {
            return '2';
        }
    }
}

function setImage(player, computer) {
    const choice = document.querySelectorAll('.choice');

    choice.forEach((element) => {
        element.textContent = '';
        element.classList.remove(element.classList[1]);
    });

    if (player === 'Rock') {
        choice[0].style.transform = 'scaleX(-1)';
    } else {
        choice[0].style.transform = 'scaleX(1)';
    }

    if (computer === 'Rock') {
        choice[1].style.transform = 'scaleX(1)';
    } else {
        choice[1].style.transform = 'scaleX(-1)';
    }

    choice[0].classList.add(`${player.toLowerCase()}`);
    choice[1].classList.add(`${computer.toLowerCase()}`);
}

function startGame(playerChoice) {
    const circles = document.querySelectorAll('.circle');
    const currentRound = document.querySelector('#current-round');
    const playerImg = document.querySelectorAll('.player');
    const finalResult = document.querySelector('.final-result');

    if (roundCount === 5) {
        roundCount = 1;
        score = [0, 0];
        circles.forEach((circle) => {
            circle.style.backgroundColor = 'gray';
        });
        playerImg.forEach((player) => {
            player.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });
        finalResult.textContent = '';
    } else {
        roundCount++;
    }

    currentRound.textContent = `round ${roundCount}`;

    const gameLog = document.querySelector('.log');
    const currentRoundCircle = document.querySelector(`#round-${roundCount}`);
    const scoreCounter = document.querySelectorAll(`.score`);

    playerChoice =
        playerChoice.charAt(0).toUpperCase() +
        playerChoice.substring(1, playerChoice.length).toLowerCase();

    let computerChoice = computerPlay();
    let result = playRound(playerChoice, computerChoice);
    setImage(playerChoice, computerChoice);

    if (result === '0') {
        gameLog.textContent = `Tie! Both played ${playerChoice}.`;
        scoreCounter[0].textContent = score[0];
        scoreCounter[1].textContent = score[1];
        currentRoundCircle.style.backgroundColor = '#f2f237';
    } else if (result === '1') {
        gameLog.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        scoreCounter[0].textContent = ++score[0];
        scoreCounter[1].textContent = score[1];
        currentRoundCircle.style.backgroundColor = '#47c847';
    } else {
        gameLog.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        scoreCounter[0].textContent = score[0];
        scoreCounter[1].textContent = ++score[1];
        currentRoundCircle.style.backgroundColor = '#a21d1d';
    }

    if (roundCount === 5) {
        if (score[0] > score[1]) {
            playerImg[0].style.backgroundColor = 'rgba(43, 136, 0, 0.6)';
            finalResult.textContent = `Final Result: You Win!`;
        } else if (score[1] > score[0]) {
            playerImg[1].style.backgroundColor = 'rgba(43, 136, 0, 0.6)';
            finalResult.textContent = `Final Result: You Lose!`;
        } else {
            finalResult.textContent = `Final Result: Tie!`;
            playerImg.forEach((element) => {
                element.style.backgroundColor = 'rgba(189, 124, 39, 0.6)';
            });
        }
    }
}

let score = [0, 0];
let roundCount = 0;
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        startGame(btn.classList[1]);
    });
});
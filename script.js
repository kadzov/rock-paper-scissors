function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  return number === 1 ? 'Rock'
    : number === 2 ? 'Paper'
      : 'Scissors';
}
let player = 0;
let computer = 0;
let i = 0;
function playRound(playerSelection, computerSelection) {
  if (i < 5) {
    ++i;
    if (playerSelection === 'Rock' && computerSelection === 'Paper'
      || playerSelection === 'Scissors' && computerSelection === 'Rock'
      || playerSelection === 'Paper' && computerSelection === 'Scissors') {
      res.textContent = `Round ${i}\nYou Lose! ${computerSelection} beats ${playerSelection}\nPlayer: ${player}, Computer: ${++computer}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'
      || playerSelection === 'Rock' && computerSelection === 'Scissors'
      || playerSelection === 'Scissors' && computerSelection === 'Paper') {
      res.textContent = `Round ${i}\nYou Win! ${playerSelection} beats ${computerSelection}\nPlayer: ${++player}, Computer: ${computer}`;
    } else {
      res.textContent = `Round ${i}\nDraw!\nPlayer: ${++player}, Computer: ${++computer}`;
    }
  } else {
    res.textContent = player > computer ? 'You Win!'
      : player < computer ? 'You Lose!'
        : 'Draw!';
  }
}

const res = document.querySelector('div');
res.setAttribute('style', 'white-space: pre;');
const rock = () => playRound('Rock', computerPlay());
const paper = () => playRound('Paper', computerPlay());
const scissors = () => playRound('Scissors', computerPlay());

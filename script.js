function computerPlay() {
  let number = Math.floor(Math.random() * 3) + 1;
  return number === 1 ? 'Rock'
    : number === 2 ? 'Paper'
      : 'Scissors';
}
let player = 0;
let computer = 0;
function playRound(playerSelection, computerSelection) {
  if (player < 5 && computer < 5) {
    if (playerSelection === computerSelection) {
      res.textContent = `Draw!\nPlayer: ${++player}, Computer: ${++computer}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'
      || playerSelection === 'Rock' && computerSelection === 'Scissors'
      || playerSelection === 'Scissors' && computerSelection === 'Paper') {
      res.textContent = `You Win! ${playerSelection} beats ${computerSelection}\nPlayer: ${++player}, Computer: ${computer}`;
    } else {
      res.textContent = `You Lose! ${computerSelection} beats ${playerSelection}\nPlayer: ${player}, Computer: ${++computer}`;
    }
  }
  if (player === 5 || computer === 5) {
    res.textContent += player > computer ? '\nYou Win!'
      : player < computer ? '\nYou Lose!'
        : '\nDraw!';
    player = 6;
    computer = 6;
  }
}

const res = document.querySelector('div');
res.setAttribute('style', 'white-space: pre;');
const rock = () => playRound('Rock', computerPlay());
const paper = () => playRound('Paper', computerPlay());
const scissors = () => playRound('Scissors', computerPlay());

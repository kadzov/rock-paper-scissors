function game() {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    function computerPlay() {
      let number = Math.floor(Math.random() * 3) + 1;
      return number === 1 ? 'ROCK'
        : number === 2 ? 'PAPER'
          : 'SCISSORS';
    }
    function playRound(playerSelection, computerSelection) {
      if (playerSelection.toUpperCase() === 'ROCK'
        && computerSelection === 'PAPER') {
        computer++;
        console.log("You Lose! Paper beats Rock");
      } else if (playerSelection.toUpperCase() === 'PAPER'
        && computerSelection === 'ROCK') {
        player++;
        console.log("You Win! Paper beats Rock");
      } else if (playerSelection.toUpperCase() === 'SCISSORS'
        && computerSelection === 'ROCK') {
        computer++;
        console.log("You Lose! Rock beats Scissors");
      } else if (playerSelection.toUpperCase() === 'ROCK'
        && computerSelection === 'SCISSORS') {
        player++;
        console.log("You Win! Rock beats Scissors");
      } else if (playerSelection.toUpperCase() === 'PAPER'
        && computerSelection === 'SCISSORS') {
        computer++;
        console.log("You Lose! Scissors beats Paper");
      } else if (playerSelection.toUpperCase() === 'SCISSORS'
        && computerSelection === 'PAPER') {
        player++;
        console.log("You Win! Scissors beats Paper");
      } else {
        console.log("Draw!");
      }
      console.log(`Player: ${player}, Computer: ${computer}`);
    }
    const playerSelection = prompt("What do you use?");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  return player > computer ? 'You Win!'
    : player < computer ? 'You Lose!'
      : 'Draw!';
}
console.log(game());

function game() {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    function computerPlay() {
      let number = Math.floor(Math.random() * 3) + 1;
      return number === 1 ? 'Rock'
        : number === 2 ? 'Paper'
          : 'Scissors';
    }
    function playRound(playerSelection, computerSelection) {
      if (playerSelection === 'Rock' && computerSelection === 'Paper'
        || playerSelection === 'Scissors' && computerSelection === 'Rock'
        || playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computer++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      } else if (playerSelection === 'Paper' && computerSelection === 'Rock'
        || playerSelection === 'Rock' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        player++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      } else {
        console.log("Draw!");
      }
      console.log(`Player: ${player}, Computer: ${computer}`);
    }
    let playerSelection = prompt("What do you use?");
    playerSelection = playerSelection.charAt(0).toUpperCase()
      + playerSelection.slice(1).toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  return player > computer ? 'You Win!'
    : player < computer ? 'You Lose!'
      : 'Draw!';
}
console.log(game());

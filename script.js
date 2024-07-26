let choice = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;
let game = true;

function getComputerChoice() {
  let choices = Math.floor(Math.random() * 3);
  return choice[choices];
}

function getHumanChoice() {
  let choices = prompt(
    `Human's score: ${humanScore}, Computer's score: ${computerScore}\nPlease input your choice(Rock, Paper, Scissor): `
  ).toLowerCase();
  if (choices == "exit") {
    game = false;
    return;
  }
  while (!choice.includes(choices)) {
    choices = prompt(
      "Invalid choice. Please input your choice(Rock, Paper, Scissor): "
    ).toLowerCase();
  }

  return choices;
}

function playRound(human, computer) {
  if (human == computer) {
    console.log(
      `You choose ${human} and Computer choose ${computer}, You are draw.`
    );
  } else if (
    (human == "rock" && computer == "paper") ||
    (human == "scissor" && computer == "rock") ||
    (human == "paper" && computer == "scissor")
  ) {
    console.log(
      `You choose ${human} and Computer choose ${computer}, You lost.`
    );
    computerScore += 1;
  } else if (
    (human == "rock" && computer == "scissor") ||
    (human == "scissor" && computer == "paper") ||
    (human == "paper" && computer == "rock")
  ) {
    console.log(
      `You choose ${human} and Computer choose ${computer}, You Won.`
    );
    humanScore += 1;
  }
}

while (game == true) {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
}

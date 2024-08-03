let choice = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;
let game = true;


let playButtons = document.querySelectorAll(".btn");
let score = document.querySelector(".result")

playButtons.forEach(function (button) {
  button.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let humanChoice = button.textContent.toLowerCase();
    console.log(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
  });
});

function getComputerChoice() {
  let choices = Math.floor(Math.random() * 3);
  return choice[choices];
}

// function getHumanChoice() {
//   let choices = prompt(
//     `Human's score: ${humanScore}, Computer's score: ${computerScore}\nPlease input your choice(Rock, Paper, Scissor): `
//   ).toLowerCase();
//   if (choices == "exit") {
//     game = false;
//     return;
//   }
//   while (!choice.includes(choices)) {
//     choices = prompt(
//       "Invalid choice. Please input your choice(Rock, Paper, Scissor): "
//     ).toLowerCase();
//   }

//   return choices;
// }

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

  score.textContent = `Your score: ${humanScore}, Computer's Score: ${computerScore}`;
  
  if (humanScore == 3 || computerScore == 3) {
    if (humanScore == 3){
      score.textContent = `Gameover. You won.`;
    } else {
      score.textContent = `Gameover. You lost.`;
    }

    playButtons.forEach(function(button) {
      button.classList.add("visible");
    });
    
  }
}

// while (game == true) {
//   // let humanChoice = getHumanChoice();
//   

//   // playRound(humanChoice, computerChoice);
// }

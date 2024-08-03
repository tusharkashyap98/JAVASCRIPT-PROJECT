let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let compScorePara = document.querySelector("#comp-score");
let userScorePara = document.querySelector("#user-score");
let resetBtn = document.querySelector("#reset-btn");

const resetGame = () => {
  console.log("game has been reset");
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  userScore = 0;
  compScore = 0;
  msg.innerText = "play your move";
  msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = (userChoice, compChoice) => {
  console.log("game was draw");
  msg.innerText = `Game Draw, you chose ${userChoice} and computer also chose ${compChoice}`;
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you won, your ${userChoice} beat comp ${compChoice}`;
    msg.style.backgroundColor = "green";
    console.log("you won");
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lost comp ${compChoice} beat your ${userChoice}`;
    msg.style.backgroundColor = "red";
    console.log("you lose");
  }
};

playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame(userChoice, compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // comp choice =  paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // comp choice = scissors, rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log("choice was clicked");
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", resetGame);

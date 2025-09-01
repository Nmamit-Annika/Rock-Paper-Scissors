const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const messageEl = document.getElementById("message");
const timeEl = document.getElementById("time");

let playerScore = 0;
let computerScore = 0;
let timeLeft = 5;
let timer;

const choices = ["rock", "paper", "scissors"];

function startTimer() {
  clearInterval(timer);
  timeLeft = 5;
  timeEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      computerScore++;
      computerScoreEl.textContent = computerScore;
      messageEl.textContent = "⏰ Time's up! You lose!";
    }
  }, 1000);
}

function playRound(playerChoice) {
  clearInterval(timer);
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  if (playerChoice === computerChoice) {
    messageEl.textContent = `🤝 Draw! Both chose ${playerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    messageEl.textContent = `🎉 You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    messageEl.textContent = `💀 You lose! ${computerChoice} beats ${playerChoice}`;
  }
  startTimer();
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

document.getElementById("reset").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  messageEl.textContent = "";
  startTimer();
});

// Start game immediately
startTimer();

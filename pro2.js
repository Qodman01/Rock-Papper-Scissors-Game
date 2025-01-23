// Get buttons and result display
const resultDisplay = document.getElementById("result");

const buttons = document.querySelectorAll("button");
const choices = ["rock", "paper", "scissors"];

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Display the result
    resultDisplay.textContent = ` You chose ${playerChoice}, computer chose ${computerChoice}`;
  });
});

// Function to get computer's random choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) {
    document.querySelector("body").style.backgroundColor = "rgb(25, 0, 255)";

    return (document.querySelector(".class").textContent = "🔛It's a draw");
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    document.querySelector("body").style.backgroundColor = " #60b347";

    return (document.querySelector(".class").textContent = "🎉 You win!");
  } else {
    document.querySelector("body").style.backgroundColor = "rgb(255, 0, 0)";

    return (document.querySelector(".class").textContent = "❌ You lose!");
  }
}
//reload button
document.querySelector(".reload").addEventListener("click", function () {
  document.querySelector(".class").textContent = 0;
  document.querySelector("#result").textContent = "Make your choice";

  document.querySelector("body").style.backgroundColor = "#222";
});

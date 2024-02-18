const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const scoreDisplay = document.getElementById("score");
const triesDisplay = document.getElementById("tries");
const highScoreDisplay = document.getElementById("highscore");

let highScore = parseInt(localStorage.getItem("highScore")) || 0;
let score = 0;
let tries = parseInt(localStorage.getItem("tries")) || 0;

function jump() {
  if (!dino.classList.contains('jump-animation')) {
    dino.classList.add("jump-animation");
    setTimeout(() =>
      dino.classList.remove("jump-animation"), 500);
  }
}

document.addEventListener('keypress', jump);

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
  scoreDisplay.innerText = ++score;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = '';
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("You got a score of: " + score +
      "\n\nPlay again?");
    updateHighScore();
    resetGame();

  }
}, 50);

function updateTriesDisplay() {
  triesDisplay.textContent = "Number of tries: " + tries;
}

function incrementTries() {
  tries++;
  localStorage.setItem("tries", tries);
  updateTriesDisplay();
}

function resetGame() {
  score = 0;
  scoreDisplay.textContent = "0";
  incrementTries();
}

function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    highScoreDisplay.textContent = "High score: " + highScore;
  }
}

// Initial display of number of tries and high score
updateTriesDisplay();
highScoreDisplay.textContent = "High score: " + highScore;

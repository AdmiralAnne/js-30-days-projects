// game.js

// Generate a random number between 1 and 100
const target = Math.floor(Math.random() * 100) + 1;

// Get the input field and button from the HTML document
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");

// Add an event listener to the input field to listen for the Enter key
guessInput.addEventListener("keydown", function(event) {
  // Check if the Enter key was pressed
  if (event.key === "Enter") {
    // Get the guess from the input field
    const guess = parseInt(guessInput.value, 10);

    // Check if the guess is correct
    if (guess === target) {
      alert("Congratulations! You guessed it!");
      location.reload();  // Reload the page to restart the game
    } else if (guess > target) {
      document.getElementById("result").innerHTML = "Your guess was too high. Try a lower number.";
    } else {
      document.getElementById("result").innerHTML = "Your guess was too low. Try a higher number.";
    }
  }
});

// Add an event listener to the button to listen for clicks
submitButton.addEventListener("click", function() {
  // Get the guess from the input field
  const guess = parseInt(guessInput.value, 10);
  
  // Check if the guess is correct
  if (guess === target) {
    alert("Congratulations! You guessed it!");
    location.reload();  // Reload the page to restart the game
  } else if (guess > target) {
    document.getElementById("result").innerHTML = "Your guess was too high. Try a lower number.";
  } else {
    document.getElementById("result").innerHTML = "Your guess was too low. Try a higher number.";
  }
});

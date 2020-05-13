let game;

// listens for clicks on Start Game button, instantiates a new Game object, then calls startGame method
$("#btn__reset").click(() => {
  game = new Game();

  game.startGame();
});

// listens for clicks on the onscreen keyboard and calls handleInteraction method
$("#qwerty").on("click", "button", (event) => {
  const button = event.target;
  const letter = button.innerText;

  game.handleInteraction(button, letter);
});

// listens for keyboard events and calls handleInteraction method
$(document).keyup((event) => {
  if (!game.checkForWin()) {
    const letter = event.key;
    const button = $(`button.key:contains(${letter})`);

    game.handleInteraction(button, letter);
  }
  // const letter = event.key;
  // const button = $(`button.key:contains(${letter})`);

  // game.handleInteraction(button, letter);
});

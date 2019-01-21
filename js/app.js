let game;

// listens for clicks on Start Game button, instantiates a new Game object, then calls startGame method
$("#btn__reset").click(() => {
  game = new Game();

  game.startGame();
});

// listens for clicks on the onscreen keyboard and calls handleInteraction method
$("#qwerty").on("click", "button", (e) => {
  const button = e.target;

  game.handleInteraction(button);
});



// // recommended test for addPhraseToDisplay (does not work)
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// // tests that did work for addPhraseToDisplay
// const game = new Game();
// const phrase = new Phrase(game.getRandomPhrase());
// phrase.addPhraseToDisplay();


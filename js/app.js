let game;

// listens for clicks on Start Game button, instantiates a new Game object and calls startGame on it
$("#btn__reset").click(function() {
  game = new Game();

  game.startGame();
});



// // recommended test for addPhraseToDisplay (does not work)
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// // tests that did work for addPhraseToDisplay
// const game = new Game();
// const phrase = new Phrase(game.getRandomPhrase());
// phrase.addPhraseToDisplay();


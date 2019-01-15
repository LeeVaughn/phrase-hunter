let game;

// listens for clicks on Start Game button, instantiates a new Game object and calls startGame on it
$("#btn__reset").click(() => {
  game = new Game();

  game.startGame();
});

// listens for clicks on the displayed phrase and calls checkLetter passing clicked letter as a parameter
$("#phrase").on("click", "li", (e) => {
  const letter = e.target.innerText;

  game.activePhrase.checkLetter(letter);
});



// // recommended test for addPhraseToDisplay (does not work)
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// // tests that did work for addPhraseToDisplay
// const game = new Game();
// const phrase = new Phrase(game.getRandomPhrase());
// phrase.addPhraseToDisplay();


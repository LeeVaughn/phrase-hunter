let game;

// listens for clicks on Start Game button, instantiates a new Game object, then calls startGame method
$("#btn__reset").click(() => {
  game = new Game();

  game.startGame();
});

// listens for clicks on the onscreen keyboard and calls handleInteraction method
$("#qwerty").on("click", "button", (e) => {
  const button = e.target;
  const letter = button.innerText;

  game.handleInteraction(button, letter);
});

$(document).keyup((e) => {
  const letter = e.key;
  const button = $(`button:contains(${letter})`);

  game.handleInteraction(button, letter);
});



// // recommended test for addPhraseToDisplay (does not work)
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// // tests that did work for addPhraseToDisplay
// const game = new Game();
// const phrase = new Phrase(game.getRandomPhrase());
// phrase.addPhraseToDisplay();


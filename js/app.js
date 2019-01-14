/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // test getRandomPhrase
//  const logPhrase = (phrase) => {
//   console.log(`Phrase - phrase: `, phrase.phrase);
//   };
//   const game = new Game();
//   logPhrase(game.getRandomPhrase());
//   logPhrase(game.getRandomPhrase());
//   logPhrase(game.getRandomPhrase());
//   logPhrase(game.getRandomPhrase());
//   logPhrase(game.getRandomPhrase());
//   console.log(game.getRandomPhrase());

// // recommended test for addPhraseToDisplay (does not work)
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// tests that did work for addPhraseToDisplay
const game = new Game();
const phrase = new Phrase(game.getRandomPhrase());
phrase.addPhraseToDisplay();

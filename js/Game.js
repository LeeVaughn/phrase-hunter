/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
/**
 * creates phrases for use in game
 * @return {array} an array of phrases to be used in the game
 */
  createPhrases() {
    const phrases = [
      {phrase: "may the force be with you"},
      {phrase: "show me the money"},
      {phrase: "i see dead people"},
      {phrase: "my precious"},
      {phrase: "do or do not"}
    ]

    return phrases;
  }

  /**
   * selects a random phrase from phrases property
   * @return {object} randomly selected phrase object
   */
  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);
    
    return this.phrases[index];
  };
}
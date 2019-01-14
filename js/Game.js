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
      {phrase: "May the Force be with you"},
      {phrase: "Show me the money"},
      {phrase: "I see dead people"},
      {phrase: "My precious"},
      {phrase: "Do or do not"}
    ]

    return phrases;
  }

  /**
   * selects a random phrase from phrases property
   * @return {object} randomly selected phrase object
   */
  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);
    const phrase = this.phrases[index];

    return phrase;
  }
}
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // displays phrase on game board
  addPhraseToDisplay() {
    const phrase = phrase.phrase

    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === " ") {
        $li = $(`<li class="space"> <li>;`);
        // $("#phrase ul").append($li);
      } else {
        $li = $(`<li class="hide letter ${phrase[i]}">${phrase[i]}<li>;`);
        // $("#phrase ul").append($li);
      }
      $("#phrase ul").append($li);
    }
  }
}
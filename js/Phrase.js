/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  // displays phrase on game board
  addPhraseToDisplay() {
    const phrase = this.phrase.phrase;
    console.log(phrase);

    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === " ") {
        const $li = $(`<li class="space"> </li>`);
        $("#phrase ul").append($li);
      } else {
        const $li = $(`<li class="hide letter ${phrase[i]}">${phrase[i]}</li>`);
        $("#phrase ul").append($li);
      }
      // $("#phrase ul").append($li);
    }
  }
}
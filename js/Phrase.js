class Phrase {
  constructor(phrase) {
    this.phrase = phrase.phrase.toLowerCase();
  }

  // displays phrase on game board
  addPhraseToDisplay() {
    const phrase = this.phrase;
    console.log(phrase);

    // loops over phrase to create and append li elements for letters and spaces
    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === " ") {
        let $li = $(`<li class="space"> </li>`);
        $("#phrase ul").append($li);
      } else {
        let $li = $(`<li class="hide letter ${phrase[i]}">${phrase[i]}</li>`);
        $("#phrase ul").append($li);
      }
    }
  }

  /**
   * checks if passed letter is in phrase
   * @param (string) letter - letter to check
   * @return {boolean} true if phrase includes letter, false if it doesn't
won
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * displays passed letter on screen after a match is found
   * @param (string) letter - letter to display
   */
  showMatchedLetter(letter) {
    $($(`.${letter}`).removeClass("hide").addClass("show"));
  }
}
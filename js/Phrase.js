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
   */
  checkLetter(letter) {
    console.log("checking");
    console.log(letter);
    const phrase = this.phrase;

    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] === letter) {
        console.log("match");

        $($(`.${letter}`).removeClass("hide").addClass("show"));
        // const char = letter;
        // const match = document.querySelectorAll(`.${char}`);
        // console.log(match);

        // document.querySelectorAll(`.${char}`).classList.remove("hide");
        // match.classList.remove("hide");
      } else {
        console.log("no match");
      }
    }
  }

  /**
   * displays passed letter on screen after a match is found
   * @param (string) letter - letter to display
   */
  showMatchedLetter(letter) {

  }
}
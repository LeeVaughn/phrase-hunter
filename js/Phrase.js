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
}
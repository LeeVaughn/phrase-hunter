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

  // selects random phrase, stores it in activePhrase, displays it to user, and hides start overlay
  startGame() {
    this.activePhrase = new Phrase(game.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();

    $("#overlay").hide();
  }

  /**
   * handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - the clicked button element
   */
  handleInteraction(button) {
    const letter = button.innerText;

    // disables selected button
    $(button).prop("disabled", true);

    if (game.activePhrase.checkLetter(letter)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }

  /**
    * checks for winning move
    * @return {boolean} true if game has been won, false if game hasn't been won
    */
  checkForWin() {
    if ($(".hide").length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // increases the value of the missed property, removes a life, checks if player has remaining lives and ends game if not
  removeLife() {
    const index = 4 - this.missed;
    this.missed += 1;

    $(".tries img").eq(index).attr("src", "images/lostHeart.png");

    if (this.missed === 5) {
      game.gameOver(false);
    }
  }

  /**
   * displays game over message
   * @param {boolean} gameWon - whether or not the user won the game
   */
  gameOver(gameWon) {
    if (gameWon) {
      // update elements to show winning message
      $("#overlay h1").text("Congratulations! You win!");
      $(".start").attr("class", "win");
      $("#btn__reset").text("Play Again");
      $("#overlay").show();
    } else {
      // undate elements to show losing message
      $("#overlay h1").text("You are out of guesses. Better luck next time!");
      $(".start").attr("class", "lose");
      $("#btn__reset").text("Play Again");
      $("#overlay").show();
    }
  }
}
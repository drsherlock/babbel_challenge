import React from "react";

function GuessButton(props) {
  const { handleGuessClick } = props;

  return (
    <div id="guess-button">
      <button
        onClick={() => handleGuessClick()}
        type="button"
        data-testid="button-testid"
      >
        Guess
      </button>
    </div>
  );
}

export default GuessButton;
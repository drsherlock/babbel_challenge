import React from "react";

function GuessButton(props) {
  const { handleGuessClick } = props;

  return (
    <div>
      <button
        onClick={() => handleGuessClick()}
        type="button"
        data-testid="guess-button-testid"
      >
        Guess
      </button>
    </div>
  );
}

export default GuessButton;
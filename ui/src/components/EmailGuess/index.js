import React from "react";

function EmailGuess({ emailGuess }) {
  return emailGuess.email ? (
    <div>
      Email Guess is{" "}
      <i>
        <b>{emailGuess.email}</b>
      </i>
    </div>
  ) : null;
}

export default EmailGuess;

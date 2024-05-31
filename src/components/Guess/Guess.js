import React from 'react';
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessItem, answer }) {
  const guessClass = checkGuess(guessItem.label, answer);

  return (
      <p className="guess">
          {range(1, 6).map((guess, index) => (
              <span className={ 'cell ' + guessClass[index]['status'] } key={guess}>{guessItem.label[guess-1]}</span>
          ))}
      </p>
  );
}

export default Guess;

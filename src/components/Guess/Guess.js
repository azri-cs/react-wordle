import React from 'react';
import {range} from "../../utils";

function Guess({ guessItem }) {
  const strLength = guessItem.label.length;

  return (
      <p className="guess">
          {range(1, 6).map((guess, index) => (
              <span className="cell" key={guess}>{guessItem.label[guess-1]}</span>
          ))}
      </p>
  );
}

export default Guess;

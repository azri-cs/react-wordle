import React from 'react';

function GuessInput({ setGuessTerm, handleAddGuess, numOfGuesses }) {
    return <>
        <form id="guess-input-form" className="guess-input-wrapper"
              onSubmit={(event) => {
                  event.preventDefault();
                  if (numOfGuesses > 0) {
                      const guess = event.target.elements.guess_input.value;

                      event.target.elements.guess_input.value = '';

                      handleAddGuess(guess);
                      setGuessTerm(guess.toUpperCase());
                  } else {
                      alert('Your number of guesses exceed 6 times');
                  }
              }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" name="guess_input"
                   pattern=".{5,5}" title="5 characters required"
            />
        </form>
    </>;
}

export default GuessInput;
import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';

function GuessInput({guessTerm, setGuessTerm}) {
    console.log(guessTerm);

    return <>
        <form id="guess-input-form" className="guess-input-wrapper"
              onSubmit={(event) => {
                  event.preventDefault();
                  const newGuessValue = event.target.elements.guess_input.value;
                  event.target.elements.guess_input.value = '';
                  setGuessTerm(newGuessValue.toUpperCase());
              }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text" name="guess_input"
                   pattern=".{5,}" title="5 characters required"
            />
        </form>
    </>;
}

export default GuessInput;
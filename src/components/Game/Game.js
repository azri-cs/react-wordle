import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guessTerm, setGuessTerm] = React.useState('');
    const [guessList, setGuessList] = React.useState([]);

    function handleAddGuess(label){
        const newGuess = {
            label,
            id: crypto.randomUUID()
        };
        const newGuesses = [...guessList, newGuess];
        setGuessList(newGuesses);
    }

    return <>
        <GuessInput
            setGuessTerm={setGuessTerm}
            handleAddGuess={handleAddGuess}
        />
        <GuessList
            guessList={guessList}
        />
    </>;
}

export default Game;

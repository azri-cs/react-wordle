import React from 'react';

import {range, sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guessTerm, setGuessTerm] = React.useState('');
    const [guessList, setGuessList] = React.useState([]);
    const [numOfGuesses, setNumOfGuesses] = React.useState(NUM_OF_GUESSES_ALLOWED);

    function handleAddGuess(label){
        const newGuess = {
            label,
            id: crypto.randomUUID()
        };
        const newGuesses = [...guessList, newGuess];
        setGuessList(newGuesses);
        setNumOfGuesses(numOfGuesses-1);
    }

    return <>
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((rowNum, index) => (
                <React.Fragment key={index}>
                    {guessList[rowNum] ? (
                        <Guess
                            guessItem={guessList[rowNum]}
                            answer={answer}
                        />
                    ) : (
                        <p className="guess">
                            {range(1, 6).map((rowCol) => (
                                <span className="cell" key={rowCol}></span>
                            ))}
                        </p>
                    )}
                </React.Fragment>
            ))}
        </div>
        <GuessInput
            setGuessTerm={setGuessTerm}
            handleAddGuess={handleAddGuess}
            numOfGuesses={numOfGuesses}
        />
    </>;
}

export default Game;

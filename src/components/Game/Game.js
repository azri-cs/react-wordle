import React from 'react';

import {range, sample} from '../../utils';
import { checkGuess } from "../../game-helpers";
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guessTerm, setGuessTerm] = React.useState('');
    const [guessList, setGuessList] = React.useState([]);
    const [numOfGuesses, setNumOfGuesses] = React.useState(0);
    const [gameWon, setGameWon] = React.useState(false);
    console.log({gameWon});console.log({guessTerm});

    function handleAddGuess(label){
        const newGuess = {
            label,
            id: crypto.randomUUID()
        };
        const newGuesses = [...guessList, newGuess];
        setGuessList(newGuesses);
        setNumOfGuesses(numOfGuesses+1);
    }

    function checkCorrectGuess(uppercaseGuess) {
        setGameWon(uppercaseGuess === answer);
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
        { gameWon ? (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in
                    <strong> {numOfGuesses} guesses</strong>.
                </p>
            </div>
        ) : <GuessInput
            setGuessTerm={setGuessTerm}
            handleAddGuess={handleAddGuess}
            numOfGuesses={numOfGuesses}
            checkCorrectGuess={checkCorrectGuess}
        />
        }
    </>;
}

export default Game;

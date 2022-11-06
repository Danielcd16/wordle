import React, { useContext } from "react";
import { AppContext } from "../App";

export const GameOver = ()  =>{
  const {
    currAttempt,
    gameOver,
    correctWord,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "GGs, You guessed the word"
          : "NT, you failed"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && 
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      }
    </div>
  );
}

export default GameOver;
import React, { useState } from 'react';

const Game = () => {
    
    const [randomNumber, setRandomNumber]  = useState (Math.floor(Math.random() * 100) + 1);

    const [attempts, setAttempt] = useState(5);
    const [winMsg, setWinMsg] = useState("");
    const [hintMsg, setHintMsg] = useState("");
    const [userInput, setUserInput] = useState("");


    function checkAnswer() {

        setAttempt(attempts-1);
        setHintMsg("");
        if (attempts === 1){
            setWinMsg(`You lose ;(.. The correct answer is ${randomNumber}`);
            setAttempt(5);
            setRandomNumber(Math.floor(Math.random() * 100) + 1);
        }   
        else  if (userInput == randomNumber){
                setWinMsg("Correct ;)) ");  
                setWinMsg(`You Win ;;). The correct answer is ${randomNumber}`);          
        }
    }

    function giveHint(){
        let x = Math.abs(randomNumber-parseInt(userInput));
        console.log(x);
        if ( x < 10 )
            setHintMsg("You are too close to the correct answer..");
            else if (userInput > 100 || userInput < 0 )
                setHintMsg("Number should be between 0 - 100")
                else 
                setHintMsg("You are too far to the correct answer..");
            

    }

    const userInputHandler = (event) => setUserInput(event.target.value);

    return (
        <div class="gameCard">
            <h3>Choose a number between (1-100) </h3>
            <input placeholder={userInput} type="number" onChange={userInputHandler} />
            <br/>
            <button onClick={checkAnswer}> Submit </button>
            <button onClick={giveHint}> Hint </button>
            <br/>
            <p>You have {attempts} attempts.</p>
            <p>{hintMsg}</p>
            <h2>{winMsg}</h2>
        </div>
    );
};

export default Game;

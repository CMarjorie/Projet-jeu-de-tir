import {timerContext} from "./../../App";
import { useContext, useState } from "react";

export default function Timer(){
    const {timer, setTimer, isTimerOver} = useContext(timerContext);
   
    const [isOn, setIsOn] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    console.log({timer});
    return (
        <div className="Timer">
            {isOn && 
            <p>Timer: {timer}</p>
        }
        {!isHidden &&
            <button onClick={startGame} >Start</button>
            
        }
        {isTimerOver &&
            <button onClick={resetTimer} >ReStart</button>
        }
        </div>
    )
    function startGame(){
        setIsOn(true);
        setTimer();
        setIsHidden(true);
    }
    function resetTimer(){
        setIsHidden(false);
        isTimerOver(false);

    }
}
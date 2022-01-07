import { useContext } from "react";
import {scoreContext} from "./../../App";

export default function ScoreBoard(){

    const score = useContext(scoreContext).score;

    return(
        <div className="ScoreBoard">
            Score : {score}
        </div>
    );
}
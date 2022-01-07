import { useContext } from "react";
import {lifePointsContext} from "./../../App";

export default function LifePoints(){

    const lifePoints = useContext(lifePointsContext).lifePoints;

    return(
        <div className="LifePoints">
            LifePoints : {lifePoints}
        </div>
    );
}
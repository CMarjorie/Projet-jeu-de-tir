import BackGround from "../Molecules/BackGround";
import ScoreBoard from "../Atomes/ScoreBoard";
import LifePoints from "../Atomes/LifePoints";



export default function Sight() {
    

    return (
        <div className="Sight">
            Je suis le Sight
            <ScoreBoard />
            <LifePoints />
            <BackGround />
        </div>
    )
}
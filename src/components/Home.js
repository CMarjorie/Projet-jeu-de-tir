import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            Je suis la page Home
            <Link to="/goal">
                <button type="button">
                   GoalKeeper
                 </button>
            </Link>
            <Link to="/sight">
                <button type="button">
                    Sight
                </button>
            </Link>
            
        </div>
    )
}

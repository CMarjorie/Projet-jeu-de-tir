import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>

           <h1>Je suis la Homepage</h1> 
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

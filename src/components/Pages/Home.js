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

            <h2>Sight</h2>
            <p>Veuillez choisir votre niveau de difficulté</p>
            <div>
            <Link to="/sight/easy">
                <button type="button">
                    Facile
                </button>
            </Link>
            <Link to="/sight/medium">
                <button type="button">
                    Normal
                </button>
            </Link>
            <Link to="/sight/high">
                <button type="button">
                    Elevé
                </button>
            </Link>
            </div>
        </div>
    )
}

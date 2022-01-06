import { useState, useEffect } from "react";
import Circle from "../Atomes/Circle";

export default function BackGround(){
    const [circles, setCircles] = useState([]);
      
    return (
        <div className="BackGround">
           <Circle />
        </div>
    )

   
    
}



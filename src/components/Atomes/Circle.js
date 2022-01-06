import { useState } from "react";

export default function Circle(props){
    const [isClicked, setIsClicked] = useState(false);
    
    return (
        <>
            { !isClicked &&
                <button className="Circle " onClick={(e)=>setIsClicked(true)}></button>
            }
           </>
    )

}

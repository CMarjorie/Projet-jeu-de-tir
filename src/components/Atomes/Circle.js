import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {scoreContext} from "./../../App";

export default function Circle(props){
    const {level} = useParams();
    const [isClicked, setIsClicked] = useState(false);
    const [style,setStyle] = useState({
        top: "",
        left: ""
    });
    const setScore = useContext(scoreContext).setScore;

    useEffect(() => {
        newStyle();
    },[])
    
    return (
        <>
            { !isClicked &&
                <button className="Circle " onClick={handleClick} style={style} ></button>
            }
        </>
    )

    
    function handleClick(){
        setIsClicked(true);
        newStyle();
        console.log(level)
        switch(level){
            case 'easy':
                setTimeout(display,3000);
                break;
            case 'medium' :
                setTimeout(display,2000);
                break;
            case 'high' :
                setTimeout(display,1000); 
                break;
            default:
                return null;
        }
        setScore();
    }

    function display(){
        setIsClicked(false)
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function newStyle(){
        setStyle({
            top: getRandomArbitrary(0,(window.innerHeight*(50/100))-40).toString(10) + "px",
            left: getRandomArbitrary(0,(window.innerWidth*(50/100))-40).toString(10) + "px"
        })
    }
}